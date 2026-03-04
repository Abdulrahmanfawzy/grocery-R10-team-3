import { useState } from "react";
import { Minus, Plus, Trash2, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import spiroImg from "@/assets/spiro spathis.jpg";
import v7Img from "@/assets/v7 cola  300ml.jpg";
import nestleImg from "@/assets/nestle pure life 6l.jpg";
import orangeImg from "@/assets/oranges.jpg";

export interface ExploreItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  tags: string[];
  image?: string;
}

export const exploreItems: ExploreItem[] = [
  { id: 1, name: "Spiro Spathis Lemon", price: 8.8,  rating: 4, tags: ["In Stock", "Save 20%", "New"], image: spiroImg },
  { id: 2, name: "V7 Cola - 300Ml",     price: 15,   rating: 4, tags: ["In Stock"],                    image: v7Img },
  { id: 3, name: "Nestlé Pure Life 6L", price: 60,   rating: 5, tags: ["In Stock"],                    image: nestleImg },
  { id: 4, name: "Fresh Orange Juice",  price: 35,   rating: 4, tags: ["In Stock", "New"],             image: orangeImg },
];

interface MoreToExploreProps {
  items?: ExploreItem[]; // Optional now since we can use internal exploreItems
}

export default function MoreToExplore({ items = exploreItems }: MoreToExploreProps) {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const onQuantityChange = (id: number, delta: number) =>
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] ?? 0) + delta) }));

  return (
    <section>
      <h2 className="font-semibold mb-4">More To Explore</h2>
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 border border-border bg-background shadow-sm"
        >
          <ChevronLeft className="size-4" />
        </Button>

        <div className="flex justify-center gap-4 overflow-x-auto pb-4 px-1 snap-x">
          {items.map((item) => (
            <Card key={item.id} className="min-w-[220px] max-w-[220px] shrink-0 py-4 snap-start">
              <CardContent className="flex flex-col gap-3 px-4">
                {/* Tags Container: Flex without wrap, scrolling horizontally if needed */}
                <div className="flex gap-1 overflow-x-auto pb-1 no-scrollbar">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="text-[10px] bg-[#014162] text-white rounded-full shrink-0 whitespace-nowrap"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="h-28 bg-muted rounded-lg flex items-center justify-center overflow-hidden border border-border">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-3xl">🧃</div>
                  )}
                </div>

                <div className="flex justify-between items-start gap-2">
                  <p className="text-xs font-medium line-clamp-2 flex-1">{item.name}</p>
                  <span className="text-sm font-semibold whitespace-nowrap">£ {item.price}</span>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`size-3 ${
                        s <= item.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#014162] hover:bg-[#014162]/90 text-white text-xs"
                    onClick={() => onQuantityChange(item.id, 1)}
                  >
                    Add To Cart
                  </Button>
                  <div className="flex items-center border border-border rounded-md overflow-hidden">
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      className="rounded-none"
                      onClick={() => onQuantityChange(item.id, -1)}
                    >
                      {(quantities[item.id] ?? 0) <= 1 ? (
                        <Trash2 className="size-3" />
                      ) : (
                        <Minus className="size-3" />
                      )}
                    </Button>
                    <span className="w-5 text-center text-xs font-medium">
                      {quantities[item.id] ?? 0}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      className="rounded-none"
                      onClick={() => onQuantityChange(item.id, 1)}
                    >
                      <Plus className="size-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 border border-border bg-background shadow-sm"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
