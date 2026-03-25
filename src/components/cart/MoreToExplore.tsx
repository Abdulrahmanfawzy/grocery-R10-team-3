import { useRef } from "react";
import { Minus, Plus, Trash2, Star, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { useBestSells } from "@/hooks/useHomeData";
import { getProductTitle, getPrice, getImageUrl, getProductCategory } from "@/lib/utils/product.utils";

export interface ExploreItem {
  id: number | string;
  name: string;
  price: number;
  rating: number;
  tags: string[];
  image?: string;
}

interface MoreToExploreProps {
  items?: any[]; // Allow any for compatibility with API response
}

export default function MoreToExplore({ items }: MoreToExploreProps) {
  const { cart, addToCart, updateQuantity } = useCart();
  const { data: bestSellsData, isLoading } = useBestSells();
  const scrollRef = useRef<HTMLDivElement>(null);

  // If items not provided or empty, use best sells as fallback
  const displayItems = (items && items.length > 0) ? items : (bestSellsData?.data || []);

  const getItemQty = (id: number | string) => {
    return cart.find(i => i.id === id)?.qty || 0;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (isLoading && !items) {
    return <div className="py-10 text-center text-gray-500">Loading suggestions...</div>;
  }

  return (
    <section className="mt-12 relative px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#141212]">More To Explore</h2>
      </div>

      <div className="relative">
        {/* Navigation Buttons - Positioned on sides */}
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 rounded-full size-12 border-gray-100 bg-white hover:bg-[#014162] hover:text-white transition-all shadow-lg hidden md:flex text-gray-500"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="size-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 rounded-full size-12 border-gray-100 bg-white hover:bg-[#014162] hover:text-white transition-all shadow-lg hidden md:flex text-gray-500"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="size-6" />
        </Button>

        <div 
          ref={scrollRef}
          className="flex justify-start md:justify-start lg:justify-start gap-5 overflow-hidden pb-6 no-scrollbar snap-x transition-all scroll-smooth max-w-[285px] sm:max-w-[290px] md:max-w-[620px] lg:max-w-[910px] mx-auto"
        >
          {displayItems.map((item) => {
            const id = item.id;
            const title = getProductTitle(item);
            const price = getPrice(item.discount_price && parseFloat(item.discount_price) > 0 ? item.discount_price : item.price);
            const image = getImageUrl(item.image);
            const category = getProductCategory(item);
            const rating = getPrice(item.rating) || 4;
            const qty = getItemQty(id);
            const inStock = item.stock_quantity !== 0;

            const tags = [];
            if (inStock) tags.push("In Stock");
            if (item.offer_title) tags.push(item.offer_title);
            if (item.is_new) tags.push("New");

            return (
              <Card key={id} className="h-full flex flex-col min-w-[220px] sm:min-w-[200px] md:min-w-[300px] md:w-[300px] md:max-w-[300px] lg:min-w-0 lg:max-w-[290px] lg:w-[290px] max-w-[290px] sm:max-w-[200px] shrink-0 snap-start border-none shadow-md hover:shadow-xl transition-all duration-500 group overflow-hidden bg-white/50 backdrop-blur-sm min-h-[450px]">
                <CardContent className="p-2 lg:p-3 flex flex-col flex-1">
                  {/* Image Container */}
                  <div className="relative aspect-square bg-[#F8F9FA] flex items-center justify-center p-6 overflow-hidden">
                    {image ? (
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="text-5xl">📦</div>
                    )}
                    
                    {/* Tabs Container */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 overflow-hidden">
                      {tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          className={`text-[11px] md:text-xs text-white rounded-md shrink-0 whitespace-nowrap px-2 py-0.5 border-none shadow-sm font-bold ${
                            tag.toLowerCase().includes('off') || tag.toLowerCase().includes('save') ? 'bg-[#014162]' : 'bg-[#014162]'
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-base text-gray-700 line-clamp-2 flex-1 group-hover:text-[#014162] transition-colors min-h-[40px]">
                        {title}
                      </h3>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="font-bold text-base text-gray-800">£ {price.toFixed(1)}</span>
                        {(item.discount_price && parseFloat(item.discount_price) > 0) && (
                          <span className="text-sm text-gray-400 line-through">£ {getPrice(item.price).toFixed(0)}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`size-3.5 ${
                              s <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 font-medium">({rating}/5)</span>
                    </div>

                    <div className="flex items-center gap-2 mt-auto">
                      <Button
                        disabled={!inStock}
                        className={`flex-1 flex items-center justify-center gap-2 h-9 rounded-md text-white text-sm font-bold px-2 transition-all duration-300 shadow-sm ${inStock ? 'bg-[#014162] hover:bg-[#013550]' : 'bg-gray-400 cursor-not-allowed'}`}
                        onClick={() => addToCart({
                          id,
                          name: title,
                          price,
                          image,
                          qty: 1,
                          inStock: true
                        })}
                      >
                        <ShoppingCart className="size-4 shrink-0" />
                        <span>Add To Cart</span>
                      </Button>

                      <div className="flex items-center justify-between border border-gray-200 rounded-md h-9 px-1 gap-1 min-w-[90px] bg-white">
                        <Button
                          variant="ghost"
                          size="icon"
                          disabled={qty === 0}
                          className="size-7 rounded-sm text-gray-500 hover:bg-gray-100 shrink-0"
                          onClick={() => qty > 0 && updateQuantity(id, -1)}
                        >
                          {qty === 1 ? <Trash2 className="size-3.5" /> : <Minus className="size-3.5" />}
                        </Button>
                        <span className="flex-1 text-center text-sm font-bold text-gray-700">
                          {qty}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          disabled={!inStock}
                          className="size-7 rounded-sm text-gray-500 hover:bg-gray-100 shrink-0"
                          onClick={() => {
                            if (qty === 0) {
                              addToCart({
                                id,
                                name: title,
                                price,
                                image,
                                qty: 1,
                                inStock: true
                              });
                            } else {
                              updateQuantity(id, 1);
                            }
                          }}
                        >
                          <Plus className="size-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const exploreItems = []; // Keep for compatibility but it's now dynamic
