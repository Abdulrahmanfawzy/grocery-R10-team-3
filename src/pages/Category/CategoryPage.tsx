import CategoryCta from "@/components/Category/CategoryCta";
import CategoryMiniSlider from "@/components/Category/CategoryMiniSlider";
import CategorySearch from "@/components/Category/CategorySearch";
import CategorySlider from "@/components/Category/CategorySlider";

export default function CategoryPage() {
  return (
    <div className="px-3">
      <CategorySearch />
      <CategoryMiniSlider />
      <CategorySlider categoryId={1} />
      <CategorySlider categoryId={2} />
      <CategorySlider categoryId={3} />
      <CategorySlider categoryId={4} />
      <CategoryCta />
    </div>
  );
}
