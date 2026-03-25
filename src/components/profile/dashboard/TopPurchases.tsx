import { Button } from "../../ui/button";
import EmptyState from "./EmptyState";
import { ShoppingBag } from "lucide-react";
import type {
  DashboardData,
  TopPurchase,
} from "@/types/profile/dashboard/DashboardData";

interface Props {
  dashboardData: DashboardData;
}

function TopPurchases({ dashboardData }: Props) {
  const topPurchases: TopPurchase[] = dashboardData?.top_purchases || [];

  return (
    <div className="bg-card rounded-lg border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-card-foreground">Your Top Purchases</h3>
        {topPurchases.length > 0 && (
          <Button variant="outline" size="sm" className="text-xs h-7">
            Add as List
          </Button>
        )}
      </div>

      {topPurchases.length === 0 ? (
        <EmptyState
          icon={ShoppingBag}
          title="No purchases yet"
          description="Your most frequently bought items will show up here"
          actionLabel="Browse Products"
          onAction={() => {}}
        />
      ) : (
        <div className="space-y-3">
          {topPurchases.map((p) => (
            <div key={p.meal_id} className="flex items-center justify-between border-border border-t-2 p-1">
              <div className="flex items-center gap-3 ">
                <div className=" w-16 h-16  ">
                <img src={p.image_url} alt={p.title} className="object-cover rounded-full w-full h-full" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    {p.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Bought {p.total_quantity_purchased} times
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs h-7 px-3"
              >
                Add
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopPurchases;
