import type { notificationsSection } from "@/lib/types/personalInfo";

export const notificationSections: notificationsSection[] = [
  {
    title: "Orders Updates",
    items: [
      { label: "Order Confirmation", checked: false },
      { label: "Order Shipped", checked: true },
      { label: "Delivery Updates", checked: false },
      { label: "Out-of-Stock Alerts", checked: true },
    ],
  },
  {
    title: "Communication",
    items: [
      { label: "Email Notifications", checked: false },
      { label: "SMS Notifications", checked: true },
      { label: "Push Notifications", checked: false },
    ],
  },
  {
    title: "Account Reminders",
    items: [
      { label: "Cart Reminders", checked: false },
      { label: "Payment & Billing Notifications", checked: true },
      { label: "Account Security Alerts", checked: false },
    ],
  },
];