import type { Meal } from "@/components/Types/Category";
import { roundRating } from "@/lib/utils/helperFn";
import { Plus, ShoppingCart, Trash2 } from "lucide-react";
import Rating from "./Rating";

export default function CategoryCard({ meal }: { meal: Meal }) {
  const discountPercentage = meal.has_offer
    ? Math.round(((meal.price - meal.discount_price) / meal.price) * 100)
    : 0;

  return (
    <div className="px-4 pt-15 pb-5   relative">
      <div className="absolute top-2 left-2 text-sm px-2 py-1 text-white flex gap-2">
        {meal.is_featured ? (
          <div className="bg-primary px-2 py-3 rounded-br-2xl rounded-tl-2xl">
            Featured
          </div>
        ) : null}
        {meal.in_stock ? (
          <div className="bg-primary px-2 py-3 rounded-br-2xl rounded-tl-2xl">
            in stock
          </div>
        ) : null}
        {meal.has_offer ? (
          <div className="bg-primary px-2 py-3 rounded-br-2xl rounded-tl-2xl">
            {discountPercentage}% off
          </div>
        ) : null}
      </div>
      <div className="flex justify-center">
        <img
          src={meal.image_url}
          alt={meal.title}
          className=" h-48 object-contain"
        />
      </div>
      <div className="flex justify-between mt-4">
        <h3 className=" font-medium text-xl ">{meal.title}</h3>
        {meal.has_offer ? (
          <div className="flex gap-2">
            <span className="font-medium text-xl">
              ${meal.final_price.toFixed(2)}
            </span>
            <span className="line-through text-gray-500 text-sm">
              $ {meal.price.toFixed(2)}
            </span>
          </div>
        ) : (
          <span className="font-medium text-xl">${meal.price.toFixed(2)}</span>
        )}
      </div>

      <div className="flex items-center gap-2 mt-2">
        <span className="">{<Rating rating={roundRating(meal.rating)} />}</span>
        <span className="text-gray-500 text-sm">({meal.rating})/5 </span>
      </div>
      <div className="mt-4 flex justify-between items-center gap-3">
        <button className="w-full bg-primary text-white py-2 rounded-lg flex items-center justify-center gap-2">
          <ShoppingCart />
          Add to Cart
        </button>
        <button className="w-full border border-primary text-primary py-2 rounded-lg flex justify-between px-5">
          <button className="text-2xl">
            <Trash2 />
          </button>
          <span>1</span>
          <button className="text-2xl">
            <Plus />
          </button>
        </button>
      </div>
    </div>
  );
}
