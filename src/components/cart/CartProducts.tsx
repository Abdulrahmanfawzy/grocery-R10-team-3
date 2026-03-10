import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import orangeImg from "@/assets/oranges.jpg";
import sausageImg from "@/assets/sausage with fat balady.jpg";
import eggsImg from "@/assets/zanaty eggs 30 pcs.jpg";
import saltImg from "@/assets/cooks-salt.jpg";
import breadImg from "@/assets/diet bread.jpg";
import milkImg from "@/assets/almarai fresh full fat milk.jpg";
import teaImg from "@/assets/el Arosa loose Black Tea.jpg";
import pastaImg from "@/assets/Italiano spaghetti pasta.jpg";

export interface CartProduct {
  id: number;
  name: string;
  price: number;
  qty: number;
  inStock: boolean;
  image?: string;
}

export const initialCart: CartProduct[] = [
  {
    id: 1,
    name: "Premium Organic Orange - 1KG",
    price: 20,
    qty: 1,
    inStock: true,
    image: orangeImg,
  },
  {
    id: 2,
    name: "Sausage With Fat Balady",
    price: 400,
    qty: 1,
    inStock: true,
    image: sausageImg,
  },
  {
    id: 3,
    name: "Zanaty White Eggs - 30Pieces",
    price: 189,
    qty: 1,
    inStock: false,
    image: eggsImg,
  },
  {
    id: 4,
    name: "COOKS - SALT - 400G",
    price: 12,
    qty: 4,
    inStock: true,
    image: saltImg,
  },
  {
    id: 5,
    name: "Diet Bread - 5 Pieces",
    price: 24.95,
    qty: 2,
    inStock: true,
    image: breadImg,
  },
  {
    id: 6,
    name: "Almarai Fresh Full Fat Milk - 1.5L",
    price: 78.5,
    qty: 1,
    inStock: true,
    image: milkImg,
  },
  {
    id: 7,
    name: "El Arosa Loose Black Tea - 40 Gr",
    price: 10,
    qty: 1,
    inStock: true,
    image: teaImg,
  },
  {
    id: 8,
    name: "Italiano Pasta Spaghetti - 1Kg",
    price: 55,
    qty: 1,
    inStock: true,
    image: pastaImg,
  },
];

interface CartProductsProps {
  cart: CartProduct[];
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

export default function CartProducts({ cart, setCart }: CartProductsProps) {
  const onQuantityChange = (id: number, delta: number) =>
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );

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
                <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden border border-border">
                  {/* Read image from initialCart so pictures instantly load on save without needing a manual page Refresh */}
                  {item.image ||
                  initialCart.find((i) => i.id === item.id)?.image ? (
                    <img
                      src={
                        item.image ||
                        initialCart.find((i) => i.id === item.id)?.image
                      }
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
                        className="rounded-none"
                        onClick={() => onQuantityChange(item.id, -1)}
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
                        className="rounded-none"
                        onClick={() => onQuantityChange(item.id, 1)}
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
