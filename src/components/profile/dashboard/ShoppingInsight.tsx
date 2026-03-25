import type { DashboardData } from "@/types/profile/dashboard/DashboardData";
import { Percent, ShoppingBag, Star, TrendingUp } from "lucide-react";

interface props {
  dashboardData: DashboardData;
}

function ShoppingInsight({ dashboardData }: props) {
  const shoppingInsight = dashboardData.shopping_insights;

  const status = [
    {
      icon: TrendingUp,
      label: "Monthly Spend",
      value: shoppingInsight?.monthly_spend || 0,
      sub: "+ 12% from last month",
      color: "bg-primary",
    },
    {
      icon: ShoppingBag,
      label: "Orders This Month",
      value: shoppingInsight?.orders_this_month?.count || 0,
      sub: `Every ~${shoppingInsight?.orders_this_month?.average_days_between_orders || 0} days`,
      color: "bg-primary/90",
    },
    {
      icon: Percent,
      label: "Total Savings",
      value: shoppingInsight?.total_savings || 0,
      sub: "Coupons &discounts",
      color: "bg-primary/80",
    },
    {
      icon: Star,
      label: "Avg Order Value",
      value: shoppingInsight?.average_order_value || 0,
      sub: `Based on ${shoppingInsight?.orders_this_month?.count} orders`,
      color: "bg-primary/70",
    },
  ];

  const categories = dashboardData?.category_distribution || [
    { name: "Fresh Produce", pct: 65 },
    { name: "Dairy", pct: 45 },
    { name: "Bakery", pct: 38 },
    { name: "Snacks", pct: 28 },
  ];

  return (
    <div className="my-5 shadow-2xl border border-border p-5">
      <h3 className="text-primary font-bold mb-3">Your Shopping Insights</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {status.map((s, index) => (
          <div
            key={index}
            className={`bg-blue-900 text-primary-foreground rounded-lg p-2 flex flex-col gap-2`}
          >
            <s.icon className="w-5 h-5 mb-2" />
            <p className="text-xs">{s.label}</p>
            <p className="font-bold text-lg">{s.value}</p>
            <p className="text-[10px]">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        {categories.map((c) => (
          <div key={c.name} className="flex gap-3 space-y-4 items-baseline ">
            <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
              <div
                className={`bg-[linear-gradient(to_right,transparent_20%,var(--color-primary))] h-full rounded-full`}
                style={{ width: `${c.pct}%` }}
              />
            </div>
            <span className="text-xs text-primary w-32 shrink-0">
              {c.name} ({c.pct}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingInsight;
