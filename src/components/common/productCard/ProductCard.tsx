import DeleteIcon from "@/assets/icons/delete.svg";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  rating: number;
  badges: string[];
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="w-full bg-white border border-[#DAD8D8] rounded-[8px] p-[16px] relative group">
      <div className="flex gap-[8px]">
        {product?.badges?.map((badge, index) => (
          <span
            key={index}
            className="
                            flex items-center justify-center
                            text-[#F7FCFF] 
                            text-[12px]
                            rounded-tl-[15px] rounded-br-[15px] 
                            px-[16px] py-[4px]
                            whitespace-nowrap
                        "
            style={{
              background:
                "linear-gradient(0deg, rgba(1, 65, 98, 0.5) -28.12%, rgba(1, 65, 98, 0.8) 30.45%, #014162 87.19%)",
            }}
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="w-full h-[180px] flex items-center justify-center mb-[16px] overflow-hidden">
        <img
          src={product.image || product.image_url}
          alt={product.name}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="text-center mb-[12px]">
        <h4 className="text-[16px] text-[#01050DCC] mb-[4px]">
          {product.name}
        </h4>
        <div className="flex items-center justify-center gap-[8px]">
          <span className="text-[16px] text-[#0E1112]">
            £ {product.price.toFixed(2)}
          </span>
          <span className="text-[16px] text-[#BCB8B1] line-through font-normal">
            £ {product.oldPrice}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[4px] mb-[20px]">
        <div className="flex text-[#FDC040]">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-[24px] ${star > Math.floor(product.rating) ? "text-[#DAD8D8]" : ""}`}
            >
              ★
            </span>
          ))}
        </div>
        <span className="text-[12px] text-[#BCB8B1]">({product.rating}/5)</span>
      </div>

      <div className="flex items-center gap-[8px]">
        <button className="flex-1 h-[40px] bg-[#014162] text-[#F7FCFF] rounded-[8px] text-[16px] cursor-pointer hover:bg-[#002d44] transition-colors">
          Add To Cart
        </button>

        <div className="flex-1 flex items-center justify-between border border-[#BCB8B1] rounded-[10px] h-[40px] px-[8px] gap-[10px]">
          <button className="text-[#014162] cursor-pointer hover:text-red-500 transition-colors">
            <img src={DeleteIcon} alt="Delete" />
          </button>
          <span className="text-[14px] font-bold text-[#071C1F]">1</span>
          <button className="text-[#014162] text-[18px] font-bold cursor-pointer hover:scale-110">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
