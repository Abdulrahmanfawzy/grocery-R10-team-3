import CuratedProductsIcon from '@/assets/images/curated-products.svg';
import HandmadeIcon from '@/assets/images/handmade.svg';
import NatyralFoodIcon from '@/assets/images/natyral-food.svg';
import FreeDeliveryIcon from '@/assets/images/free-delivery.svg';


const FeaturesBar = () => {
  const features = [
    {
      title: "Curated Products",
      desc: "Provide free home delivery for all product over $100",
      icon: CuratedProductsIcon, 
    },
    {
      title: "Handmade",
      desc: "WE ensure the product quality that is our main goal",
      icon: HandmadeIcon,
    },
    {
      title: "Natyral Food",
      desc: "Return product within 3 days for any product you buy",
      icon: NatyralFoodIcon,
    },
    {
      title: "Free home delivery",
      desc: "We ensure the product that you can trust easily",
      icon: FreeDeliveryIcon,
    },
  ];

  return (
    <div className="w-full bg-white py-[40px] px-[20px] flex items-center justify-between"
    style={{ boxShadow: '0px 16px 32px 0px rgba(7, 28, 31, 0.1)' }}>
      {features.map((feature, index) => (
        <div key={index} className="flex items-center flex-1 group">
          <div className="flex items-center gap-[16px] px-[20px]">
            <div className="text-[#014162] flex-shrink-0">
               <div className="flex items-center justify-center">
                 <img src={feature.icon} alt={feature.title} />
               </div>
            </div>

            <div className="flex flex-col">
              <h4 className="text-[20px] font-bold text-[#071C1F] mb-[2px]">
                {feature.title}
              </h4>
              <p className="text-[15px] text-[#071C1F] font-bold leading-tight max-w-[180px]">
                {feature.desc}
              </p>
            </div>
          </div>

          {index !== features.length - 1 && (
            <div className="h-[80px] w-[1px] bg-[#E5EAEE]"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturesBar;