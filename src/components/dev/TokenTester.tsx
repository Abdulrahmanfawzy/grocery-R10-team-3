import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TOKEN_KEY = "token";

export function TokenTester() {
  const [token, setToken] = useState("");
  const [saved, setSaved] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem(TOKEN_KEY) ?? "");
  }, []);

  const handleSave = () => {
    if (token.trim()) {
      localStorage.setItem(TOKEN_KEY, token.trim());
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  };

  const handleClear = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken("");
  };

  if (!import.meta.env.DEV) return null;

  return (
    <div className="fixed bottom-4 left-4 z-9999 bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-sm">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs text-gray-500 hover:text-[#004a61] font-medium"
      >
        {isOpen
          ? "▼ إخفاء Token (للاختبار)"
          : "▶ وضع Token من Postman (للاختبار)"}
      </button>
      {isOpen && (
        <div className="mt-2 space-y-2">
          <Input
            type="password"
            placeholder="الصق الـ token من Postman هنا"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="text-xs h-9"
          />
          <div className="flex gap-2">
            <Button
              type="button"
              size="sm"
              onClick={handleSave}
              className="text-xs h-8"
            >
              {saved ? "✓ تم الحفظ" : "حفظ واستخدام"}
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={handleClear}
              className="text-xs h-8"
            >
              مسح
            </Button>
          </div>
          <p className="text-[10px] text-gray-400">
            Postman → Login → Response → data.token
          </p>
        </div>
      )}
    </div>
  );
}
