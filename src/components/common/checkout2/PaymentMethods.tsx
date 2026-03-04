import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type {
  CardOptionProps,
  MethodBadgeProps,
} from "@/lib/types/checkoutpage2.types";
import { ShieldCheck, Tag, Wallet } from "lucide-react";
import { BsCashCoin } from "react-icons/bs";
import { FaApplePay, FaGooglePay } from "react-icons/fa";
import { SiMastercard, SiVisa } from "react-icons/si";

import { useForm } from "react-hook-form";

function PaymentMethods() {
  const { watch, setValue } = useForm({
    defaultValues: {
      paymentMethod: "mastercard_8888",
      billingSameAsDelivery: true,
    },
  });

  const selectedMethod = watch("paymentMethod");
  return (
    <section className="bg-white border  border-dashed p-8 rounded-3xl shadow-sm mb-8">
      <h3 className="text-xl font-bold mb-6">Payment Method</h3>

      <div className="bg-gray-100/80 p-4 rounded-xl flex items-start gap-3 mb-8 border-r-8 border-gray-300 relative overflow-hidden">
        <ShieldCheck className="text-[#004a61] shrink-0" size={20} />
        <div>
          <p className="text-[#004a61] font-semibold text-sm">
            Secure Checkout
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Your information is encrypted and secure. We never store your full
            card details.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-300 translate-x-4 translate-y-4 rotate-45" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-700">Saved Cards</h4>
          <CardOption
            id="visa_4242"
            label="Visa •••• 4242"
            sub="Expires 12/25"
            icon={<SiVisa color="#1a1f71" size={35} />}
            selected={selectedMethod === "visa_4242"}
            onClick={() => setValue("paymentMethod", "visa_4242")}
          />
          <CardOption
            id="mastercard_8888"
            label="Mastercard •••• 8888"
            sub="Expires 08/28"
            icon={<SiMastercard fill="#EB001B" size={30} />}
            selected={selectedMethod === "mastercard_8888"}
            onClick={() => setValue("paymentMethod", "mastercard_8888")}
          />
          <button className="text-[#004a61] text-sm font-medium flex items-center gap-2 mt-4 px-2">
            <span className="text-xl">+</span> Add New Card
          </button>

          <div className="mt-8 pt-4 border-t border-gray-100">
            <label className="text-sm font-medium flex items-center gap-2 mb-3">
              <Tag size={16} /> Promo Code
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="SAVE10"
                  className="bg-white border-gray-200 h-11"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400">
                  Try: SAVE10 or WELCOME20
                </span>
              </div>
              <Button
                variant="secondary"
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 h-11 px-6 rounded-xl"
              >
                Apply Code
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-gray-700">Other Payment Methods</h4>
          <div className="grid grid-cols-1 gap-3">
            <MethodBadge
              label="Cash on Delivery"
              sub="Pay when you receive"
              icon={<BsCashCoin size={20} />}
            />
            <MethodBadge
              label="Apple Pay"
              sub="Quick checkout with Apple Pay"
              icon={<FaApplePay size={30} />}
            />
            <MethodBadge
              label="Google Pay"
              sub="Quick checkout with Google Pay"
              icon={<FaGooglePay size={30} />}
            />
            <MethodBadge
              label="Wallet Pay"
              sub="Digital wallet payment"
              icon={<Wallet size={18} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
const CardOption = ({
  label,
  sub,
  selected,
  onClick,
  icon,
}: CardOptionProps) => (
  <div
    onClick={onClick}
    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
      selected ? "border-[#004a61] bg-blue-50/20" : "border-gray-100 bg-white"
    }`}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-12 h-8 bg-gray-50 rounded flex items-center justify-center text-2xl ">
          {icon}
        </div>
        <div>
          <p className="text-sm font-bold">{label}</p>
          <p className="text-[10px] text-gray-400">{sub}</p>
        </div>
      </div>

      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center ${selected ? "border-[#004a61]" : "border-gray-300"}`}
      >
        {selected && <div className="w-2 h-2 rounded-full bg-[#004a61]" />}
      </div>
    </div>
  </div>
);

const MethodBadge = ({ label, sub, icon }: MethodBadgeProps) => (
  <div className="flex items-center gap-4 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 cursor-pointer">
    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-green-700">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold">{label}</p>
      <p className="text-[10px] text-gray-400">{sub}</p>
    </div>
  </div>
);
export default PaymentMethods;
