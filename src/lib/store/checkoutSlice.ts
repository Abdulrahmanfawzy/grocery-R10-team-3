import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CheckoutContact {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  createAccount?: boolean;
}

export interface CheckoutDelivery {
  fulfilmentMethod: "delivery" | "pickup";
  address: string;
  city: string;
  provenance: string;
  postalCode: string;
  scheduleDelivery?: "now" | "later";
  deliverySpeed?: "standard" | "priority";
  estimatedArrival?: string;
  addressId?: number | null;
}

export interface CheckoutNotes {
  specialNoteId?: number | null;
  notes: string;
}

export interface CheckoutPayment {
  paymentMethod: "card" | "cash_on_delivery";
  paymentMethodId?: string | null;
  billingSameAsDelivery: boolean;
}

export interface CheckoutFeedback {
  rating: number;
  feedback: string;
}

export interface CheckoutState {
  contact: CheckoutContact | null;
  delivery: CheckoutDelivery | null;
  notes: CheckoutNotes | null;
  payment: CheckoutPayment | null;
  feedback: CheckoutFeedback | null;
  lastOrderId: number | null;
}

const initialState: CheckoutState = {
  contact: null,
  delivery: null,
  notes: null,
  payment: null,
  feedback: null,
  lastOrderId: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setContact: (state, action: PayloadAction<CheckoutContact>) => {
      state.contact = action.payload;
    },
    setDelivery: (state, action: PayloadAction<CheckoutDelivery>) => {
      state.delivery = action.payload;
    },
    setNotes: (state, action: PayloadAction<CheckoutNotes>) => {
      state.notes = action.payload;
    },
    setPayment: (state, action: PayloadAction<CheckoutPayment>) => {
      state.payment = action.payload;
    },
    setLastOrderId: (state, action: PayloadAction<number | null>) => {
      state.lastOrderId = action.payload;
    },
    setDeliveryAddressId: (state, action: PayloadAction<number | null>) => {
      if (state.delivery) {
        state.delivery.addressId = action.payload;
      }
    },
    setFeedback: (state, action: PayloadAction<CheckoutFeedback>) => {
      state.feedback = action.payload;
    },
    resetCheckout: () => initialState,
  },
});

export const {
  setContact,
  setDelivery,
  setNotes,
  setPayment,
  setFeedback,
  setLastOrderId,
  setDeliveryAddressId,
  resetCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
