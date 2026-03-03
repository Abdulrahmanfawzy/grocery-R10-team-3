import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const SpecialNotes = () => {
  return (
    <section>
      <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">Special Notes</h3>
      <div className="border border-gray-100 p-8 rounded-2xl space-y-6 bg-white shadow-sm">
        <div className="flex flex-wrap gap-4">
          <Badge
            variant="outline"
            className="py-3 px-5 font-normal text-gray-500 border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer text-sm"
          >
            leave order Infront Of The Dor
          </Badge>
          <Badge
            variant="outline"
            className="py-3 px-5 font-normal text-gray-500 border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer text-sm"
          >
            Don't Ring Bell
          </Badge>
          <Badge
            variant="outline"
            className="py-3 px-5 font-normal text-gray-500 border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer text-sm"
          >
            Call 30 min In Advance
          </Badge>
        </div>

        <div className="pt-2">
          <Input
            placeholder="Input Text ............................................................................"
            className="h-12 bg-gray-50/30 border-gray-200 rounded-xl focus:ring-0"
          />
        </div>
      </div>

      <div className="mt-10">
        <Button className="w-full md:w-72 bg-[#004a61] hover:bg-[#003649] h-12 text-lg rounded-lg font-semibold">
          Continue Checkout
        </Button>
      </div>
    </section>
  );
};
