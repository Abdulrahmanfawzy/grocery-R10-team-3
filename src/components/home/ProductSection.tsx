import ProductCard from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useHotDeals, useNewProducts } from "../../hooks/useHomeData";
import type { Product } from "../../lib/types/home.types";

interface ProductSectionProps {
  title: string;
}

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

const ProductSection = ({ title }: ProductSectionProps) => {
  const { data: hotDealsData, isLoading: hotDealsLoading, isError: hotDealsError, error: hotError } = useHotDeals();
  const { data: newProductsData, isLoading: newProductsLoading, isError: newProductsError, error: newError } = useNewProducts();

  const isHotDeals = title === "Hot Deals";
  const loading = isHotDeals ? hotDealsLoading : newProductsLoading;
  const isError = isHotDeals ? hotDealsError : newProductsError;
  const error = isHotDeals ? hotError : newError;
  
  // Use products from the API and sort by ID for consistent sequence
  const products: Product[] = isHotDeals 
    ? [...(hotDealsData?.data || [])].sort((a, b) => Number(a.id) - Number(b.id)) 
    : [...(newProductsData?.data || [])].sort((a, b) => Number(a.id) - Number(b.id));

  return (
    <section>
      <Tabs defaultValue="All" className="w-full">
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141212]">{title}</h2>
          <div className="flex justify-start">
            <TabsList className="h-auto p-0 gap-2 sm:gap-3 lg:gap-4 overflow-x-auto no-scrollbar bg-transparent border-none w-full lg:w-auto justify-start lg:justify-center">
            {CATEGORY_SEQUENCE.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="px-2 py-2 border-none data-[state=active]:text-blue-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-blue-900 text-gray-500 font-semibold text-sm sm:text-base lg:text-lg whitespace-nowrap focus:outline-none focus:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-transparent active:bg-transparent shadow-none! min-w-fit"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-12 min-h-[460px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
          </div>
        ) : isError ? (
          <div className="text-center text-red-500 py-8 font-semibold min-h-[460px] flex items-center justify-center">Failed to fetch {title}: {error instanceof Error ? error.message : "Error"}</div>
        ) : (
          CATEGORY_SEQUENCE.map((cat) => {
            const filtered = cat === "All" 
              ? products 
              : products.filter((p) => {
                  const pCat = getProductCategory(p).toLowerCase();
                  const targetCat = cat.toLowerCase();
                  
                  // Handle Meat category mapping (API often uses "Meat & Poultry")
                  if (targetCat === "meat & poultry" || targetCat === "meat") {
                    return pCat === "meat" || pCat.includes("meat & poultry");
                  }
                  
                  return pCat === targetCat;
                });

            return (
              <TabsContent key={cat} value={cat} className="mt-0 outline-none ring-0 focus-visible:ring-0">
                {filtered.length === 0 ? (
                  <div className="text-center text-gray-400 py-8 min-h-[460px] flex items-center justify-center">No {cat} products found.</div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 min-h-[460px]">
                    {filtered.map((p) => (
                      <ProductCard
                        key={p.id}
                        id={p.id.toString()}
                        category={getProductCategory(p)}
                        title={getProductTitle(p)}
                        price={p.discount_price && parseFloat(p.discount_price.toString()) > 0 
                                 ? getPrice(p.discount_price) 
                                 : getPrice(p.price)}
                        oldPrice={p.discount_price && parseFloat(p.discount_price.toString()) > 0 
                                    ? getPrice(p.price) 
                                    : undefined}
                        rating={getPrice(p.rating) || 4}
                        image={getImageUrl(p.image)}
                        brand={p.brand}
                        inStock={p.stock_quantity !== undefined ? p.stock_quantity > 0 : true}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>
            );
          })
        )}
      </Tabs>
    </section>
  );
};

export default ProductSection;
