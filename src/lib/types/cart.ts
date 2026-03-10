export interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  outOfStock: boolean;
  image: string;
}

export interface CartItemProps {
  item: CartItemType;
}
export interface OrderSummaryProps {
  cartItems?: CartItemType[];
}
