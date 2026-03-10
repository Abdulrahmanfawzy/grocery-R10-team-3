import { ContactForm } from "@/components/common/checkout1/ContactForm";
import { DeliveryDetails } from "@/components/common/checkout1/DeliveryDetails";
import { SpecialNotes } from "@/components/common/checkout1/SpecialNotes";
import { OrderSummary } from "@/components/common/checkout1/OrderSummary";
import Steps from "@/components/common/Steps";

export default function CheckoutPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white min-h-screen">
      <Steps />

      <div className="flex gap-30 ">
        <div className="flex flex-col gap-6">
          <ContactForm />
          <DeliveryDetails />
          <SpecialNotes />
        </div>

        <div className="lg:col-span-1 w-[60%]">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
