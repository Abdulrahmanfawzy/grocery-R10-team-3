import { useState } from 'react';
import './ProductFilter.module.css';
import { Slider } from "@/components/ui/slider"
import vegIcon from '@/assets/icons/categories/veg-icon.svg';
import fruitIcon from '@/assets/icons/categories/fruit-icon.svg';
import dairyIcon from '@/assets/icons/categories/dairy-icon.svg';
import bakeryIcon from '@/assets/icons/categories/bakery-icon.svg';
import seafoodIcon from '@/assets/icons/categories/seafood-icon.svg';
import meatsIcon from '@/assets/icons/categories/meats-icon.svg';
import searchIcon from '@/assets/icons/search-icon.svg';
import styles from './ProductFilter.module.css';

const ProductFilter = () => {


  const categories = [
    { id: 'veg', name: 'Vegetables', icon: vegIcon },
    { id: 'fruit', name: 'Fruites', icon: fruitIcon },
    { id: 'dairy', name: 'Dairy & Eggs', icon: dairyIcon },
    { id: 'bakery', name: 'Bakery', icon: bakeryIcon },
    { id: 'seafood', name: 'Seafood', icon: seafoodIcon },
    { id: 'meats', name: 'Meats', icon: meatsIcon },
  ];

  const [selectedCat, setSelectedCat] = useState('fruit');

  const brands = ['Brand A', 'Brand B', 'Brand C'];

  const types = ['Fresh', 'Organic', 'Frozen'];

  return (
    <aside className="bg-[#F7FCFF] rounded-[8px] py-[16px] shadow-sm">
      <div className="mb-8">
        <h3 className="text-[20px] font-medium text-[#000000] mb-[8px] px-[16px]">Categories</h3>
        <div className="flex flex-col">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`flex items-center p-[12px] px-[16px] w-full 
                transition-all duration-200 rounded-[4px] cursor-pointer group
                  ${selectedCat === cat.id
                  ? 'bg-white shadow-sm text-[#000000]'
                  : 'text-[#0E1112] hover:bg-white/80'
                }`
              }
            >
              <div className="flex items-center gap-[16px]">
                <img
                  src={cat.icon}
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
        <h3 className="text-[20px] font-medium text-[#000000] mb-[8px] px-[16px]">Brand</h3>
        <div className="space-y-2 px-[16px]">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-[12px] cursor-pointer group">
              <input type="checkbox"
                className="w-[14px] h-[14px] 
                        rounded-[2px] 
                        border border-[#B0AEAE] 
                        appearance-none 
                        checked:bg-blue-900 checked:border-blue-900 
                        cursor-pointer 
                        transition-all duration-200
                        relative
                        after:content-[''] after:hidden checked:after:block
                        after:absolute after:left-1 after:top-px
                        after:w-1 after:h-2 
                        after:border-white after:border-r-2 after:border-b-2 
                        after:rotate-45"
              />
              <span className="text-[16px] font-normal text-[#000000] leading-[24px]">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-[20px] font-medium text-[#000000] mb-[8px] px-[16px]">Product Type</h3>
        <div className="space-y-2 px-[16px]">
          {types.map((type) => (
            <label key={type} className="flex items-center gap-[12px] cursor-pointer group">
              <input type="checkbox"
                className="w-[14px] h-[14px] 
                        rounded-[2px] 
                        border border-[#B0AEAE] 
                        appearance-none 
                        checked:bg-blue-900 checked:border-blue-900 
                        cursor-pointer 
                        transition-all duration-200
                        relative
                        after:content-[''] after:hidden checked:after:block
                        after:absolute after:left-1 after:top-px
                        after:w-1 after:h-2 
                        after:border-white after:border-r-2 after:border-b-2 
                        after:rotate-45"
              />
              <span className="text-[16px] font-normal text-[#000000] leading-[24px]">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-[20px] font-medium text-[#000000] mb-[8px] px-[16px]">Availability</h3>
        <div className="space-y-2 px-[16px]">
          {['In Stock', 'Out of Stock'].map((value) => (
            <label key={value} className="flex items-center gap-[12px] cursor-pointer group">
              <input type="checkbox"
                className="w-[14px] h-[14px] 
                        rounded-[2px] 
                        border border-[#B0AEAE] 
                        appearance-none 
                        checked:bg-blue-900 checked:border-blue-900 
                        cursor-pointer 
                        transition-all duration-200
                        relative
                        after:content-[''] after:hidden checked:after:block
                        after:absolute after:left-1 after:top-px
                        after:w-1 after:h-2 
                        after:border-white after:border-r-2 after:border-b-2 
                        after:rotate-45"
              />
              <span className="text-[16px] font-normal text-[#000000] leading-[24px]">{value}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-[20px] font-medium text-[#000000] mb-[8px] px-[16px] flex items-center gap-[4px]">
          <span className={`${styles.headingEllipse}`}></span>
          <span className={`${styles.headingCircle}`}></span>
          Search Objects
        </h3>

        <div className='px-[16px]'>
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

            <button className="absolute right-0 
                            w-[58px] h-[58px] 
                            bg-blue-900 
                            rounded-r-[8px] 
                            flex items-center justify-center 
                            cursor-pointer 
                            hover:bg-[#013550] 
                            transition-colors"
            >
              <img src={searchIcon} alt="Search" className="w-[24px] h-[24px]" />
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
            <span className="text-[16px] font-normal text-[#0E1112]">Your range:</span>
            <span className="text-[16px] font-bold text-[#071C1F]">£50 - £80</span>
          </div>
          <Slider
            defaultValue={[25, 50]}
            max={100}
            step={5}
            className="mx-auto w-full max-w-xs"
          />
        </div>
      </div>
    </aside>
  );
};

export default ProductFilter;