export interface CategoryDetails {
  id: number;
  name: string;
  slug?: string;
  description?: string;
  image?: string | null;
  is_active?: boolean;
}

export interface Product {
  id: number;
  // The API returns "title", not "name"
  title: string;
  name?: string; // keep for backwards compat
  category_id?: number;
  category?: CategoryDetails | string;
  category_details?: CategoryDetails | string | any;
  price: number | string;
  // The API returns "discount_price", not "old_price"
  discount_price?: number | string;
  old_price?: number | string;
  image?: string;
  rating?: number | string;
  badge?: string;
  offer_title?: string;
  unit?: string;
  size?: string;
  brand?: string;
  stock_quantity?: number;
  sold_count?: number;
  is_available?: boolean;
}

export interface BestSellsResponse {
  success: boolean;
  message: string;
  data: Product[];
}

export interface HotDealsResponse {
  success: boolean;
  message: string;
  data: Product[];
}

export interface NewProductsResponse {
  success: boolean;
  message: string;
  data: Product[];
}
