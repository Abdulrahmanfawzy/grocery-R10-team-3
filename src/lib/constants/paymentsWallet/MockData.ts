import type { PaymentHistory, PaymentMethod } from "@/lib/types/paymentsWallet";
import { Banknote, Smartphone, Wallet2 } from "lucide-react";

export const paymentMethod:  PaymentMethod[]= [
  {
    icon: Banknote,
    label: "Cash on Delivery",
    desc: "Pay when you receive your order",
  },
  {
    icon: Smartphone,
    label: "Apple Pay",
    desc: "Quick checkout with Apple Pay",
  },
  {
    icon: Smartphone,
    label: "Google Pay",
    desc: "Quick checkout with Google Pay",
  },
  {
    icon: Wallet2,
    label: "Wallet Pay",
    desc: "Digital wallet payment",
  },
];

export const paymentHistory: PaymentHistory[] =[
            {
              order: "Order #GP001",
              date: "Nov 24, 2025",
              amount: "£45.32",
              refund: false,
            },
            {
              order: "Refund Order #GP001",
              date: "Nov 20, 2025",
              amount: "+ £45.32",
              refund: true,
            },
            {
              order: "Order #GP002",
              date: "Nov 18, 2025",
              amount: "£67.89",
              refund: false,
            },
          ]