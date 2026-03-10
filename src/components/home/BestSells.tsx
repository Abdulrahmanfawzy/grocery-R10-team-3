import BestSellCard from "./BestSellCard";
import { useBestSells } from "../../hooks/useHomeData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import type { Product } from "../../lib/types/home.types";

import { getProductTitle, getPrice, getImageUrl, getProductCategory } from "../../lib/utils/product.utils";

const CATEGORY_SEQUENCE = [
  "All",
  "Vegetables",
  "Fruits",
  "Meat & Poultry",
  "Dairy Products",
  "Bakery",
  "Drinks"
];

const BestSells = () => {
  const { data, isLoading: loading, isError, error } = useBestSells();
  const products: Product[] = [...(data?.data || [])].sort((a, b) => Number(a.id) - Number(b.id));

  return (
    <section>
      <Tabs defaultValue="All" className="w-full">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-[#141212]">Daily Best Sells</h2>
            <div className="flex items-center">
              <span className="bg-[#FF4D4D] text-white text-[11px] px-4 py-1.5 rounded-full font-bold uppercase">Expires in: 10 : 56 : 21</span>
            </div>
          </div>
          <div className="flex items-center">
            <TabsList className="h-auto p-0 gap-8 overflow-x-auto no-scrollbar bg-transparent border-none justify-start">
              {CATEGORY_SEQUENCE.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="px-0 py-2 border-none data-[state=active]:text-blue-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-blue-900 text-gray-500 font-semibold text-base whitespace-nowrap focus:outline-none focus:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-transparent active:bg-transparent shadow-none!"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
          </div>
        ) : isError ? (
          <div className="text-center text-red-500 py-8 font-semibold">Failed to fetch best sells: {error instanceof Error ? error.message : "Error"}</div>
        ) : products.length === 0 ? (
          <div className="text-center text-gray-500 py-8">No best selling products found.</div>
        ) : (
          CATEGORY_SEQUENCE.map((cat) => {
            const filtered = cat === "All" 
              ? products 
              : products.filter(p => getProductCategory(p) === cat);
            
            return (
              <TabsContent key={cat} value={cat} className="mt-0 outline-none ring-0 focus-visible:ring-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filtered.map((product) => (
                    <BestSellCard
                      key={product.id}
                      id={product.id}
                      category={getProductCategory(product)}
                      title={getProductTitle(product)}
                      // Correct logic: if discount exists, it is the current price
                      price={product.discount_price && parseFloat(product.discount_price.toString()) > 0 
                               ? getPrice(product.discount_price) 
                               : getPrice(product.price)}
                      oldPrice={product.discount_price && parseFloat(product.discount_price.toString()) > 0 
                                  ? getPrice(product.price) 
                                  : undefined}
                      sold={product.sold_count ?? 10}
                      total={Math.max(50, (product.sold_count ?? 0) + 20)} // Make total dynamic so it makes sense
                      image={getImageUrl(product.image)}
                      badge={product.offer_title || product.badge}
                      rating={getPrice(product.rating) || 4}
                      inStock={product.stock_quantity !== undefined ? product.stock_quantity > 0 : true}
                    />
                  ))}
                </div>
              </TabsContent>
            );
          })
        )}
      </Tabs>
    </section>
  );
};

export default BestSells;
