import { CartItem } from "../CartItem";
import { useCart } from "@/context/CartContext";
import type { CartProduct } from "@/context/CartContext";

interface OrderSummaryProps {
  cart?: CartProduct[];
}

export const OrderSummary = ({ cart }: OrderSummaryProps) => {
  const { updateQuantity, cart: contextCart } = useCart();

  const cartItems = cart ?? contextCart;

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal * 0.1;
  const total = subtotal + shipping;

  return (
    <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm sticky top-8">
      <h3 className="text-xl font-bold mb-6">Cart Summary</h3>

      <div className="space-y-2 max-h-100 overflow-y-auto pr-4 custom-scrollbar">
        {cartItems.length === 0 ? (
          <p className="text-gray-400 text-center py-4">Your cart is empty</p>
        ) : (
          cartItems.map((item, idx) => (
            <CartItem
              key={item.id || idx}
              item={{
                ...item,
                id: Number(item.id),
                image: item.image || "",
                quantity: item.qty,
                outOfStock: !item.inStock,
              }}
              onUpdateQuantity={(delta: number) =>
                updateQuantity(item.id, delta)
              }
            />
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 space-y-4 pt-6 border-t border-dashed border-gray-200">
          <div className="s text-xl font-bold text-[#004a61] pt-2  border-gray-100">
            <span>Total Amounts</span>
          </div>
          <div className="flex justify-between text-base text-gray-400">
            <span>Subtotal</span>
            <span className="font-medium">£ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-base text-gray-400">
            <span>Shipping</span>
            <span className="font-medium">£ {shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-semibold text-[#004a61] pt-2 border-t border-gray-100">
            <span>Total</span>
            <span>£ {total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};
