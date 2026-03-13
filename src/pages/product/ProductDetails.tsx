import { useProductDetails } from "@/hooks/use-product-details";
import { addToCart } from "@/lib/api/cartApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image_url: string;
  in_stock: boolean;
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useProductDetails(id!);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        Failed to load product details.
      </div>
    );
  if (!data)
    return (
      <div className="text-center py-10 text-gray-500">No product found.</div>
    );

  const product = data.data;

  const handleAdd = (product: CartItem) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image_url,
      qty: 1,
      inStock: product.in_stock,
    });

    toast.success("Product added to cart!");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden p-4">
        {/* Image Section */}
        <div className="relative group">
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-auto max-h-[500px] object-contain bg-gray-50 rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
          />
          {product.has_offer && (
            <span className="absolute top-4 left-4 bg-[#004a61] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              {product.offer_title}
            </span>
          )}
        </div>

        {/* Info Section */}
        <div className="flex flex-col">
          <nav className="text-sm text-gray-500 mb-4">
            {product.category?.name} / {product.subcategory?.name}
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            {product.has_offer ? (
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-[#004a61]">
                  ${product.final_price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ${product.price}
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>
            )}

            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            <div className="flex items-center text-yellow-400">
              <span className="font-bold mr-1">{product.rating}</span>
              <span className="text-gray-400 text-sm">
                ({product.rating_count} reviews)
              </span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8 border-b border-gray-100 pb-8">
            {product.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase font-semibold">
                Brand
              </span>
              <span className="text-gray-900 font-medium">{product.brand}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase font-semibold">
                Size
              </span>
              <span className="text-gray-900 font-medium">
                {product.size || "N/A"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase font-semibold">
                Availability
              </span>
              <span
                className={`font-medium mt-2 ${product.in_stock ? "text-green-600" : "text-[#004a61]"}`}
              >
                {product.in_stock ? "● In Stock" : "○ Out of Stock"}
              </span>
            </div>
          </div>

          {/* Action Button (Placeholder) */}
          <button
            onClick={() => handleAdd(product)}
            className="mt-auto w-full bg-[#004a61] cursor-pointer hover:bg-[#066c91] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-100 active:scale-[0.98]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
