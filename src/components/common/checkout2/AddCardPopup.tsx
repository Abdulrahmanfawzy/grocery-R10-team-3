import { useState } from "react";
import { X, Lock } from "lucide-react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createSetupIntent } from "@/lib/api/cardsApi";

interface Props {
  onClose: () => void;
  onCardSaved: () => void; // called after card is saved — parent refreshes card list
}

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "15px",
      color: "#1f2937",
      fontFamily: "inherit",
      "::placeholder": { color: "#9ca3af" },
    },
    invalid: { color: "#ef4444" },
  },
};

function AddCardPopup({ onClose, onCardSaved }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    setLoading(true);
    setError(null);

    try {
      // Step 1 — Get client_secret from your backend
      const { client_secret } = await createSetupIntent();

      // Step 2 — Confirm the card setup with Stripe
      const { setupIntent, error: stripeError } = await stripe.confirmCardSetup(
        client_secret,
        {
          payment_method: { card: cardElement },
        },
      );

      if (stripeError) {
        setError(stripeError.message ?? "Card setup failed. Please try again.");
        return;
      }

      if (setupIntent?.status === "succeeded") {
        // Card is now saved on both Stripe and your backend
        onCardSaved();
        onClose();
      }
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Something went wrong. Please try again.";
      setError(message);
      console.error("Setup intent error:", err?.response?.data ?? err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors disabled:opacity-50">
          <X className="w-4 h-4" />
          Close
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-center text-(--primary-color) mt-6 mb-2">
          Add New Card
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Your card details are encrypted and secure.
        </p>

        {/* Stripe CardElement */}
        <div className="border-2 border-gray-200 focus-within:border-(--primary-color) rounded-xl px-4 py-4 transition-colors mb-4">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>

        {/* Error message */}
        {error && (
          <p className="text-xs text-red-500 mb-3 text-center">{error}</p>
        )}

        {/* Secure label */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-5">
          <Lock className="w-3 h-3" />
          <span>Secured by Stripe</span>
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          disabled={loading || !stripe}
          className="w-full bg-(--primary-color) hover:bg-[#154360] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
          {loading ? (
            <>
              <svg
                className="animate-spin w-4 h-4"
                viewBox="0 0 24 24"
                fill="none">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Saving...
            </>
          ) : (
            "Save Card"
          )}
        </button>
      </div>
    </div>
  );
}

export default AddCardPopup;
