import { useSearchParams } from "react-router-dom";
import { useCategoryMeals } from "@/hooks/useCategoryMeals";
import ProductCard from "@/components/home/ProductCard";
import {
  getImageUrl,
  getPrice,
  getProductCategory,
  getProductTitle,
} from "@/lib/utils/product.utils";

const ProductGrid = () => {
  const [searchParams] = useSearchParams();
  const category_id = searchParams.get("category_id");
  const stock = searchParams.get("stock");
  const brand = searchParams.get("brand");
  const min_price = searchParams.get("min_price");
  const max_price = searchParams.get("max_price");
  const search = searchParams.get("search");
  const { meals, isLoading } = useCategoryMeals(
    Number(category_id),
    search || "",
    stock || undefined,
    brand || undefined,
    min_price || undefined,
    max_price || undefined,
  );
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-100 h-[400px] rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.length > 0
          ? meals.map((meal: any) => (
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
              //   <ProductCard key={product.id} product={product} />
            ))
          : (
              <div className="col-span-full py-20 text-center">
                <p className="text-gray-500 text-lg font-medium">No products found</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search term</p>
              </div>
            )}
      </div>
    </section>
  );
};

export default ProductGrid;
