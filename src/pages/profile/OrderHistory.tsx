import OrdersDetails from "@/components/profile/ordersHistory/OrdersDetails";
import { useGetOrders } from "@/lib/api/profile/ordersHistory/use-getOrders";
import { ChevronDown, Search } from "lucide-react";

function OrderHistory() {
  const { data, isLoading, isError } = useGetOrders();

  if (isLoading) return <div className="">Loading....</div>;

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Order History</h1>
        <p className="text-muted-foreground text-sm mt-1">
          View and manage all your past orders
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 my-5">
        <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-card">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            placeholder="Search Orders"
            className="bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <button className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-card text-sm text-card-foreground">
          All Status <ChevronDown className="w-3 h-3" />
        </button>
        <button className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-card text-sm text-card-foreground">
          Last 30 Days <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* Orders */}
      <OrdersDetails ordersData={data} />
    </>
  );
}

export default OrderHistory;
