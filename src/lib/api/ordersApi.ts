import api from "./checkoutApi";

export interface OrderPayload {
  payment_method: "card" | "cash_on_delivery";
  delivery_type: "delivery" | "pickup";
  address_id: number;
  amount: number;
  payment_method_id?: string;
}

export async function storeOrder(payload: OrderPayload) {
  const response = await api.post("/orders", payload);
  return response.data;
}

export async function getOrderTrack(orderId: number) {
  const response = await api.get(`/orders/${orderId}/track`);
  return response.data;
}

export async function getOrderReceipt(orderId: number) {
  const response = await api.get(`/orders/${orderId}/receipt`);
  return response.data;
}

export interface FeedbackPayload {
  order_id: number;
  rating: number;
  feedback: string;
}

export async function submitOrderFeedback(payload: FeedbackPayload) {
  const response = await api.post("/orders/feedback", payload);
  return response.data;
}
