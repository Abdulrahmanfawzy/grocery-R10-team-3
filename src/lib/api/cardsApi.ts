import api from "./checkoutApi";
export interface SavedCard {
  id: string;
  brand: string;
  last4: string;
  exp_month: number;
  exp_year: number;
}

export async function getCards(): Promise<SavedCard[]> {
  const response = await api.get("/cards");
  const payload = response.data;

  const raw: any[] = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.data)
      ? payload.data
      : [];

  return raw.map((item) => ({
    id: item.id,
    brand: item.card?.brand ?? "unknown",
    last4: item.card?.last4 ?? "****",
    exp_month: item.card?.exp_month ?? 0,
    exp_year: item.card?.exp_year ?? 0,
  }));
}

export async function createSetupIntent(): Promise<{ client_secret: string }> {
  const response = await api.post("/setup-intent");
  const payload = response.data;

  console.log("setup-intent response:", payload);

  const clientSecret =
    payload?.client_secret ||
    payload?.data?.client_secret ||
    payload?.data?.clientSecret ||
    payload?.clientSecret;

  if (!clientSecret) {
    throw new Error(
      `client_secret not found in response: ${JSON.stringify(payload)}`,
    );
  }

  return { client_secret: clientSecret };
}

export async function deleteCard(paymentMethodId: string): Promise<void> {
  await api.delete(`/cards/${paymentMethodId}`);
}
