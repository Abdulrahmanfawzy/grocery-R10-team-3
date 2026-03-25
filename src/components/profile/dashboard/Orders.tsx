import {
  ArrowRight,
  Calendar,
  Car,
  Package,
  ShoppingBasket,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { Button } from "../../ui/button";
import type { OrdersProps } from "@/lib/types/dashboard";
import EmptyState from "./EmptyState";
import { Link } from "react-router-dom";
import { getDate } from "@/lib/utils/getDate";


const Orders = ({ dashboardData }: OrdersProps) => {
  const currentOrders = dashboardData.overview?.current_cart;
  const upComingOrders = dashboardData.overview?.upcoming_delivery;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Current Cart */}
        {currentOrders?.items_count !== null || 0 ? (
          <div className="bg-card rounded-lg border border-border p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-semibold text-sm text-card-foreground">
                  Current Cart
                </h3>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-7 cursor-pointer"
              >
                View Cart
              </Button>
            </div>
            <div className="bg-[#F7FCFF] rounded-lg p-5">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-card-foreground">
                  {currentOrders?.items_count} items in cart
                </p>
                <p className="font-bold text-card-foreground">
                  £{currentOrders?.total}
                </p>
              </div>
              <p className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                Last updated:
                <span>
                  {currentOrders.last_updated
                    ? getDate(currentOrders.last_updated)
                    : "Now"}
                </span>
              </p>
            </div>
            <Link to={"/"} className="mt-auto block">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm flex items-center gap-2 cursor-pointer">
                Continue Shopping
                <ArrowRight />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="bg-card rounded-lg border border-border p-5">
            <div className="flex items-center gap-3 mb-5">
              <ShoppingCart className="w-4 h-4 text-muted-foreground" />
              <h3 className="font-semibold text-sm text-card-foreground">
                Current Cart
              </h3>
            </div>
            <EmptyState
              icon={Truck}
              title="Your cart is empty"
              description="Add items to your cart and they'll appear here"
              actionLabel="Start Shopping"
            />
          </div>
        )}

        {/* Upcoming Delivery */}
        {upComingOrders ? (
          <div className="bg-card rounded-lg border border-border p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-semibold text-sm text-card-foreground">
                  Upcoming Delivery
                </h3>
              </div>
              <Button variant="outline" size="sm" className="text-xs h-7">
                Track
              </Button>
            </div>
            <p className="font-semibold text-card-foreground mb-1">
              Tomorrow, Nov 28
            </p>
            <p className="text-xs text-muted-foreground">10:00 AM - 12:00 PM</p>
            <p className="text-xs text-muted-foreground mb-4">
              Order #GP20251126001
            </p>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
              View Details &gt;
            </Button>
          </div>
        ) : (
          <div className="bg-card rounded-lg border border-border p-5">
            <div className="flex items-center gap-3 mb-5">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <h3 className="font-semibold text-sm text-card-foreground">
                Upcoming Delivery
              </h3>
            </div>
            <EmptyState
              icon={Package}
              title="No deliveries scheduled"
              description="Your upcoming deliveries will be tracked here"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
