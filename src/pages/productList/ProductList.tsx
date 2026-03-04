import DiscountBanner from "@/components/ProductList/discountBanner/DiscountBanner";
import FeaturesBar from "@/components/ProductList/featuresBar/FeaturesBar";
import PageBanner from "@/components/ProductList/pageBanner/PageBanner";
import ProductFilter from "@/components/ProductList/productFilter/ProductFilter";
import ProductGrid from "@/components/ProductList/productGrid/ProductGrid";

const ProductList = () => {
  return <div>
    <PageBanner />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-8 mb-5">
        <aside className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
          <ProductFilter />
        </aside>
        <main className="flex-grow">
          <ProductGrid />
        </main>
      </div>
      <div className="mb-5">
        <DiscountBanner />
      </div>
    </div>
    <div className="mb-5 px-4 sm:px-6 lg:px-8">
      <FeaturesBar />
    </div>
  </div>
};

export default ProductList;
