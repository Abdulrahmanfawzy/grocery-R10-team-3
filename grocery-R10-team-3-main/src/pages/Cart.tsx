import { useState } from "react";
import CartTotals, { SHIPPING } from "@/components/cart/CartTotals";
import CartDeliveryPromo from "@/components/cart/CartDeliveryPromo";
import MoreToExplore, { exploreItems } from "@/components/cart/MoreToExplore";
import CartProducts, { initialCart } from "@/components/cart/CartProducts";

export default function Cart() {
  const [cart, setCart] = useState(initialCart);    

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">

      {/* Breadcrumb */}
      <p className="text-sm text-muted-foreground">
        <a href="/" className="hover:underline">Home</a> / <span className="text-foreground font-semibold">Cart</span>
      </p>

      {/* ── Cart Items ── */}
      <CartProducts cart={cart} setCart={setCart} />

      {/* ── Totals + Delivery ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <CartTotals cart={cart} shipping={SHIPPING} />
        <CartDeliveryPromo />

      </section>

      {/* ── More To Explore ── */}
      <MoreToExplore items={exploreItems} />

    </div>
  );
}
