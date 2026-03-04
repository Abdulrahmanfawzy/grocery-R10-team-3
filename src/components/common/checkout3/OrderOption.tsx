import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

function OrderOption() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold mb-4">Order Options</h3>
      <div className="border border-gray-100 rounded-xl bg-white p-6 shadow-sm space-y-6">
        <div>
          <p className="text-gray-800 text-sm mb-2">Delivery Address</p>
          <div className="bg-gray-50 border p-3 rounded-lg text-xs text-gray-500">
            Villa 14, Street 23, District 5, New Cairo, Cairo
          </div>
        </div>

        <p className="text-gray-800 text-sm mb-2">Current Order</p>
        <div className="flex gap-4">
          <Button className="flex-1 bg-gray-400 text-gray-600 cursor-pointer py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
            Download Receipt
          </Button>
          <Button className="flex-1 bg-gray-400 text-gray-600 cursor-pointer py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
            Reorder
          </Button>
        </div>

        <div>
          <p className="text-gray-600 text-xs mb-3 ">How Was Your Experience</p>
          <div className="flex  gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-gray-600" />
            ))}
          </div>
          <textarea
            className="w-full bg-gray-50 border rounded-xl h-20 p-3 text-xs outline-none"
            placeholder="Add your feedback..."
          />
        </div>

        <div className="border border-gray-100 rounded-xl p-4 max-w-50">
          <p className="text-blue-900 text-xs font-bold mb-3">
            Special Offer Code
          </p>
          <div className="flex flex-col gap-2 border border-gray-200 p-4 rounded-2xl">
            <p>Offer Code</p>
            <input
              className="flex-1 bg-gray-50 border rounded-lg px-3 py-2 text-xs"
              defaultValue="Azu280"
            />
            <button className="bg-[#004a61] text-white px-4 py-2 rounded-lg text-xs font-bold">
              Shop Now &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderOption;
