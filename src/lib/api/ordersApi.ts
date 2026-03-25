import axiosInstance from "@/lib/axiosInstance";

export interface CreateOrderPayload {
  payment_method: "card" | "cash_on_delivery";
  delivery_type: "delivery" | "pickup";
  address_id: number;
  amount: string;
  payment_method_id?: string;
  special_note_id?: string;
  notes?: string;
  schedule_delivery?: string;
  delivery_speed?: string;
  estimated_delivery_time?: string;
  items?: Array<{
    product_id: number;
    quantity: number;
    price?: number;
  }>;
}

export interface OrderResponse {
  data: {
    id: number;
    [key: string]: unknown;
  };
}

export const createOrder = async (
  payload: CreateOrderPayload,
): Promise<OrderResponse> => {
  const formData = new FormData();
  formData.append("payment_method", payload.payment_method);
  formData.append("delivery_type", payload.delivery_type);
  formData.append("address_id", String(payload.address_id));
  formData.append("amount", payload.amount);
  if (payload.payment_method === "card" && payload.payment_method_id) {
    formData.append("payment_method_id", payload.payment_method_id);
  }
  if (payload.special_note_id)
    formData.append("special_note_id", payload.special_note_id);
  if (payload.notes) formData.append("notes", payload.notes);
  if (payload.schedule_delivery)
    formData.append("schedule_delivery", payload.schedule_delivery);
  if (payload.delivery_speed)
    formData.append("delivery_speed", payload.delivery_speed);
  if (payload.estimated_delivery_time)
    formData.append("estimated_delivery_time", payload.estimated_delivery_time);

  if (payload.items && payload.items.length > 0) {
    payload.items.forEach((item, index) => {
      formData.append(`items[${index}][product_id]`, String(item.product_id));
      formData.append(`items[${index}][quantity]`, String(item.quantity));
      if (item.price !== undefined) {
        formData.append(`items[${index}][price]`, String(item.price));
      }
    });
  }

  const response = await axiosInstance.post<OrderResponse>(
    "/api/orders",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return response.data;
};

export interface TrackOrderResponse {
  data?: {
    status?: string;
    estimated_delivery?: string;
    steps?: Array<{ label?: string; status?: string }>;
    [key: string]: unknown;
  };
}

export const trackOrder = async (): Promise<TrackOrderResponse["data"]> => {
  const response =
    await axiosInstance.get<TrackOrderResponse>("/api/orders/track");
  return response.data?.data ?? response.data;
};

export interface OrderDetailsResponse {
  data: {
    id: number;
    status?: string;
    driver?: { name?: string; phone?: string; image?: string };
    [key: string]: unknown;
  };
}

export const getOrderDetails = async (
  orderId: number,
): Promise<OrderDetailsResponse["data"]> => {
  const response = await axiosInstance.get<OrderDetailsResponse>(
    `/api/orders/${orderId}`,
  );
  return response.data?.data ?? response.data;
};

export interface ReceiptResponse {
  data?: {
    receipt_url?: string;
    order_id?: number;
    items?: Array<{
      name: string;
      quantity: number;
      price: number;
    }>;
    total?: number;
    address?: string;
    [key: string]: unknown;
  };
}

export const getReceipt = async (
  orderId: number,
): Promise<ReceiptResponse["data"]> => {
  const response = await axiosInstance.get<ReceiptResponse>(
    `/api/orders/${orderId}/receipt`,
  );
  return response.data?.data ?? response.data;
};

export interface SubmitFeedbackPayload {
  order_id: number;
  rating: number;
  feedback: string;
}

export interface SubmitFeedbackResponse {
  data?: {
    success?: boolean;
    message?: string;
    [key: string]: unknown;
  };
}

export const submitFeedback = async (
  payload: SubmitFeedbackPayload,
): Promise<SubmitFeedbackResponse["data"]> => {
  const response = await axiosInstance.post<SubmitFeedbackResponse>(
    "/api/orders/feedback",
    payload,
  );
  return response.data?.data ?? response.data;
};
