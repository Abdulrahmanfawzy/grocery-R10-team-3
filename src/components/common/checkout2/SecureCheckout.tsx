import { Lock } from "lucide-react";

interface SecureCheckoutProps {
  title?: string;
  desc?: string;
}

function SecureCheckout({ title, desc }: SecureCheckoutProps) {
  return (
    <div className="bg-gray-300 rounded-sm p-4 flex items-start gap-3 relative">
      <div>
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-(--primary-color)" />
          <span className="text-(--primary-color) text-sm font-medium">
            {title}
          </span>
        </div>
        <p className="text-(--primary-color) text-sm mt-1">{desc}</p>
      </div>
      <div
        className="absolute bottom-0 right-0 w-6 h-6 bg-gray-400"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      />
    </div>
  );
}

export default SecureCheckout;
