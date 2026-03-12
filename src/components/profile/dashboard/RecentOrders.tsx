import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import type {
  DashboardData,
  RecentOrder,
} from "@/types/profile/dashboard/DashboardData";
import EmptyState from "./EmptyState";
import { Package } from "lucide-react";
import { getDate } from "@/lib/utils/getDate";

interface Props {
  dashboardData: DashboardData;
}


const RecentOrders = ({ dashboardData }: Props) => {
  const recentOrders: RecentOrder[] = dashboardData.recent_orders;

  return (
    <div className="bg-card h-fit rounded-lg border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-card-foreground">Recent Orders</h3>
        {recentOrders.length > 0 && (
          <Button variant="outline" size="sm" className="text-xs h-7">
            View All
          </Button>
        )}
      </div>

      {recentOrders.length === 0 ? (
        <EmptyState
          icon={Package}
          title="No orders yet"
          description="Your recent orders will appear here once you start shopping"
          actionLabel="Start Shopping"
          onAction={() => {}}
        />
      ) : (
        <div className="space-y-4">
          {recentOrders.map((order, i) => (
            <div key={i} className="border-t border-border p-2 ]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-primary">
                  {order.id}
                </span>
                <Badge
                  variant="outline"
                  className="text-[10px] border-success text-success bg-success/10"
                >
                  {order.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">
                    {getDate(order.created_at)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {order.items_count} items
                  </p>
                </div>
                <p className="font-semibold text-sm text-card-foreground">
                  {order.total}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
