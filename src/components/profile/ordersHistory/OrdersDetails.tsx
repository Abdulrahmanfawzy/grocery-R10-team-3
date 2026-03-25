import { Button } from "@/components/ui/button";
import { getDate } from "@/lib/utils/getDate";
import type { OrdersInterface } from "@/types/profile/orderHistory/OrdersTypes";
import { FileText, ListFilter, ShoppingBag, Star } from "lucide-react";
import EmptyState from "../dashboard/EmptyState";

interface Props {
  ordersData: OrdersInterface;
}

const OrdersDetails = ({ ordersData }: Props) => {
  return (
    <div>
      {ordersData.data.length > 0 ? (
        <div className="space-y-4">
          {ordersData.data.slice(0, 2).map((order) => (
            <div
              key={order.id}
              className="bg-card rounded-lg border border-border p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="border border-border rounded-md px-3 py-1.5">
                  <p className="text-sm font-medium text-card-foreground">
                    Order {order.id}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {getDate(order.created_at)} {order.items.length} Items
                  </p>
                </div>
                <span className="text-xs font-medium text-success border border-success/30 rounded-md px-2 py-1">
                  {order.status}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                {order.items.map((p) => (
                  <div
                    key={p.meal.title}
                    className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2"
                  >
                    <div className="w-14 h-14">
                      <img
                        src={p.meal.image_url}
                        alt={p.meal.title}
                        className="object-cover h-full w-full rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-card-foreground">
                        {p.meal.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Qty : {p.quantity}
                      </p>
                    </div>
                  </div>
                ))}
                {order.items.length > 2 && (
                  <div className="bg-muted rounded-lg px-3 py-2 text-xs text-muted-foreground">
                    +{order.items.length - 2} More
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-center justify-between">
                <p className="text-lg font-bold text-primary">{order.total}</p>
                <div className="flex gap-2">
                  <Button size="sm">
                    <FileText className="w-3 h-3 mr-1" /> Download Receipt
                  </Button>
                  <Button size="sm">
                    <Star className="w-3 h-3 mr-1" /> Rate
                  </Button>
                  <Button size="sm">
                    <ListFilter className="w-3 h-3 mr-1" /> Reorder
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={ShoppingBag}
          title="You have no orders"
          description="Go fill your cart and come again"
          actionLabel="Go Shopping"
        />
      )}
    </div>
  );
};

export default OrdersDetails;
