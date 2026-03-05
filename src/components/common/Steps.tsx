import { useLocation } from "react-router-dom";

export default function Steps() {
  const location = useLocation();
  const pathname = location.pathname;

  const getStepStatus = (stepNumber: number) => {
    const currentStep = parseInt(pathname.replace("/checkout", "")) || 1;

    if (currentStep === stepNumber) return "active";
    if (currentStep > stepNumber) return "completed";
    return "pending";
  };

  const steps = [
    { id: 1, label: "Shipping" },
    { id: 2, label: "Payment" },
    { id: 3, label: "Review" },
  ];

  return (
    <div className="flex items-center justify-center mb-10 gap-2 md:gap-4 w-full">
      {steps.map((step, index) => {
        const status = getStepStatus(step.id);

        return (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-300 ${
                  status === "active" || status === "completed"
                    ? "bg-[#004a61] text-white"
                    : "bg-gray-300 text-white opacity-60"
                }`}
              >
                {status === "completed" ? "✓" : step.id}
              </div>
              <span
                className={`text-xs mt-1 transition-colors duration-300 ${
                  status === "active"
                    ? "text-[#004a61] font-bold"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`h-px w-12 md:w-24 mx-2 -mt-3.75 transition-colors duration-300 ${
                  status === "completed" ? "bg-[#004a61]" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
