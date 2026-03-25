import { Star, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { useCart } from "@/context/CartContext";

interface BestSellCardProps {
  id: string | number;
  category: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  image?: string;
  sold: number;
  total: number;
  badge?: string;
  inStock?: boolean;
}

const BestSellCard = ({
  id,
  category,
  title,
  price,
  oldPrice,
  rating = 4,
  image,
  sold,
  total,
  badge,
  inStock = true,
}: BestSellCardProps) => {
  const { addToCart } = useCart();
  const progress = (sold / total) * 100;

  const handleAdd = () => {
    addToCart({
      id,
      name: title,
      price,
      image,
      qty: 1,
      inStock
    });
  };

  return (
    <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-300 relative group">
      {badge && (
        <span className={`absolute top-2 left-2 text-sm px-3 py-2 lg:text-xs lg:px-2.5 lg:py-1.5 rounded-sm z-10 font-bold tracking-wide ${
          badge.includes('%') || badge.toLowerCase().includes('off') || badge.toLowerCase().includes('discount') 
            ? 'bg-[#C4A484] text-white' 
            : 'bg-[#ADD8E6] text-blue-900'
        }`}>
          {badge}
        </span>
      )}
      <CardContent className="p-3 flex flex-col h-full">
        <div className="relative aspect-4/3 mb-2 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center p-0">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" 
            />
          ) : (
            <div className="text-4xl text-gray-300">🥫</div>
          )}
        </div>

        <p className="text-[10px] text-gray-400 font-medium mb-1 uppercase tracking-wider">{category}</p>
        <h3 className="font-bold text-sm text-[#141212] mb-1 line-clamp-2 min-h-[40px] uppercase">
          {title}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`size-3 ${
                  s <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400">(4)</span>
        </div>

        <p className="text-[10px] text-gray-400 mb-3">By <span className="text-blue-900">Mr food</span></p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-blue-900">£{price}</span>
          {oldPrice && <span className="text-xs text-gray-400 line-through">£{oldPrice}</span>}
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <Progress value={progress} className="h-1.5 bg-gray-100" />
          <p className="text-[10px] text-gray-500 font-medium">Sold: {sold}/{total}</p>
        </div>

        <Button 
          className={`w-full text-white rounded-md py-3 text-sm font-bold uppercase gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md ${inStock ? 'bg-blue-900 hover:bg-[#034d70]' : 'bg-gray-400 cursor-not-allowed'}`}
          onClick={handleAdd}
          disabled={!inStock}
        >
          <ShoppingCart className="size-5" />
          {inStock ? 'Add to cart' : 'Out of Stock'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BestSellCard;
