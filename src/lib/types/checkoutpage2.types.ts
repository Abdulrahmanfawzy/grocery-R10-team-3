export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
  inStock: boolean;
}

export interface OrderSummary {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}
