import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/lib/api/profile/addToCart/addToCart";
import { Loader2 } from "lucide-react";
import React from "react";

type ButtonSize =
  | "icon"
  | "default"
  | "fit"
  | "xs"
  | "sm"
  | "lg"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg";
interface Props {
  id: number;
  quantity: number;
  size?: ButtonSize;
  icon?: React.ReactNode;
}

const AddToCart = ({ id, quantity, icon, size }: Props) => {
  const { mutate, isPending } = useAddToCart();

  const handleAddToCart = () => {
    mutate({
      meal_id: id,
      quantity: quantity,
    });
  };

  return (
    <Button
      size={size || "default"}
      className="flex cursor-pointer items-center"
      onClick={handleAddToCart}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="animate-spin w-4" />
      ) : icon ? (
        icon
      ) : (
        "Add to cart"
      )}
    </Button>
  );
};

export default AddToCart;
