import { FaApplePay, FaGooglePay } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import CardItem from "./CardItem";
import SavedCards from "./SavedCards";
import SecureCheckout from "./SecureCheckout";
import PromoCard from "./PromoCard";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe/stripe";

const otherMethods = [
  {
    id: "1",
    icon: TbTruckDelivery,
    title: "Cash on Delivery",
    subtitle: "Pay when you receive your order",
  },
  {
    id: "2",
    icon: FaApplePay,
    title: "Apple Pay",
    subtitle: "Quick checkout with Apple Pay",
  },
  {
    id: "3",
    icon: FaGooglePay,
    title: "Google Pay",
    subtitle: "Quick checkout with Google Pay",
  },
  {
    id: "4",
    icon: MdOutlinePayment,
    title: "Wallet Pay",
    subtitle: "Digital wallet payment",
  },
];

function PaymentMethod() {
  return (
    <div className="border border-gray-200 rounded-xl p-6 mb-6">
      <h2 className="text-base font-medium mb-4">Payment Method</h2>

      <SecureCheckout
        title="Secure Checkout"
        desc="Your information is encrypted and secure. We never store your full card details."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
        <div className="flex flex-col gap-4">
          {/* Saved Cards - محتاجة Elements عشان الـ Stripe يشتغل */}
          <Elements stripe={stripePromise}>
            <SavedCards />
          </Elements>
          <PromoCard />
        </div>

        {/* Other Payment Methods */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-gray-800">
            Other Payment Methods
          </h3>
          {otherMethods.map((method) => (
            <CardItem
              key={method.id}
              icon={method.icon}
              title={method.title}
              subtitle={method.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
