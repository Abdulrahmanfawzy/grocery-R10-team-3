import CartItem from "@/components/common/checkout2/CartItem";

export type Cart = {
  id: number;
  status: string;
  is_empty: boolean;
  item_count: number;
  subtotal: number;
  tax: number;
  total: number;
  discount: number;
  created_at: string;
  updated_at: string;
  items: CartItems[];
};

export type CartItems = {
  id: number;
  quantity: number;
  unit_price: number;
  subtotal: number;
  discount_amount: number;
  meal: {
    id: number;
    title: string;
    slug: string;
    brand: string;
    price: number;
    discount_price: number;
    final_price: number;
    image_url: string;
    rating: number;
    size: string;
    stock_quantity: number;
    in_stock: boolean;
    is_available: boolean;
    category: {
      id: number;
      name: string;
    };
    subcategory: {
      id: number;
      name: string;
    };
  };
};

export type cartItem = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  inStock: string;
};
export type cartItemProps = {
  productInfo: cartItem;
};

export type cartInputs = {
  couponCode: number;
  address: string;
};

export type AddToCart = {
  meal_id: number;
  quantity: number;
};

export interface CategoryInfo {
  id: number;
  name: string;
}

export interface Meal {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  price: number;
  discount_price: number;
  final_price: number;
  rating: number;
  size: string;
  brand: string;
  stock_quantity: number;
  is_available: boolean;
  in_stock: boolean;
  category: CategoryInfo;
  subcategory: CategoryInfo;
}

export interface CartItem {
  id: number;
  meal: Meal;
  quantity: number;
  unit_price: number;
  discount_amount: number;
  subtotal: number;
}

export interface CartData {
  id: number;
  status: string;
  items: CartItem[];
  item_count: number;
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  is_empty: boolean;
  created_at: string;
  updated_at: string;
}

export interface AddToCartResponse {
  success: boolean;
  message: string;
  data: CartData;
}
export type CartItemProps = {
  product: CartItems;
};
