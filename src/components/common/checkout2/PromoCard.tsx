import { useState } from "react";
import { Tag } from "lucide-react";

function PromoCard() {
  const [code, setCode] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Tag className="w-4 h-4 text-gray-400" />
        <span className="text-sm font-semibold text-gray-800">Promo Code</span>
      </div>
      <div className="space-y-3 border border-gray-200 rounded-md p-4">
        <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 gap-3">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="SAVE10"
            className="text-sm flex-1 outline-none text-gray-600 placeholder:text-gray-300"
          />
        </div>
        <button className="bg-gray-200 text-(--primary-color) text-sm font-medium px-4 py-2 rounded-md w-fit">
          Apply Code
        </button>
      </div>
    </div>
  );
}

export default PromoCard;
