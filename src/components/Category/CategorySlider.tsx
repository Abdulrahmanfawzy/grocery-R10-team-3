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

export default function CategorySlider({ categoryId }: { categoryId: number }) {
  const { category, meals, isLoading, error } = useCategoryMeals(categoryId);

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

  if (!meals.length) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-lg font-semibold mb-4">{category?.name}</h2>
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
                <Card>
                  <CategoryCard meal={meal} />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
