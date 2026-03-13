import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CheckoutContext, { type CheckoutStep } from "./checkout.context";
import { getCart } from "@/lib/api/cartApi";
import type { CartItem } from "@/lib/types/checkoutpage2.types";

const stepFromPath = (pathname: string): CheckoutStep => {
  if (pathname.includes("payment")) return "payment";
  if (pathname.includes("confirmation")) return "confirmation";
  return "shipping";
};

const calcSummary = (items: CartItem[], tax: number, shipping: number) => {
  const subtotal = parseFloat(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2),
  );
  return {
    subtotal,
    shipping,
    tax,
    total: parseFloat((subtotal + tax).toFixed(2)),
  };
};

function CheckoutProvider() {
  const location = useLocation();
  const currentStep = stepFromPath(location.pathname);

  const [items, setItems] = useState<CartItem[]>([]);
  const [summary, setSummary] = useState({
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCart()
      .then((data) => {
        setItems(data.items);
        setSummary({
          subtotal: data.subtotal,
          shipping: 0,
          tax: data.tax,
          total: data.total,
        });
      })
      .catch((err) => console.error("Failed to load cart:", err))
      .finally(() => setLoading(false));
  }, []);

  const updateItemQuantity = (id: string, newQuantity: number) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        String(item.id) === id ? { ...item, quantity: newQuantity } : item,
      );
      setSummary((prev) => calcSummary(updatedItems, prev.tax, prev.shipping));
      return updatedItems;
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => String(item.id) !== id);
      setSummary((prev) => calcSummary(updatedItems, prev.tax, prev.shipping));
      return updatedItems;
    });
  };

  return (
    <CheckoutContext.Provider
      value={{
        currentStep,
        items,
        summary,
        loading,
        updateItemQuantity,
        removeItem,
      }}>
      <Outlet />
    </CheckoutContext.Provider>
  );
}

export default CheckoutProvider;
