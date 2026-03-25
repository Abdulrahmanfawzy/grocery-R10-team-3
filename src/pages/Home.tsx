import Hero from "../components/home/Hero";
import ProductSection from "../components/home/ProductSection";
import PromoBanners from "../components/home/PromoBanners";
import BestSells from "../components/home/BestSells";
import FooterFeatures from "../components/home/FooterFeatures";

const Home = () => {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col gap-16 pb-20">
        <ProductSection title="Hot Deals" />
        <ProductSection title="New Product" />
        <PromoBanners />
        <BestSells />
        <FooterFeatures />
      </div>
    </div>
  );
};

export default Home;
