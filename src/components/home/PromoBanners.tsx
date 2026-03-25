import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import personImg from "../../assets/person_no_bg.png";
import fruitsImg from "../../assets/fruits_no_bg.png";

const PromoBanners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-[#E2E2E2] rounded-2xl p-8 relative overflow-hidden min-h-[220px] flex flex-col justify-center shadow-md hover:shadow-2xl transition-all duration-300 group">
        <div className="z-10 max-w-[400px]">
          <span className="bg-blue-900 text-white text-sm px-2 py-1 rounded-md mb-4 inline-block">Free delivery</span>
          <h3 className="text-3xl font-bold text-blue-900 mb-2 leading-tight">Free delivery over $50</h3>
          <p className="text-blue-900 text-xl mb-6">Shop $50 product and get free delivery anywhere.</p>
          <Link to="/shop">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white rounded-md px-8 py-6 text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
              Shop Now &gt;
            </Button>
          </Link>
        </div>
        <div className="absolute right-0 bottom-0 h-full w-1/2 flex items-end justify-end pointer-events-none translate-y-2 translate-x-10">
          <img 
            src={personImg} 
            alt="Delivery Person" 
            className="h-[98%] w-[98%] object-contain object-bottom group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="bg-blue-900 rounded-2xl p-8 relative overflow-hidden min-h-[220px] flex flex-col justify-center text-white shadow-md hover:shadow-2xl transition-all duration-300 group">
        <div className="z-10 max-w-[240px]">
          <span className="bg-gray-300 text-blue-900 text-sm px-2 py-1 rounded-md mb-4 inline-block">60% off</span>
          <h3 className="text-3xl font-bold mb-2 leading-tight">Organic Food</h3>
          <p className="text-white text-xl mb-6">Save up to 60% off on your first order</p>
          <Link to="/shop">
            <Button size="lg" className="bg-gray-300 text-blue-900 hover:bg-gray-100 rounded-md px-8 py-6 text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
              Shop Now &gt;
            </Button>
          </Link>
        </div>
        <div className="absolute right-0 bottom-0 h-full w-1/2 flex items-end justify-end pointer-events-none">
          <img 
            src={fruitsImg} 
            alt="Organic Food" 
            className="h-full w-full object-contain object-bottom-right scale-[1.2] origin-bottom-right group-hover:scale-[1.3] transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanners;
