import { Box, Check, CheckCircle2, MapPin, Truck } from "lucide-react";
function TrackOrder() {
  const steps = [
    {
      id: 1,
      label: "Order Placed",
      icon: <Check size={18} />,
      status: "completed",
    },
    {
      id: 2,
      label: "Processing",
      icon: <Box size={18} />,
      status: "completed",
    },
    { id: 3, label: "Shipped", icon: <Truck size={18} />, status: "completed" },
    {
      id: 4,
      label: "Out for Delivery",
      icon: <MapPin size={18} />,
      status: "active",
    },
    {
      id: 5,
      label: "Delivered",
      icon: <CheckCircle2 size={18} />,
      status: "pending",
    },
  ];
  return (
    <section>
      <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">
        Track Your Order
      </h3>
      <div className="border border-gray-100 rounded-2xl p-8 shadow-sm relative">
        <div className="flex justify-between items-start mb-10">
          <div>
            <p className="text-gray-400 text-sm">Current Status</p>
            <p className="text-[#004a61] font-bold text-lg">Out for Delivery</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm">Estimated Delivery</p>
            <p className="text-[#004a61] font-bold text-lg">Today, Nov 4</p>
          </div>
        </div>
        <div className="relative flex justify-between items-center w-full px-4">
          <div className="absolute top-1/2 left-0 w-full h-0.75 bg-gray-200 -translate-y-1/2 z-0" />
          <div className="absolute top-1/2 left-0 w-[75%] h-0.75 bg-[#004a61] -translate-y-1/2 z-0" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center group"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step.status === "completed" || step.status === "active"
                    ? "bg-[#004a61] text-white shadow-lg"
                    : "bg-gray-300 text-gray-500 opacity-60"
                }`}
              >
                {step.icon}
              </div>
              <span
                className={`text-[11px] mt-3 font-semibold absolute -bottom-8 whitespace-nowrap ${
                  step.status === "active" ? "text-[#004a61]" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
        <div className="h-10" />
      </div>
    </section>
  );
}

export default TrackOrder;
