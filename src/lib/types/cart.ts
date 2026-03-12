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
  onUpdateQuantity?: (delta: number) => void;
}
export interface OrderSummaryProps {
  cartItems?: CartItemType[];
}
