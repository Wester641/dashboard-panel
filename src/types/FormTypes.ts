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

export type ProductPOST = {
  title: string;
  slug: string;
  description: string;
  short_description: string;
  sku: string;
  base_price: number;
  old_price: number;
  stock_state: "Available" | "OutOfStock" | "PreOrder";
  total_stock: number;
  min_order_quantity: number;
  meta_title: string;
  meta_description: string;
  category_id: number;
  brand_id: number;
  shop_id: number;
  is_active: boolean;
  is_featured: boolean;
  tag_ids: number[];
  image_ids: number[];
  shop_name: string | null;
  delivered_by: string;
  specifications: {
    [key: string]: string[];
  };
  colors: string[];
  tags_names: string[];
  rating: number | string;
  reviewCount: number | string;
};

export type ProductGET = {
  id: number;
  stock_state: "Available" | "OutOfStock" | "PreOrder";
  total_stock: number;
  rating: number | string;
  reviewCount: number | string;
  title: string;
  shop_name: string;
  price: number;
  old_price: string;
  new_price: string;
  image: string;
  delivered_by: string;
  discount: string;
  sku: string;
  description: string;
  specifications: {
    spec_images: string[];
  };
  colors: string[];
  tags: string[];
};
