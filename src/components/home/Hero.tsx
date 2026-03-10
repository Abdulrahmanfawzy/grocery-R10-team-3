import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import heroImg from "../../assets/heroimg.png";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#014162] min-h-[500px] sm:min-h-[550px] md:min-h-[440px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 items-center py-8 sm:py-10 md:py-12 relative z-10 h-full">
        <div className="flex flex-col gap-6 sm:gap-8 max-w-lg animate-in fade-in slide-in-from-left duration-700 z-10 relative">
          <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-bold text-white leading-[1.1]">
            Don't miss our daily amazing deals.
          </h1>
          <p className="text-white text-base sm:text-white md:text-white/70 text-lg md:text-xl font-medium">
            Save up to 60% off on your first order
          </p>
          <div>
            <Link to="/shop">
              <Button size="lg" className="bg-white text-[#014162] mt-6 sm:mt-8 md:mt-10 cursor-pointer hover:bg-gray-100 font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-7 text-base sm:text-lg rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background patterns/images */}
      <div className="absolute right-0 top-0 h-full w-full md:w-3/5 pointer-events-none flex justify-end items-center opacity-30 sm:opacity-50 md:opacity-100 z-0">
        <div className="relative w-full h-full flex items-center justify-end pr-4 sm:pr-8 md:pr-0">
            <img 
            src={heroImg} 
            alt="Fresh Groceries" 
            className="h-[200%] sm:h-[180%] md:h-[102%] w-auto object-contain object-right drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-in zoom-in fade-in duration-1000 delay-300 translate-y-0"
            />
        </div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[20%] w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
