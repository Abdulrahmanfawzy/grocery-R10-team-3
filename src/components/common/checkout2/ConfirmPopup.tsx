import { X, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { storeOrder } from "@/lib/api/ordersApi";
import { useCheckout } from "@/lib/context/checkout.context";

interface Props {
  paymentMethodId: string; 
  onClose: () => void;
}

function MiniStepper() {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <div className="flex flex-col items-center gap-1">
        <div className="w-9 h-9 rounded-full bg-(--primary-color)flex items-center justify-center">
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
        <span className="text-xs text-gray-600">Shipping</span>
      </div>
      <div className="w-16 h-0.5 bg-(--primary-color) mb-4" />
      <div className="flex flex-col items-center gap-1">
        <div className="w-9 h-9 rounded-full bg-(--primary-color) flex items-center justify-center">
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
        <span className="text-xs text-gray-600">Payment</span>
      </div>
      <div className="w-16 h-0.5 bg-(--primary-color) mb-4" />
      <div className="flex flex-col items-center gap-1">
        <div className="w-9 h-9 rounded-full bg-(--primary-color) flex items-center justify-center">
          <span className="text-white text-sm font-bold">3</span>
        </div>
        <span className="text-xs text-gray-600 text-center">
          Confirm & Track
        </span>
      </div>
    </div>
  );
}

function CheckBadge() {
  return (
    <div className="flex justify-center mb-4">
      <div
        className="w-32 h-32 bg-(--primary-color) flex items-center justify-center"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 5%, 74% 3%, 82% 13%, 94% 17%, 97% 30%, 100% 42%, 93% 52%, 94% 65%, 85% 73%, 82% 86%, 70% 90%, 62% 100%, 50% 97%, 38% 100%, 30% 90%, 18% 86%, 15% 73%, 6% 65%, 7% 52%, 0% 42%, 3% 30%, 6% 17%, 18% 13%, 26% 3%, 39% 5%)",
        }}>
        <Check className="w-14 h-14 text-white" strokeWidth={3} />
      </div>
    </div>
  );
}

function ConfirmPopup({ paymentMethodId, onClose }: Props) {
  const navigate = useNavigate();
  const { summary } = useCheckout();

  const handleClose = async () => {
    try {
      const address_id = localStorage.getItem("address_id");
      const shippingRaw = localStorage.getItem("shipping_data");
      const shippingData = shippingRaw ? JSON.parse(shippingRaw) : null;

      await storeOrder({
        payment_method: "card",
        delivery_type: shippingData?.deliveryMethod ?? "delivery",
        address_id: address_id ? parseInt(address_id) : 0,
        amount: summary.total,
        payment_method_id: paymentMethodId,
      });
    } catch (error: any) {
      console.log("Order error:", error.response?.data);
    } finally {
      onClose();
      navigate("/checkout/confirmation");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 p-8">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors">
          <X className="w-4 h-4" />
          Close
        </button>

        <div className="mt-8">
          <MiniStepper />
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Payment Confirmed
          </h2>
          <CheckBadge />
          <p className="text-center text-gray-400 text-sm mt-4">
            Order Placed, Tracking In Progress
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;
