import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { CartProduct } from "./CartProducts";

export const SHIPPING = 40;

interface CartTotalsProps {
  cart: CartProduct[];
  shipping: number;
}

export default function CartTotals({ cart, shipping }: CartTotalsProps) {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartLength = cart.length;
  return (
    <div className="space-y-4">
      <h2 className="font-semibold">Total Amount</h2>
      <Card className="py-5">
        <CardContent className="space-y-3 px-5">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Subtotal</span>
            <span>£ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Shipping</span>
            <span>£ {shipping.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-sm font-semibold">
            <span>Total</span>
            <span>£ {(subtotal + shipping).toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>
      <Button
        className="w-fit px-8 bg-blue-900 hover:bg-blue-900/90 text-white"
        disabled={cartLength === 0}
      >
        <Link to="/checkout1">Go To Checkout</Link>
      </Button>
    </div>
  );
}
