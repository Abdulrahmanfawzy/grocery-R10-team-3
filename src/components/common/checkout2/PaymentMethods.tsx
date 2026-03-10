import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type {
  CardOptionProps,
  MethodBadgeProps,
} from "@/lib/types/checkoutpage2.types";
import { ShieldCheck, Wallet, Loader2 } from "lucide-react";
import { BsCashCoin } from "react-icons/bs";
import { FaApplePay, FaGooglePay } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { setPayment } from "@/lib/store/checkoutSlice";
import { useSavedCardsQuery } from "@/lib/api/checkoutQueries";

function PaymentMethods() {
  const dispatch = useAppDispatch();
  const payment = useAppSelector((state) => state.checkout.payment);
  const { data: savedCards = [], isLoading: cardsLoading } =
    useSavedCardsQuery();

  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

  const selectedMethod =
    payment?.paymentMethod === "card"
      ? (payment?.paymentMethodId ?? "card_0")
      : "cash";
  const billingSameAsDelivery = payment?.billingSameAsDelivery ?? true;

  const setPaymentMethod = (
    method: "card" | "cash_on_delivery",
    id?: string,
  ) => {
    dispatch(
      setPayment({
        paymentMethod: method,
        paymentMethodId: method === "card" ? (id ?? null) : null,
        billingSameAsDelivery,
      }),
    );
  };

  const setBillingSame = (same: boolean) => {
    dispatch(
      setPayment({
        paymentMethod: payment?.paymentMethod ?? "cash_on_delivery",
        paymentMethodId: payment?.paymentMethodId ?? null,
        billingSameAsDelivery: same,
      }),
    );
  };

  return (
    <section className="bg-white border border-dashed p-8 rounded-3xl shadow-sm mb-8">
      <h3 className="text-xl font-bold mb-6">Payment Method</h3>

      <div className="bg-gray-100/80 p-4 rounded-xl flex items-start gap-3 mb-8 border-r-8 border-gray-300 relative overflow-hidden">
        <ShieldCheck className="text-[#004a61] shrink-0" size={20} />
        <div>
          <p className="text-[#004a61] font-semibold text-sm">
            Secure Checkout
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Your information is encrypted and secure. We never store your full
            card details.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-300 translate-x-4 translate-y-4 rotate-45" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-700">Saved Cards</h4>
          {cardsLoading ? (
            <div className="flex items-center gap-2 text-gray-400">
              <Loader2 className="animate-spin" size={16} />
              <span className="text-sm">Loading cards...</span>
            </div>
          ) : savedCards.length > 0 ? (
            savedCards.map((card) => {
              const cardId = card.id || `card_${card.last4}`;
              const label = card.brand
                ? `${card.brand} •••• ${card.last4 ?? "****"}`
                : `Card •••• ${card.last4 ?? "****"}`;
              const sub =
                card.exp_month && card.exp_year
                  ? `Expires ${card.exp_month}/${card.exp_year}`
                  : "";
              return (
                <CardOption
                  key={cardId}
                  id={cardId}
                  label={label}
                  sub={sub}
                  icon={card.brand}
                  selected={selectedMethod === cardId}
                  onClick={() => setPaymentMethod("card", cardId)}
                />
              );
            })
          ) : (
            <p className="text-gray-500 text-sm">
              No saved cards. Add one below.
            </p>
          )}

          <Dialog open={isAddCardOpen} onOpenChange={setIsAddCardOpen}>
            <DialogTrigger asChild>
              <button className="text-[#004a61] text-sm font-medium flex items-center gap-2 mt-4 px-2 hover:underline">
                <span className="text-xl">+</span> Add New Card
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Card</DialogTitle>
                <DialogDescription>
                  Enter your card details securely. We never store your full
                  card information.
                </DialogDescription>
              </DialogHeader>
              <AddCardForm onSuccess={() => setIsAddCardOpen(false)} />
            </DialogContent>
          </Dialog>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={billingSameAsDelivery}
                onChange={(e) => setBillingSame(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#004a61] focus:ring-[#004a61]"
              />
              <span className="text-sm text-gray-600">
                Billing address same as delivery
              </span>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-gray-700">Other Payment Methods</h4>
          <div className="grid grid-cols-1 gap-3">
            <MethodBadge
              label="Cash on Delivery"
              sub="Pay when you receive"
              icon={<BsCashCoin size={20} />}
              selected={selectedMethod === "cash"}
              onClick={() => setPaymentMethod("cash_on_delivery")}
            />
            <MethodBadge
              label="Apple Pay"
              sub="Quick checkout with Apple Pay"
              icon={<FaApplePay size={30} />}
              selected={false}
              onClick={() => {}}
            />
            <MethodBadge
              label="Google Pay"
              sub="Quick checkout with Google Pay"
              icon={<FaGooglePay size={30} />}
              selected={false}
              onClick={() => {}}
            />
            <MethodBadge
              label="Wallet Pay"
              sub="Digital wallet payment"
              icon={<Wallet size={18} />}
              selected={false}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AddCardForm({ onSuccess }: { onSuccess: () => void }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!cardNumber || !expiry || !cvc || !cardholderName) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onSuccess();
    } catch {
      setError("Failed to add card. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : value;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-1">
          Cardholder Name
        </label>
        <Input
          placeholder="John Doe"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 block mb-1">
          Card Number
        </label>
        <Input
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          maxLength={19}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Expiry Date
          </label>
          <Input
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
            maxLength={5}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            CVC
          </label>
          <Input
            placeholder="123"
            value={cvc}
            onChange={(e) =>
              setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))
            }
            maxLength={4}
            type="password"
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onSuccess}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" size={16} />
              Adding...
            </>
          ) : (
            "Add Card"
          )}
        </Button>
      </div>
    </form>
  );
}

const CardOption = ({
  label,
  sub,
  selected,
  onClick,
  icon,
}: CardOptionProps) => (
  <div
    onClick={onClick}
    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
      selected
        ? "border-[#004a61] bg-blue-50/20"
        : "border-gray-100 bg-white hover:border-gray-200"
    }`}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-12 h-8 bg-gray-50 rounded flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div>
          <p className="text-sm font-bold">{label}</p>
          <p className="text-[10px] text-gray-400">{sub}</p>
        </div>
      </div>

      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
          selected ? "border-[#004a61]" : "border-gray-300"
        }`}
      >
        {selected && <div className="w-2 h-2 rounded-full bg-[#004a61]" />}
      </div>
    </div>
  </div>
);

const MethodBadge = ({
  label,
  sub,
  icon,
  selected,
  onClick,
}: MethodBadgeProps & { selected?: boolean; onClick?: () => void }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-4 p-3 border rounded-xl cursor-pointer transition-all ${
      selected
        ? "border-[#004a61] bg-blue-50/20"
        : "border-gray-100 hover:bg-gray-50 hover:border-gray-200"
    }`}
  >
    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-green-700">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-xs font-bold">{label}</p>
      <p className="text-[10px] text-gray-400">{sub}</p>
    </div>
    <div
      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
        selected ? "border-[#004a61]" : "border-gray-300"
      }`}
    >
      {selected && <div className="w-2 h-2 rounded-full bg-[#004a61]" />}
    </div>
  </div>
);

export default PaymentMethods;
