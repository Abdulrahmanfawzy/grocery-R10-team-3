import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import heroImg from "../../assets/heroimg.png";

const PromoBanners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-[#E2E2E2] rounded-2xl p-8 relative overflow-hidden min-h-[220px] flex flex-col justify-center shadow-md hover:shadow-2xl transition-all duration-300 group">
        <div className="z-10 max-w-[320px]">
          <span className="bg-[#014162] text-white text-sm px-2 py-1 rounded-full mb-4 inline-block">Free delivery</span>
          <h3 className="text-2xl font-bold text-[#014162] mb-2 leading-tight">Free delivery over $50</h3>
          <p className="text-[#014162] text-lg mb-6">Shop $50 product and get free delivery anywhere.</p>
          <Link to="/shop">
            <Button size="lg" className="bg-[#014162] hover:bg-[#034d70] text-white rounded-md px-8 py-6 text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
              Shop Now &gt;
            </Button>
          </Link>
        </div>
        <div className="absolute right-0 bottom-0 h-full w-1/2 flex items-center justify-center p-4">
           {/* Placeholder for courier image if available */}
           <div className="w-full h-full bg-gray-300/20 rounded-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
             🚚
           </div>
        </div>
      </div>

      <div className="bg-[#014162] rounded-2xl p-8 relative overflow-hidden min-h-[220px] flex flex-col justify-center text-white shadow-md hover:shadow-2xl transition-all duration-300 group">
        <div className="z-10 max-w-[240px]">
          <span className="bg-gray-300 text-[#014162] text-sm px-2 py-1 rounded-full mb-4 inline-block">60% off</span>
          <h3 className="text-2xl font-bold mb-2 leading-tight">Organic Food</h3>
          <p className="text-white text-lg mb-6">Save up to 60% off on your first order</p>
          <Link to="/shop">
            <Button size="lg" className="bg-gray-300 text-[#014162] hover:bg-gray-100 rounded-md px-8 py-6 text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
              Shop Now &gt;
            </Button>
          </Link>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none opacity-90">
          <img 
            src={heroImg} 
            alt="Organic Food" 
            className="h-full w-full object-cover object-left group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanners;
