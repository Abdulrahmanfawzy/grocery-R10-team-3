import { useEffect } from "react";
import { OrderSummary } from "@/components/common/checkout1/OrderSummary";
import DriverInfo from "@/components/common/checkout3/DriverInfo";
import TrackOrder from "@/components/common/checkout3/TrackOrder";
import Steps from "@/components/common/Steps";
import OrderOption from "@/components/common/checkout3/OrderOption";
import { getCart } from "@/lib/api/cartApi";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setCartItems } from "@/lib/store/cartSlice";

export default function CheckoutPage3() {
  const dispatch = useAppDispatch();

  const { data: apiCart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const currentCartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    if (apiCart.length > 0 && currentCartItems.length === 0) {
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
  }, [apiCart, dispatch, currentCartItems.length]);

  return (
    <div>
      <Steps />
      <div className="max-w-5xl mx-auto p-6 space-y-10 bg-white">
        <TrackOrder />
        <DriverInfo />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 w-full ">
          <OrderSummary />
          <OrderOption />
        </div>
      </div>
    </div>
  );
}
