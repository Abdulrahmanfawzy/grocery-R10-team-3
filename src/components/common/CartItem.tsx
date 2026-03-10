import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CartItemProps } from "@/lib/types/cart";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { incrementQty, decrementQty } from "@/lib/store/cartSlice";

export const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const currentItem = cartItems.find((i) => i.id === item.id);
  const quantity = currentItem?.quantity ?? item.quantity;

  const handleIncrement = () => {
    dispatch(incrementQty(item.id));
  };

  const handleDecrement = () => {
    if (quantity <= 1) {
      dispatch(decrementQty(item.id));
      return;
    }
    dispatch(decrementQty(item.id));
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b last:border-0">
      <div className="relative w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center p-2">
        <img
          src={item.image}
          alt={item.name}
          className="object-contain max-h-full"
        />
        {item.outOfStock && (
          <span className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] text-center py-0.5">
            Out Of Stock
          </span>
        )}
        {!item.outOfStock && (
          <span className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] text-center py-0.5">
            In Stock
          </span>
        )}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-slate-700">{item.name}</h4>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded-md px-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={handleDecrement}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-sm px-2">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={handleIncrement}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <span className="font-semibold text-sm">
            £ {(item.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
