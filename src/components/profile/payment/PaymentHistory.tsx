import { Button } from "@/components/ui/button";
import { getDate } from "@/lib/utils/getDate";
import type {
  Datum,
  PaymentInterface,
} from "@/types/profile/payments/PaymentsType";
import { ChevronRight, ShoppingBag } from "lucide-react";
import EmptyState from "../dashboard/EmptyState";
interface Props {
  paymentHistory: Datum[];
}
const PaymentHistory = ({ paymentHistory }: Props) => {
  return (
    <div>
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-semibold text-card-foreground mb-4">
          Payment History
        </h2>
        {paymentHistory.length > 0 ? (
          <div className="space-y-3">
            {paymentHistory.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between border border-border rounded-lg p-3"
              >
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Order: {tx.order_number}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {getDate(tx.created_at)}
                  </p>
                </div>
                <div className="text-right">
                  <p className={` font-semibold  text-card-foreground mb-2`}>
                    £{tx.amount}
                  </p>
                  <span className="text-xs bg-green-100/60 text-green-400 p-2 rounded-md">
                    {tx.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={ShoppingBag}
            title="No orders yet"
            description="You have no payments history "
            actionLabel="Go Shopping"
          />
        )}

        <Button className="mt-4">
          View All Transactions <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default PaymentHistory;
