import type { OrderSummaryProps } from "@/lib/types/cart";
import { CartItem } from "../CartItem";

export const OrderSummary = ({ cartItems }: OrderSummaryProps) => {
  const subtotal = 555;
  const shipping = 25;
  const total = subtotal + shipping;

  return (
    <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm sticky top-8">
      <h3 className="text-xl font-bold mb-6">Cart Summary</h3>

      <div className="space-y-2 max-h-100 overflow-y-auto pr-4 custom-scrollbar">
        {cartItems.map((item, idx) => (
          <CartItem key={idx} item={item} />
        ))}
      </div>

      <div className="mt-8 space-y-4 pt-6 border-t border-dashed border-gray-200">
        <div className="flex justify-between text-base text-gray-400">
          <span>Subtotal</span>
          <span className="font-medium">£ {subtotal}</span>
        </div>
        <div className="flex justify-between text-base text-gray-400">
          <span>Shipping</span>
          <span className="font-medium">£ {shipping}</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-[#004a61] pt-2 border-t border-gray-100">
          <span>Total</span>
          <span>£ {total}</span>
        </div>
      </div>
    </div>
  );
};
