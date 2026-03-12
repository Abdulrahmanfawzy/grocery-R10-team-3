import { Star, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: string | number;
  category: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image?: string;
  brand?: string;
  inStock?: boolean;
}

const ProductCard = ({
  id,
  category,
  title,
  price,
  oldPrice,
  rating,
  image,
  brand = "Mr food",
  inStock = true,
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id,
      name: title,
      price,
      image,
      qty: 1,
      inStock,
    });
    toast.success("تمت العملية بنجاح!");
  };

  return (
    <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-300 relative group">
      <CardContent className="p-3 flex flex-col h-full">
        <div className="relative aspect-square mb-2 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center p-0">
          {image ? (
            <img
              src={image}
              alt={title}
              className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform"
            />
          ) : (
            <div className="text-4xl">🥕</div>
          )}
        </div>

        <p className="text-[10px] text-gray-400 font-medium mb-1 uppercase tracking-wider">
          {category}
        </p>
        <h3 className="font-bold text-sm text-[#141212] mb-1 line-clamp-2 min-h-[40px] uppercase">
          {title}
        </h3>

        <div className="flex items-center gap-1 mb-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`size-3 ${
                  s <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400">(4)</span>
        </div>

        <p className="text-[10px] text-gray-400 mb-3">
          By <span className="text-blue-900">{brand}</span>
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-blue-900">£{price}</span>
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                £{oldPrice}
              </span>
            )}
          </div>
          <Button
            size="default"
            className={`text-white rounded-md px-4 py-2 text-sm gap-2 transition-all duration-300 hover:scale-110 active:scale-90 shadow-sm hover:shadow-md ${inStock ? "bg-blue-900 hover:bg-[#034d70]" : "bg-gray-400 cursor-not-allowed"}`}
            onClick={handleAdd}
            disabled={!inStock}
          >
            <ShoppingCart className="size-4" />
            {inStock ? "Add" : "Out"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
