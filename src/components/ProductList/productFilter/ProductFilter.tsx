import "./ProductFilter.module.css";
import { Slider } from "@/components/ui/slider";
import searchIcon from "@/assets/icons/search-icon.svg";
import styles from "./ProductFilter.module.css";
import { useCategory } from "@/hooks/useCategory";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const ProductFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories, isLoading } = useCategory();
  const [priceRange, setPriceRange] = useState<[number, number]>([5, 500]);
  const selectedCat = searchParams.get("category_id");
  const brands = ["Premium"];

  return (
    <aside className="bg-[#F7FCFF] rounded-[8px] py-[16px] shadow-sm">
      <div className="mb-8">
        <h3 className="text-[20px] font-medium text-[#000000] mb-[8px] px-[16px]">
          Categories
        </h3>
        <div className="flex flex-col">
          <button
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.delete("category_id");
              setSearchParams(params);
            }}
            className={`flex items-center p-[12px] px-[16px] w-full 
                transition-all duration-200 rounded-[4px] cursor-pointer group
                  ${
                    selectedCat
                      ? "bg-white shadow-sm text-[#000000]"
                      : "text-[#0E1112] hover:bg-white/80"
                  }`}
          >
            <div className="flex items-center gap-[16px]">
              <img
                src={""}
                alt={""}
                className="w-[24px] h-[24px] object-contain shrink-0"
              />

              <span className="text-[16px] font-normal text-[#0E1112] leading-[24px]">
                All
              </span>
            </div>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                const params = new URLSearchParams(searchParams);
                params.set("category_id", cat.id.toString());
                setSearchParams(params);
              }}
              className={`flex items-center p-[12px] px-[16px] w-full 
                transition-all duration-200 rounded-[4px] cursor-pointer group
                  ${
                    selectedCat === cat.id
                      ? "bg-white shadow-sm text-[#000000]"
                      : "text-[#0E1112] hover:bg-white/80"
                  }`}
            >
              <div className="flex items-center gap-[16px]">
                <img
                  src={cat.image_url}
                  alt={cat.name}
                  className="w-[24px] h-[24px] object-contain shrink-0"
                />

                <span className="text-[16px] font-normal text-[#0E1112] leading-[24px]">
                  {cat.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-[20px] font-medium text-[#000000] mb-[8px] px-[16px]">
          Brand
        </h3>
        <div className="space-y-2 px-[16px]">
          {brands.map((brand) => {
            const selectedBrand = searchParams.get("brand");

            return (
              <label
                key={brand}
                className="flex items-center gap-[12px] cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedBrand === brand}
                  onChange={(e) => {
                    const params = new URLSearchParams(searchParams);

                    if (e.target.checked) {
                      params.set("brand", brand);
                    } else {
                      params.delete("brand");
                    }

                    setSearchParams(params);
                  }}
                  className="w-[14px] h-[14px] 
          rounded-[2px] 
          border-[1px] border-[#B0AEAE] 
          appearance-none 
          checked:bg-[#014162] checked:border-[#014162] 
          cursor-pointer 
          transition-all duration-200
          relative
          after:content-[''] after:hidden checked:after:block
          after:absolute after:left-[4px] after:top-[1px]
          after:w-[4px] after:h-[8px] 
          after:border-white after:border-r-2 after:border-b-2 
          after:rotate-45"
                />

                <span className="text-[16px] font-normal text-[#000000] leading-[24px]">
                  {brand}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-[20px] font-medium text-[#000000] mb-[8px] px-[16px]">
          Availability
        </h3>
        <div className="space-y-2 px-[16px]">
          {["In Stock", "Out of Stock"].map((value) => {
            const stockParam = searchParams.get("stock");

            const stockValue = value === "In Stock" ? "1" : "0";

            return (
              <label
                key={value}
                className="flex items-center gap-[12px] cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={stockParam === stockValue}
                  onChange={(e) => {
                    const params = new URLSearchParams(searchParams);

                    if (e.target.checked) {
                      params.set("stock", stockValue);
                    } else {
                      params.delete("stock");
                    }

                    setSearchParams(params);
                  }}
                  className="w-[14px] h-[14px] 
          rounded-[2px] 
          border-[1px] border-[#B0AEAE] 
          appearance-none 
          checked:bg-[#014162] checked:border-[#014162] 
          cursor-pointer 
          transition-all duration-200
          relative
          after:content-[''] after:hidden checked:after:block
          after:absolute after:left-[4px] after:top-[1px]
          after:w-[4px] after:h-[8px] 
          after:border-white after:border-r-2 after:border-b-2 
          after:rotate-45"
                />

                <span className="text-[16px] font-normal text-[#000000] leading-[24px]">
                  {value}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-[20px] font-medium text-[#000000] mb-[8px] px-[16px] flex items-center gap-[4px]">
          <span className={`${styles.headingEllipse}`}></span>
          <span className={`${styles.headingCircle}`}></span>
          Search Objects
        </h3>

        <div className="px-[16px]">
          <div className="relative flex items-center w-full h-[60px]">
            <input
              type="text"
              placeholder="Search your keyword..."
              className="
                w-full h-full 
                bg-[#D9D9D9] 
                rounded-[8px] 
                border-2 border-[#E4ECF2] 
                pl-[22px] pr-[70px] 
                text-[12px] font-semibold text-[#071C1F] 
                outline-none 
                placeholder:text-[#071C1F]/60
              "
            />

            <button
              className="absolute right-0 
                            w-[58px] h-[58px] 
                            bg-blue-900 
                            rounded-r-[8px] 
                            flex items-center justify-center 
                            cursor-pointer 
                            hover:bg-[#013550] 
                            transition-colors"
            >
              <img
                src={searchIcon}
                alt="Search"
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-[20px] font-medium text-[#000000] mb-[8px] px-[16px] flex items-center gap-[4px]">
          <span className={`${styles.headingEllipse}`}></span>
          <span className={`${styles.headingCircle}`}></span>
          Filter By Price
        </h3>
        <div className="px-[16px]">
          <div className="flex justify-between items-center mb-[20px]">
            <span className="text-[16px] font-normal text-[#0E1112]">
              Your range:
            </span>
            <span className="text-[16px] font-bold text-[#071C1F]">
              £{priceRange[0]} - £{priceRange[1]}
            </span>
          </div>
          <Slider
            value={priceRange}
            max={100}
            step={5}
            onValueChange={(val) => {
              setPriceRange(val as [number, number]);
              const params = new URLSearchParams(searchParams);
              params.set("min_price", String(val[0]));
              params.set("max_price", String(val[1]));
              setSearchParams(params);
            }}
            className="mx-auto w-full max-w-xs"
          />
        </div>
      </div>
    </aside>
  );
};

export default ProductFilter;
