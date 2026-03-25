import { errorToast, successToast } from "@/components/Toast/Toaster";
import axiosInstance from "@/lib/Axios/axiosInstance";
import type { NotificationsInterface } from "@/types/profile/personalInfo/Notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const notificationData = [
  {
    title: "Order & Delivery Updates",
    key: "order_delivery_updates",
    items: [
      { label: "Order Confirmation", name: "order_confirmation" },
      { label: "Order Shipped", name: "order_shipped" },
      { label: "Delivery Updates", name: "delivery_updates" },
      { label: "Out-of-Stock Alerts", name: "out_of_stock_alerts" },
    ],
  },
  {
    title: "Deals & Promotions",
    key: "deals_promotions",
    items: [
      { label: "Weekly Discounts", name: "weekly_discounts" },
      { label: "Exclusive Member Offers", name: "exclusive_member_offers" },
      { label: "Seasonal Campaigns", name: "seasonal_campaigns" },
    ],
  },
  {
    title: "Account Reminders",
    key: "account_reminders",
    items: [
      { label: "Cart Reminders", name: "cart_reminders" },
      { label: "Payment & Billing", name: "payment_billing" },
    ],
  },
  {
    title: "Channels",
    key: "channels",
    items: [
      { label: "Email Notifications", name: "email_notifications" },
      { label: "Push Notifications", name: "push_notifications" },
      { label: "SMS Notifications", name: "sms_notifications" },
    ],
  },
] as const;

export type NotificationPayload = {
  order_confirmation: 0 | 1;
  order_shipped: 0 | 1;
  delivery_updates: 0 | 1;
  out_of_stock_alerts: 0 | 1;
  weekly_discounts: 0 | 1;
  exclusive_member_offers: 0 | 1;
  seasonal_campaigns: 0 | 1;
  cart_reminders: 0 | 1;
  payment_billing: 0 | 1;
  email_notifications: 0 | 1;
  push_notifications: 0 | 1;
  sms_notifications: 0 | 1;
};

export const toFormValues = (
  data: NotificationsInterface,
): NotificationPayload => ({
  // Order & Delivery
  order_confirmation: data.order_delivery_updates.settings.order_confirmation
    ? 1
    : 0,
  order_shipped: data.order_delivery_updates.settings.order_shipped ? 1 : 0,
  delivery_updates: data.order_delivery_updates.settings.delivery_updates
    ? 1
    : 0,
  out_of_stock_alerts: data.order_delivery_updates.settings.out_of_stock_alerts
    ? 1
    : 0,

  // Deals & Promotions
  weekly_discounts: data.deals_promotions.settings.weekly_discounts ? 1 : 0,
  exclusive_member_offers: data.deals_promotions.settings
    .exclusive_member_offers
    ? 1
    : 0,
  seasonal_campaigns: data.deals_promotions.settings.seasonal_campaigns ? 1 : 0,

  // Account Reminders
  cart_reminders: data.account_reminders.settings.cart_reminders ? 1 : 0,
  payment_billing: data.account_reminders.settings.payment_billing ? 1 : 0,

  // Channels
  email_notifications: data.channels.settings.email_notifications ? 1 : 0,
  push_notifications: data.channels.settings.push_notifications ? 1 : 0,
  sms_notifications: data.channels.settings.sms_notifications ? 1 : 0,
});

async function getNotifications() {
  const response = await axiosInstance.get("/api/notification-settings");
  
  return response.data;
}

export function useGetNotifications() {
  return useQuery({
    queryKey: ["get-notifications"],
    queryFn: getNotifications,
    retry: 2
  });
}

async function updateNotifications(params: NotificationPayload) {
  const response = await axiosInstance.put(
    "/api/notification-settings",
    params,
  );
  return response.data;
}

export function useUpdateNotifications() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NotificationPayload) => updateNotifications(data),
    mutationKey: ["update-notifications"],
    onSuccess: () => {
      successToast("Notifications Updated");
      queryClient.invalidateQueries({ queryKey: ["get-notifications"] });
    },
    onError: () => errorToast("Failed to update notifications"),
  });
}
