import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, Clock, Zap, Timer } from "lucide-react";

export const DeliveryDetails = () => {
  return (
    <section>
      <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">
        Customize Your Delivery
      </h3>
      <div className="border border-gray-100 p-8 rounded-2xl space-y-8 bg-white shadow-sm">
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">
            Fulfilment Method
          </label>
          <div className="flex gap-4">
            <Button className="flex-1 bg-[#a3a3a3] hover:bg-[#8e8e8e] text-white gap-2 h-11 rounded-lg">
              <Truck size={18} /> Delivery
            </Button>
            <Button
              variant="secondary"
              className="flex-1 bg-[#c2c2bc] hover:bg-[#b1b1aa] text-[#555] gap-2 h-11 rounded-lg"
            >
              <MapPin size={18} /> Pick-Up
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <Input
              placeholder="Villa 14, Street 23, District 5, New Cairo, Cairo 11835"
              className="h-12 bg-gray-50/50 border-gray-200"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Input
              placeholder="City"
              className="h-11 bg-gray-50/50 border-gray-200"
            />
            <Input
              placeholder="Provenance"
              className="h-11 bg-gray-50/50 border-gray-200"
            />
            <Input
              placeholder="Postal Code"
              className="h-11 bg-gray-50/50 border-gray-200"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                Schedule Delivery
              </label>
              <div className="flex gap-2">
                <Button className="flex-1 bg-[#a3a3a3] text-white gap-2 h-10 text-xs">
                  <Timer size={14} /> Deliver Now
                </Button>
                <Button className="flex-1 bg-[#c2c2bc] text-[#555] gap-2 h-10 text-xs">
                  <Clock size={14} /> Deliver Later
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                Delivery Speed
              </label>
              <div className="flex gap-2">
                <Button className="flex-1 bg-[#c2c2bc] text-[#555] gap-2 h-10 text-xs">
                  <Truck size={14} /> Standard
                </Button>
                <Button className="flex-1 bg-[#c2c2bc] text-[#555] gap-2 h-10 text-xs">
                  <Zap size={14} /> Priority
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <label className="text-sm font-medium text-gray-700 mr-3">
            Estimated Arrival
          </label>
          <Input
            readOnly
            value="45 Min, 30/1/25 at 2:30 PM"
            className="h-11 bg-gray-50/50 border-gray-200 text-gray-400 w-full md:w-1/2"
          />
        </div>
      </div>
    </section>
  );
};
