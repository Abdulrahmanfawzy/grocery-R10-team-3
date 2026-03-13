import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCreditCard,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import CardItem from "./CardItem";
import AuthorizationPopup from "./AuthPopup";
import AddNewCardPopup from "./AddCardPopup";
import { getCards, deleteCard } from "@/lib/api/cardsApi";
import type { SavedCard } from "@/lib/api/cardsApi";
import ConfirmPopup from "./ConfirmPopup";

const BRAND_ICONS: Record<string, IconType> = {
  visa: FaCcVisa,
  mastercard: FaCcMastercard,
  amex: FaCcAmex,
};

const getBrandIcon = (brand?: string): IconType => {
  if (!brand) return FaCreditCard;
  return BRAND_ICONS[brand.toLowerCase()] ?? FaCreditCard;
};

type PopupState = "none" | "add-card" | "auth" | "confirmed";

function SavedCards() {
  const [cards, setCards] = useState<SavedCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState<SavedCard | null>(null);
  const [verifiedPmId, setVerifiedPmId] = useState<string>("");
  const [popup, setPopup] = useState<PopupState>("none");

  const fetchCards = async () => {
    try {
      setLoading(true);
      const data = await getCards();
      console.log("cards response:", data);
      setCards(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load cards:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  // Handlers
  const handleCardClick = (card: SavedCard) => {
    setSelectedCard(card);
    setPopup("auth");
  };

  const handleVerified = (pmId: string) => {
    setVerifiedPmId(pmId);
    setPopup("confirmed");
  };

  const handleDeleteCard = async (e: React.MouseEvent, pmId: string) => {
    e.stopPropagation(); // don't trigger card click
    try {
      await deleteCard(pmId);
      setCards((prev) => prev.filter((c) => c.id !== pmId));
    } catch (err) {
      console.error("Failed to delete card:", err);
    }
  };

  const handleCardSaved = () => {
    fetchCards();
  };

  const closeAll = () => {
    setPopup("none");
    setSelectedCard(null);
    setVerifiedPmId("");
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-gray-800">Saved Cards</h3>

        {loading ? (
          <p className="text-sm text-gray-400 py-2">Loading cards...</p>
        ) : cards.length === 0 ? (
          <p className="text-sm text-gray-400 py-2">No saved cards yet.</p>
        ) : (
          cards.map((card) => {
            const Icon = getBrandIcon(card.brand);
            const brand = card.brand ?? "Card";
            const brandLabel = brand.charAt(0).toUpperCase() + brand.slice(1);
            return (
              <div key={card.id} className="relative group">
                <CardItem
                  icon={Icon}
                  title={`${brandLabel} •••• ${card.last4 ?? "****"}`}
                  subtitle={
                    card.exp_month
                      ? `Expires ${String(card.exp_month).padStart(2, "0")}/${card.exp_year}`
                      : ""
                  }
                  onClick={() => handleCardClick(card)}
                />
                <button
                  onClick={(e) => handleDeleteCard(e, card.id)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500"
                  title="Remove card">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })
        )}

        <button
          onClick={() => setPopup("add-card")}
          className="flex items-center gap-2 border border-gray-200 hover:border-[#1a5276] rounded-lg px-4 py-3 w-full transition-colors">
          <Plus className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">Add New Card</span>
        </button>
      </div>

      {popup === "add-card" && (
        <AddNewCardPopup onClose={closeAll} onCardSaved={handleCardSaved} />
      )}

      {popup === "auth" && selectedCard && (
        <AuthorizationPopup
          brand={selectedCard.brand}
          last4={selectedCard.last4}
          paymentMethodId={selectedCard.id}
          onClose={closeAll}
          onVerified={handleVerified}
        />
      )}

      {popup === "confirmed" && (
        <ConfirmPopup
          paymentMethodId={verifiedPmId}
          onClose={closeAll}
        />
      )}
    </>
  );
}

export default SavedCards;
