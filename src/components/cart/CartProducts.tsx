 import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { type CartProduct } from "@/context/CartContext";

interface CartProductsProps {
  cart: CartProduct[];
  updateQuantity: (id: number | string, delta: number) => void;
}

export default function CartProducts({ cart, updateQuantity }: CartProductsProps) {
  return (
    <section>
      <h1 className="text-lg font-semibold mb-4">Products In Cart</h1>
      <Card className="py-0 gap-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {cart.map((item, idx) => (
            <div
              key={item.id}
              className={[
                idx % 2 === 0 ? "md:border-r" : "",
                idx < cart.length - 2 ? "border-b" : "",
                "border-border",
              ].join(" ")}
            >
              <div className="flex gap-4 p-5">
                <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center shrink-0 overflow-hidden border border-border">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-2xl">🛒</div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1 line-clamp-2">
                    {item.name}
                  </p>
                  <Badge className="text-[10px] bg-[#014162] text-white rounded-full">
                    {item.inStock ? "In Stock" : "Out Of Stock"}
                  </Badge>
                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity control */}
                    <div className="flex items-center border border-border rounded-md overflow-hidden">
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        className="rounded-md"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        {item.qty === 1 ? (
                          <Trash2 className="size-3" />
                        ) : (
                          <Minus className="size-3" />
                        )}
                      </Button>
                      <span className="w-7 text-center text-sm font-medium">
                        {item.qty}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        className="rounded-md"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="size-3" />
                      </Button>
                    </div>
                    <span className="text-sm font-semibold">
                      £ {(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
