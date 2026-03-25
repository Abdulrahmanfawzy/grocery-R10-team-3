import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAddresses,
  createAddress,
  type CreateAddressPayload,
} from "./addressesApi";
import { getSavedCards } from "./cardsApi";
import {
  createOrder,
  trackOrder,
  getOrderDetails,
  getReceipt,
  submitFeedback,
  type CreateOrderPayload,
} from "./ordersApi";

export const addressesQueryKey = ["addresses"] as const;

export function useAddressesQuery() {
  return useQuery({
    queryKey: addressesQueryKey,
    queryFn: getAddresses,
  });
}

export function useCreateAddressMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateAddressPayload) => createAddress(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: addressesQueryKey });
    },
  });
}

export const cardsQueryKey = ["cards"] as const;

export function useSavedCardsQuery() {
  return useQuery({
    queryKey: cardsQueryKey,
    queryFn: getSavedCards,
  });
}

export const ordersTrackQueryKey = ["orders", "track"] as const;
export const orderDetailsQueryKey = (id: number) => ["orders", id] as const;

export function useCreateOrderMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateOrderPayload) => createOrder(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ordersTrackQueryKey });
      const orderId = data?.data?.id;
      if (orderId) {
        queryClient.invalidateQueries({
          queryKey: orderDetailsQueryKey(orderId),
        });
      }
    },
  });
}

export function useTrackOrderQuery(enabled: boolean) {
  return useQuery({
    queryKey: ordersTrackQueryKey,
    queryFn: trackOrder,
    enabled,
  });
}

export function useOrderDetailsQuery(orderId: number | null, enabled: boolean) {
  return useQuery({
    queryKey: orderDetailsQueryKey(orderId ?? 0),
    queryFn: () => getOrderDetails(orderId!),
    enabled: enabled && !!orderId && orderId > 0,
  });
}

export const receiptQueryKey = (id: number) =>
  ["orders", "receipt", id] as const;

export function useReceiptQuery(orderId: number | null, enabled: boolean) {
  return useQuery({
    queryKey: receiptQueryKey(orderId ?? 0),
    queryFn: () => getReceipt(orderId!),
    enabled: enabled && !!orderId && orderId > 0,
  });
}

export function useSubmitFeedbackMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: submitFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ordersTrackQueryKey });
    },
  });
}
