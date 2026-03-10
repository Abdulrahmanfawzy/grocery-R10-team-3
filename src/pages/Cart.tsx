import { useQuery } from "@tanstack/react-query";
import CartTotals, { SHIPPING } from "@/components/cart/CartTotals";
import CartDeliveryPromo from "@/components/cart/CartDeliveryPromo";
import MoreToExplore, { exploreItems } from "@/components/cart/MoreToExplore";
import CartProducts, {
  type CartProduct as CartProductType,
} from "@/components/cart/CartProducts";
import { getCart } from "@/lib/api/cartApi";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setCartItems } from "@/lib/store/cartSlice";
import { useEffect } from "react";

export default function Cart() {
  const dispatch = useAppDispatch();

  const {
    data: cartItems = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const currentCartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    if (cartItems.length > 0 && currentCartItems.length === 0) {
      const itemsForRedux = cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        outOfStock: item.outOfStock,
        image: item.image || "",
      }));
      dispatch(setCartItems(itemsForRedux));
    }
  }, [cartItems, dispatch, currentCartItems.length]);

  const cart: CartProductType[] = cartItems.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    qty: item.quantity,
    inStock: !item.outOfStock,
    image: item.image,
  }));

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#014162] mx-auto mb-4"></div>
            <p className="text-gray-500">Loading cart...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-red-500">
              Failed to load cart. Please try again.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      <p className="text-sm text-muted-foreground">
        <a href="/" className="hover:underline">
          Home
        </a>{" "}
        / <span className="text-foreground font-semibold">Cart</span>
      </p>

      <CartProducts cart={cart} setCart={() => {}} />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CartTotals cart={cart} shipping={SHIPPING} />
        <CartDeliveryPromo />
      </section>

      <MoreToExplore items={exploreItems} />
    </div>
  );
}
