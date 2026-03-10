export interface CartItem {
  id: number;
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  total_price: number;
}

export interface CartResponse {
  items: CartItem[];
  total_amount: number;
  item_count: number;
}

export interface AddToCartRequest {
  meal_id: number;
  quantity: number;
}

export interface UpdateCartItemRequest {
  quantity: number;
}
