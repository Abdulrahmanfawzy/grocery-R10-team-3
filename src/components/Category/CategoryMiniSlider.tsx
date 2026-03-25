import { useCategory } from "@/hooks/useCategory";

export default function CategoryMiniSlider() {
  const { categories, isLoading, error } = useCategory();

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide flex gap-4 py-4 px-2">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl bg-gray-200 animate-pulse flex-1 flex items-center flex-col min-w-30"
          >
            <div className="w-20 h-20 bg-gray-300 rounded-lg" />
            <div className="h-4 w-16 bg-gray-300 rounded mt-2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto py-4 px-2 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mt-5 mx-auto">
      <h2 className="text-2xl capitalize">categories</h2>
      <div className=" overflow-x-auto scrollbar-hide flex gap-4 py-4 px-2 text-sm snap-x snap-mandatory scroll-smooth">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-4 rounded-2xl bg-white box-shadow flex-1 flex items-center flex-col min-w-30 snap-start"
          >
            {category.image_url ? (
              <img
                src={category.image_url}
                alt={category.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">No Image</span>
              </div>
            )}
            <h3 className="text-center mt-2 text-xs md:text-sm font-light flex">
              {category.name}
            </h3>
            {category.meals_count > 0 && (
              <span className="text-xs text-gray-500 mt-1">
                {category.meals_count} items
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
