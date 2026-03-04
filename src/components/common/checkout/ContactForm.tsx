import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const ContactForm = () => {
  return (
    <section>
      <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">
        Contact Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-100 p-8 rounded-2xl shadow-sm bg-white">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            First Name
          </label>
          <Input
            placeholder="Sarah"
            className="h-12 bg-gray-50/30 border-gray-200 focus:bg-white transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Last Name</label>
          <Input
            placeholder="Emad"
            className="h-12 bg-gray-50/30 border-gray-200 focus:bg-white transition-all"
          />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <Input
            placeholder="+20 ***********"
            className="h-12 bg-gray-50/30 border-gray-200 focus:bg-white transition-all"
          />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <Input
            placeholder="Sarahem@gmail.com"
            className="h-12 bg-gray-50/30 border-gray-200 focus:bg-white transition-all"
          />
        </div>

        <div className="md:col-span-2 flex items-center space-x-2 mt-2">
          <Checkbox
            id="create-account"
            className="rounded-full border-gray-300"
          />
          <label
            htmlFor="create-account"
            className="text-sm text-gray-500 cursor-pointer"
          >
            Create an account for easier check-out next time
          </label>
        </div>
      </div>
    </section>
  );
};
