import { useEffect } from "react";
import { CartItem } from "@/components/common/CartItem";
import PaymentMethods from "@/components/common/checkout2/PaymentMethods";
import Steps from "@/components/common/Steps";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { setPayment } from "@/lib/store/checkoutSlice";
import { useCreateOrderMutation } from "@/lib/api/checkoutQueries";
import { getCart } from "@/lib/api/cartApi";
import { useQuery } from "@tanstack/react-query";
import { setCartItems } from "@/lib/store/cartSlice";

const CheckoutPage2 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const checkout = useAppSelector((state) => state.checkout);
  const cartItems = useAppSelector((state) => state.cart.items);
  const createOrderMutation = useCreateOrderMutation();

  const { data: apiCart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  useEffect(() => {
    if (apiCart.length > 0 && cartItems.length === 0) {
      const itemsForRedux = apiCart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        outOfStock: item.outOfStock,
        image: item.image || "",
      }));
      dispatch(setCartItems(itemsForRedux));
    }
  }, [apiCart, dispatch, cartItems.length]);

  const items =
    cartItems.length > 0 ? cartItems : Array.isArray(apiCart) ? apiCart : [];

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = subtotal * 0.1;
  const total = subtotal + shipping;

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
      <PaymentMethods />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 w-full ">
        <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm sticky top-8">
          <h3 className="text-xl font-bold mb-6">Cart Summary</h3>

          <div className="space-y-2 max-h-100 overflow-y-auto pr-4 custom-scrollbar">
            {items.map((item, idx) => (
              <CartItem key={item.id || idx} item={item} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="mb-8 space-y-4 pt-6  ">
              <div className="s text-xl font-bold text-[#004a61] pt-2  border-gray-100">
                <span>Total Amounts</span>
              </div>
              <div className="flex justify-between text-base text-gray-400">
                <span>Subtotal</span>
                <span className="font-medium">£ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base text-gray-400">
                <span>Shipping</span>
                <span className="font-medium">£ {shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-semibold text-[#004a61] pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>£ {total.toFixed(2)}</span>
              </div>
            </div>
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
          className="w-full md:w-100 bg-[#004a61] hover:bg-[#003649] h-12 text-white font-bold rounded-lg"
        >
          {createOrderMutation.isPending
            ? "جاري إنشاء الطلب..."
            : "Confirm Payment & Go To Checkout"}
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage2;
