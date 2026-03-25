export interface CategoryDetails {
  id: number;
  name: string;
  slug?: string;
  description?: string;
  image?: string | null;
  is_active?: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface SubCategory {
  id: number;
  name: string;
  slug: string;
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  user_name: string;
}

export interface Product {
  id: number;
  title: string;
  name?: string; // keep for backwards compat
  slug: string;
  description: string;
  category_id?: number;
  category?: Category | string;
  category_details?: CategoryDetails | string;
  subcategory?: SubCategory | string;
  price: number;
  discount_price: number;
  final_price: number;
  old_price?: number | string;
  has_offer: boolean;
  offer_title: string;
  image_url: string;
  image?: string; // keep for backwards compat
  rating: number;
  rating_count: number;
  size: string;
  brand: string;
  badge?: string;
  unit?: string;
  includes: string;
  how_to_use: string;
  features: string;
  expiry_date: string;
  days_until_expiry: number;
  is_expired: boolean;
  stock_quantity: number;
  in_stock: boolean;
  sold_count: number;
  is_featured: boolean;
  is_available: boolean;
  available_date: string;
  reviews: Review[];
  created_at: string;
  updated_at: string;
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

export interface ProductResponse {
  success: boolean;
  message: string;
  data: Product;
}

