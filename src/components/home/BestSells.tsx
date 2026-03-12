import BestSellCard from "./BestSellCard";
import { useBestSells } from "../../hooks/useHomeData";
import type { Product } from "../../lib/types/home.types";
import { getProductTitle, getPrice, getImageUrl, getProductCategory } from "../../lib/utils/product.utils";

const BestSells = () => {
  const { data, isLoading: loading, isError, error } = useBestSells();
  const products: Product[] = [...(data?.data || [])].sort((a, b) => Number(a.id) - Number(b.id));

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
        <h2 className="text-3xl font-bold text-[#141212]">Daily Best Sells</h2>
        <div className="flex items-center">
          <span className="bg-[#FF4D4D] text-white text-sm px-6 py-2 rounded-md font-bold uppercase whitespace-nowrap shadow-sm">
            Expires in: 10 : 56 : 21
          </span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
        </div>
      ) : isError ? (
        <div className="text-center text-red-500 py-8 font-semibold">
          Failed to fetch best sells: {error instanceof Error ? error.message : "Error"}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-500 py-8">No best selling products found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <BestSellCard
              key={product.id}
              id={product.id}
              category={getProductCategory(product)}
              title={getProductTitle(product)}
              // Correct logic: if discount exists, it is the current price
              price={
                product.discount_price && parseFloat(product.discount_price.toString()) > 0
                  ? getPrice(product.discount_price)
                  : getPrice(product.price)
              }
              oldPrice={
                product.discount_price && parseFloat(product.discount_price.toString()) > 0
                  ? getPrice(product.price)
                  : undefined
              }
              sold={product.sold_count ?? 10}
              total={Math.max(50, (product.sold_count ?? 0) + 20)} // Make total dynamic so it makes sense
              image={getImageUrl(product.image)}
              badge={product.offer_title || product.badge}
              rating={getPrice(product.rating) || 4}
              inStock={product.stock_quantity !== undefined ? product.stock_quantity > 0 : true}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BestSells;
