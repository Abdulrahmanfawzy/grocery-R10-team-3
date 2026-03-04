import { ContactForm } from "@/components/common/checkout/ContactForm";
import { DeliveryDetails } from "@/components/common/checkout/DeliveryDetails";
import { SpecialNotes } from "@/components/common/checkout/SpecialNotes";
import { OrderSummary } from "@/components/common/checkout/OrderSummary";
import type { CartItemType } from "@/lib/types/cart";

export default function CheckoutPage() {
  const cartItems: CartItemType[] = [
    {
      name: "Premium Organic Orange - 1KG",
      price: 20,
      quantity: 1,
      outOfStock: false,
      image: "/orange.png",
    },
    {
      name: "Sausage With Fat Balady",
      price: 400,
      quantity: 1,
      outOfStock: false,
      image: "/sausage.png",
    },
    {
      name: "COOKS - SALT - 400G",
      price: 12,
      quantity: 4,
      outOfStock: false,
      image: "/salt.png",
    },
    {
      name: "Zanaty White Eggs - 30Pieces",
      price: 189,
      quantity: 1,
      outOfStock: true,
      image: "/eggs.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-white min-h-screen">
      <div className="flex items-center justify-center mb-10 gap-4">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-[#004a61] text-white flex items-center justify-center text-sm">
            1
          </div>
          <span className="text-xs mt-1 text-[#004a61] font-bold">
            Shipping
          </span>
        </div>
        <div className="h-px w-24 bg-gray-200" />
        <div className="flex flex-col items-center opacity-40">
          <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center text-sm">
            2
          </div>
          <span className="text-xs mt-1">Payment</span>
        </div>
        <div className="h-px w-24 bg-gray-200" />
        <div className="flex flex-col items-center opacity-40">
          <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center text-sm">
            3
          </div>
          <span className="text-xs mt-1">Review</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <ContactForm />
          <DeliveryDetails />
          <SpecialNotes />
        </div>

        <div className="lg:col-span-1">
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}
