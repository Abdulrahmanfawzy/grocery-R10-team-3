import { paymentMethod } from "@/lib/constants/paymentsWallet/MockData";
import type { Datum } from "@/types/profile/payments/PaymentsType";
import { Plus } from "lucide-react";


const PaymentsMethod = () => {
  return (
    <div>
      {/* Saved Cards & Other Payment Methods */}
      <div className="bg-card rounded-lg border border-border p-6 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold text-card-foreground mb-4">
              Saved Cards
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 border border-border rounded-lg p-3">
                <span className="text-xs font-bold bg-muted px-2 py-1 rounded">
                  VISA
                </span>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Visa •••• 4242
                  </p>
                  <p className="text-xs text-muted-foreground">Expires 12/25</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-2 border-primary rounded-lg p-3">
                <span className="text-xs font-bold bg-destructive/20 text-destructive px-2 py-1 rounded">
                  MC
                </span>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Mastercard •••• 8888
                  </p>
                  <p className="text-xs text-muted-foreground">Expires 08/26</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-card-foreground border border-dashed border-border rounded-lg p-3 w-full">
                <Plus className="w-4 h-4" /> Add New Card
              </button>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-card-foreground mb-4">
              Other Payment Methods
            </h2>
            <div className="space-y-3">
              {paymentMethod.map((method) => (
                <div
                  key={method.label}
                  className="flex items-center gap-3 border border-border rounded-lg p-3"
                >
                  <method.icon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">
                      {method.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {method.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsMethod;
