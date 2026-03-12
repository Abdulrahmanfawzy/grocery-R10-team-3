import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from "../common/MainCard";
import { useCategoryMeals } from "@/hooks/useCategoryMeals";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../home/ProductCard";
import {
  getImageUrl,
  getPrice,
  getProductCategory,
  getProductTitle,
} from "@/lib/utils/product.utils";

export default function CategorySlider({ categoryId }: { categoryId: number }) {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const { category, meals, isLoading, error } = useCategoryMeals(
    categoryId,
    searchTerm,
  );
  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto my-10">
        <Skeleton className="h-8 w-48 mb-4" />
        <div className="flex gap-4">
          {[...Array(3)].map((i) => (
            <Skeleton key={i} className="h-96 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto my-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-lg font-semibold mb-4">{category?.name}</h2>
      {meals.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mx-auto"
        >
          <CarouselContent>
            {meals.map((meal) => (
              <CarouselItem key={meal.id} className=" lg:basis-1/3">
                <div className="p-1">
                  {/* <Card>
                    <CategoryCard meal={meal} />
                  </Card> */}
                  <ProductCard
                    key={meal.id}
                    id={meal.id.toString()}
                    category={getProductCategory(meal)}
                    title={getProductTitle(meal)}
                    price={
                      meal.discount_price &&
                      parseFloat(meal.discount_price.toString()) > 0
                        ? getPrice(meal.discount_price)
                        : getPrice(meal.price)
                    }
                    oldPrice={
                      meal.discount_price &&
                      parseFloat(meal.discount_price.toString()) > 0
                        ? getPrice(meal.price)
                        : undefined
                    }
                    rating={getPrice(meal.rating) || 4}
                    image={getImageUrl(meal.image_url)}
                    brand={meal.brand}
                    inStock={
                      meal.stock_quantity !== undefined
                        ? meal.stock_quantity > 0
                        : true
                    }
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : searchTerm ? (
        <p className="text-muted-foreground text-sm">
          No meals found for "{searchTerm}" in this category.
        </p>
      ) : null}
    </div>
  );
}
