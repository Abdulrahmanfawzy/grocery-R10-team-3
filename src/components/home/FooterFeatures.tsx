import { Tag, RefreshCcw, Truck } from "lucide-react";

const features = [
  {
    icon: <Tag className="size-12 text-blue-900" />,
    title: "Best Prices & Deals",
    description: "Don't miss our daily amazing deals and prices",
  },
  {
    icon: <RefreshCcw className="size-12 text-blue-900" />,
    title: "Refundable",
    description: "If your items have damage we agree to refund it",
  },
  {
    icon: <Truck className="size-12 text-blue-900" />,
    title: "Free delivery",
    description: "Do purchase over $50 and get free delivery anywhere",
  },
];

const FooterFeatures = () => {
  return (
    <section className="py-16 border-y border-gray-100 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 justify-items-center">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-5 w-fit">
            <div className="flex-shrink-0">
              {feature.icon}
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-blue-900 text-xl leading-snug">
                {feature.title}
              </h4>
              <p className="text-lg text-gray-500 max-w-[280px] leading-normal font-medium mt-0.5">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterFeatures;
