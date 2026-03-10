import { useEffect } from "react";
import { ContactForm } from "@/components/common/checkout1/ContactForm";
import { DeliveryDetails } from "@/components/common/checkout1/DeliveryDetails";
import { SpecialNotes } from "@/components/common/checkout1/SpecialNotes";
import { OrderSummary } from "@/components/common/checkout1/OrderSummary";
import Steps from "@/components/common/Steps";
import { getCart } from "@/lib/api/cartApi";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "@/hooks/hooks";
import { setCartItems } from "@/lib/store/cartSlice";

export default function CheckoutPage() {
  const dispatch = useAppDispatch();

  const { data: cartItems = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  useEffect(() => {
    if (cartItems.length > 0) {
      const itemsForRedux = cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        outOfStock: item.outOfStock,
        image: item.image || "",
      }));
      dispatch(setCartItems(itemsForRedux));
    }
  }, [cartItems, dispatch]);

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
