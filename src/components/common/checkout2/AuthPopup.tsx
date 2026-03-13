import { useState, useRef } from "react";
import { X } from "lucide-react";

const BRAND_LABELS: Record<string, string> = {
  visa: "Visa",
  mastercard: "Mastercard",
  amex: "Amex",
  discover: "Discover",
};

interface Props {
  brand: string;
  last4: string; 
  paymentMethodId: string; 
  onClose: () => void;
  onVerified: (paymentMethodId: string) => void;
}

function AuthPopup({
  brand,
  last4,
  paymentMethodId,
  onClose,
  onVerified,
}: Props) {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const updated = [...pin];
    updated[index] = value;
    setPin(updated);
    setError(false);
    if (value && index < 3) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !pin[index] && index > 0)
      inputRefs.current[index - 1]?.focus();
  };

  const handleVerify = () => {
    if (pin.some((d) => d === "")) {
      setError(true);
      return;
    }
    onVerified(paymentMethodId);
  };

  const brandLabel =
    BRAND_LABELS[(brand ?? "").toLowerCase()] ?? brand ?? "Card";
  const masked = `*****${(last4 ?? "****").slice(-2)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors">
          <X className="w-4 h-4" />
          Close
        </button>

        <h2 className="text-xl font-bold text-center text-[#1a5276] mt-6 mb-4">
          Payment Authorization
        </h2>
        <p className="text-sm text-gray-700 text-center mb-5 leading-relaxed">
          To continue with your payment please enter your security Pin sent to
          your mobile Number associated with
        </p>

        {/* Card indicator */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-sm font-semibold text-gray-700">
            {brandLabel}
          </span>
          <span className="text-sm text-gray-400 tracking-widest">
            {masked}
          </span>
        </div>

        {/* PIN inputs */}
        <div className="flex justify-center gap-3 mb-2">
          {pin.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className={`w-12 h-12 text-center text-lg font-semibold border-2 rounded-lg outline-none transition-colors
                ${error ? "border-red-400" : "border-gray-200 focus:border-[#1a5276]"}`}
            />
          ))}
        </div>
        {error && (
          <p className="text-xs text-red-500 text-center mb-3">
            Please enter all 4 digits
          </p>
        )}

        <button
          onClick={handleVerify}
          className="mt-4 w-full bg-[#1a5276] hover:bg-[#154360] text-white font-semibold py-3.5 rounded-xl transition-colors">
          Verify
        </button>
      </div>
    </div>
  );
}

export default AuthPopup;
