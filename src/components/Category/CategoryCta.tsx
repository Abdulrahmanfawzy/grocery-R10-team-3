export default function CategoryCta() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 max-w-6xl mx-auto px-4">
      <div className="relative">
        <div className="absolute top-10 right-10 bg-primary text-xl text-white w-32 h-32 rounded-full flex flex-col items-center font-bold justify-center shadow-lg">
          <span>up to</span>
          <span className="text-2xl mt-2">50% off</span>
        </div>

        <img
          src="/public/Assets/Category/CategoryFooter.png"
          alt="Category Footer"
          className="w-full"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Organic Vegetables Everyday</h2>
        <p className="text-primary text-xl mb-6">
          Your online resource of healthy recipes.
        </p>
        <p className="text-gray-600 mb-6  text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Bibendum et volutpat vitae
          nullam aenean tortor dolor eget ipsum. Tincidunt sem sem convallis ut
          vestibulum sed. Nulla ultrices consectetur in sapien pellentesque
          aenean sagittis lectus quam. Sodales hac mauris eget phasellus tortor
          elit.
        </p>
        <div>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
