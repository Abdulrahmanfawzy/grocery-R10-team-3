import PaymentHistory from "@/components/profile/payment/PaymentHistory";
import PaymentsMethod from "@/components/profile/payment/PaymentsMethod";
import { Button } from "@/components/ui/button";
import { useGetDashboard } from "@/lib/api/profile/dashboardApi/use-getDashboard";
import { useGetPaymentsHistory } from "@/lib/api/profile/paymentsApi/use-getPayments";
import type { DashboardData } from "@/types/profile/dashboard/DashboardData";
import { Download } from "lucide-react";

const Wallet = () => {
  const { data, isLoading, isError } = useGetPaymentsHistory();
  const {
    data: dashboard,
    isPending,
    isError: dashboardError,
  } = useGetDashboard();

  if (isLoading || isPending) return <div className="">Loading....</div>;

  const dashboardData: DashboardData = dashboard.data;
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Payment & Wallet</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage your payment methods and view transaction history
        </p>
      </div>

      {/* Store Credit */}
      <div className="bg-primary rounded-lg flex flex-col gap-3 p-6 mt-4 text-primary-foreground border-2 border-accent">
        <p className="text-3xl">Store Credit</p>
        <p className="text-sm font-bold mt-1 mb-0">
          £{dashboardData.overview.store_credits}
        </p>
        <p className="  mt-2">Available for your next purchase</p>
      </div>

      {/* Saved Cards Other Payment Methods */}
      <PaymentsMethod />

      {/* Payment History */}
      <PaymentHistory paymentHistory={data.data} />

      {/* Receipt & Invoice */}
      <div className="bg-card rounded-lg border border-border p-6 mt-4">
        <h2 className="font-semibold text-card-foreground">
          Receipt & Invoice
        </h2>
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          Download PDF receipts for your orders
        </p>
        <Button className="cursor-pointer">
          <Download className="w-4 h-4 mr-1" /> Download All Receipts
        </Button>
      </div>
      {/* Receipt & Invoice */}
    </>
  );
};

export default Wallet;
