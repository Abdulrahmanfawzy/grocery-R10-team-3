import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAddresses,
  createAddress,
  type CreateAddressPayload,
} from "./addressesApi";
import { getCards as getSavedCards } from "./cardsApi";
import {
  storeOrder,
  type OrderPayload,
  getOrderTrack,
  getOrderReceipt,
  submitOrderFeedback,
  type FeedbackPayload,
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

export function useCreateOrderMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: OrderPayload) => storeOrder(payload),
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
export const orderDetailsQueryKey = (id: number) => ["orders", id] as const;

export function useOrderDetailsQuery(orderId: number | null, enabled: boolean) {
  return useQuery({
    queryKey: orderDetailsQueryKey(orderId ?? 0),
    queryFn: () => orderId,
    enabled: enabled && !!orderId && orderId > 0,
  });
}

export function useTrackOrderQuery(orderId: number | null, enabled: boolean) {
  return useQuery({
    queryKey: ["orders", "track", orderId],
    queryFn: () => (orderId ? getOrderTrack(orderId) : null),
    enabled: enabled && !!orderId,
  });
}

export function useReceiptQuery(orderId: number | null, enabled: boolean) {
  return useQuery({
    queryKey: ["orders", "receipt", orderId],
    queryFn: () => (orderId ? getOrderReceipt(orderId) : null),
    enabled: enabled && !!orderId,
  });
}

export function useSubmitFeedbackMutation() {
  return useMutation({
    mutationFn: (payload: FeedbackPayload) => submitOrderFeedback(payload),
  });
}
