export type Inputs = {
  name: string;
  price: string;
};

export interface InputProps {
  register: any;
  errors: any;
  label: string;
  required?: boolean;
  name: string;
}

export interface Product {
  title: string; 
  slug: string | null;
  description: string | null;
  short_description: string | null;
  sku: string; 
  base_price: number;
  old_price: number | null;
  stock_state: string;
  total_stock: number; 
  min_order_quantity: number;
  meta_title: string | null;
  meta_description: string | null;
  category_id: number;
  brand_id: number | null;
  shop_id: number | null;
  is_active: boolean;
  is_featured: boolean;
  tag_ids: number[];
  image_ids: number[];
  shop_name: string | null;
  delivered_by: string;
  specifications: Record<string, string[]>;
  colors: string[];
  tags_names: string[];
  rating: string | null;
  reviewCount: string | null;
}










