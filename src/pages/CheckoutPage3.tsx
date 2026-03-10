import { OrderSummary } from "@/components/common/checkout1/OrderSummary";

import DriverInfo from "@/components/common/checkout3/DriverInfo";
import TrackOrder from "@/components/common/checkout3/TrackOrder";
import Steps from "@/components/common/Steps";
import OrderOption from "@/components/common/checkout3/OrderOption";

export default function CheckoutPage3() {
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
