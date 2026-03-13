import { useEffect } from "react";
import { OrderSummary } from "@/components/common/checkout1/OrderSummary";
import PaymentMethod from "@/components/common/checkout2/PaymentMethod";
import Steps from "@/components/common/Steps";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { setPayment } from "@/lib/store/checkoutSlice";
import { useCreateOrderMutation } from "@/lib/api/checkoutQueries";
import { Elements } from "@stripe/react-stripe-js"; // ✅ Stripe
import { stripePromise } from "@/lib/stripe/stripe"; // ✅ Stripe

const CheckoutPage2 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const checkout = useAppSelector((state) => state.checkout);
  const createOrderMutation = useCreateOrderMutation();

  useEffect(() => {
    if (!checkout.payment) {
      dispatch(
        setPayment({
          paymentMethod: "cash_on_delivery",
          billingSameAsDelivery: true,
        }),
      );
    }
  }, [checkout.payment, dispatch]);

  async function handleConfirmPayment() {
    navigate("/checkout3");
  }

  const billingSameAsDelivery = checkout.payment?.billingSameAsDelivery ?? true;
  const deliveryAddressText = checkout.delivery
    ? `${checkout.delivery.address}, ${checkout.delivery.city}`
    : "Villa 14, Street 23, District 5, New Cairo, Cairo 11835";

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50/30 min-h-screen">
      <Steps />

      {/* ✅ PaymentMethod بتاعتك محاطة بـ Elements */}
      <Elements stripe={stripePromise}>
        <PaymentMethod />
      </Elements>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 w-full">
        <OrderSummary />

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="mt-15">
              <h4 className="font-bold text-lg mb-4">Billing Address</h4>
              <div className="flex items-center gap-2 mb-4">
                <Checkbox
                  id="billing"
                  checked={billingSameAsDelivery}
                  onCheckedChange={(checked) =>
                    dispatch(
                      setPayment({
                        paymentMethod:
                          checkout.payment?.paymentMethod ?? "cash_on_delivery",
                        paymentMethodId:
                          checkout.payment?.paymentMethodId ?? null,
                        billingSameAsDelivery: !!checked,
                      }),
                    )
                  }
                />
                <label htmlFor="billing" className="text-sm text-gray-400">
                  Billing address same as delivery address
                </label>
              </div>
              <div className="bg-gray-100/80 p-4 rounded-xl">
                <p className="text-xs text-blue-900 font-semibold mb-1">
                  Billing address will be:
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {deliveryAddressText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex ml-5">
        <Button
          onClick={() => handleConfirmPayment()}
          disabled={createOrderMutation.isPending}
          className="w-full md:w-100 bg-[#004a61] hover:bg-[#003649] h-12 text-white font-bold rounded-lg">
          {createOrderMutation.isPending
            ? "جاري إنشاء الطلب..."
            : "Confirm Payment & Go To Checkout"}
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage2;
