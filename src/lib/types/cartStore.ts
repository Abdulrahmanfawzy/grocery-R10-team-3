export interface CartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  outOfStock: boolean;
  image: string;
}

export interface CartState {
  items: CartProduct[];
}
