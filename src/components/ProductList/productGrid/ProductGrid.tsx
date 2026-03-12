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
  const { meals, isLoading, error } = useCategoryMeals(
    Number(category_id),
    "",
    stock || undefined,
    brand || undefined,
  );
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.length > 0
          ? meals.map((meal) => (
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
          : "No products founded"}
      </div>
    </section>
  );
};

export default ProductGrid;
