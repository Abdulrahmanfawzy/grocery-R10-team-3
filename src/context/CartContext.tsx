import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { cartApi } from "../lib/api/cart.api";
import { toast } from "sonner";

export interface CartProduct {
  id: number | string;
  name: string;
  price: number;
  qty: number;
  inStock: boolean;
  image?: string;
  cartItemId?: number; // Needed to update or delete specific unique records on the backend
}

interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number | string) => void;
  updateQuantity: (id: number | string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartProduct[]>(() => {
    const savedCart = localStorage.getItem("grocery_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Fetch from endpoint on load!
  const fetchCartFromAPI = async () => {
    try {
      const response = await cartApi.getCart();
      if (response && response.items) {
        const apiCartItems = response.items.map((i: any) => ({
          id: i.product_id || i.meal_id || i.id, // Fallbacks based on backend implementation
          name: i.name || "Product",
          price: Number(i.price) || 0,
          qty: i.quantity || 1,
          inStock: true,
          image: i.image,
          cartItemId: i.id, // Track the exact record ID for updates/deletions
        }));
        setCart(apiCartItems);
      }
    } catch (err) {
      console.warn(
        "Failed to load remote cart, falling back to localState",
        err,
      );
    }
  };

  useEffect(() => {
    fetchCartFromAPI();
  }, []);

  // Update visual state local storage so it feels instantly responsive!
  useEffect(() => {
    localStorage.setItem("grocery_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (product: CartProduct) => {
    // 1. Instantly respond on UI (Optimistic update)
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });

    // 2. Perform backend operation
    try {
      const existingCartItem = cart.find((i) => i.id === product.id);
      if (existingCartItem && existingCartItem.cartItemId) {
        // If we know the cart record ID, update quantity in the backend
        await cartApi.updateItem(existingCartItem.cartItemId, {
          quantity: existingCartItem.qty + 1,
        });
      } else {
        // Otherwise, add entirely new item to the endpoint!
        await cartApi.addItem({ meal_id: Number(product.id), quantity: 1 });
        await fetchCartFromAPI(); // Synchronize new items to get cartItemId!
      }
    } catch (err) {
      console.error("Backend add failed", err);
      fetchCartFromAPI(); // Revert to source of truth if fail
    }
  };

  const removeFromCart = async (id: number | string) => {
    const targetItem = cart.find((i) => i.id === id);
    toast.success("تمت العملية بنجاح!");

    // Optimistic Update
    setCart((prev) => prev.filter((item) => item.id !== id));

    // Backend operation
    if (targetItem && targetItem.cartItemId) {
      try {
        await cartApi.deleteItem(targetItem.cartItemId);
      } catch (err) {
        console.error("Backend remove failed", err);
        fetchCartFromAPI(); // Revert to source of truth if fail
      }
    }
  };

  const updateQuantity = async (id: number | string, delta: number) => {
    const targetItem = cart.find((i) => i.id === id);
    if (!targetItem) return;

    const newQty = targetItem.qty + delta;

    if (newQty <= 0) {
      await removeFromCart(id);
      toast.success("تمت العملية بنجاح!");

      return;
    }

    // Optimistic Update
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item)),
    );

    // Backend operation
    if (targetItem.cartItemId) {
      try {
        await cartApi.updateItem(targetItem.cartItemId, { quantity: newQty });
        toast.success("تمت العملية بنجاح!");
      } catch (err) {
        console.error("Backend update quantity failed", err);
        fetchCartFromAPI(); // Revert to source of truth if fail
      }
    } else {
      await fetchCartFromAPI();
    }
  };

  const clearCart = async () => {
    setCart([]); // Optimistic wipe

    try {
      await cartApi.clearCart();
    } catch (err) {
      console.error("Backend wipe failed", err);
      fetchCartFromAPI(); // Revert to truth
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
