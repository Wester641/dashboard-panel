import type { FieldErrors, UseFormRegister } from "react-hook-form";

export interface InputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  label: string;
  required?: boolean;
  name: string;
  type?: string;
  defaultValue?: string | null;
  multiline?: boolean;
}

export type StrictSpecificationsType = {
  additionalProp1?: string[];
  additionalProp2?: string[];
  additionalProp3?: string[];
  [key: string]: string[] | undefined;
};

export type ProductPOST = {
  // required fields
  title: string;
  sku: string;
  category_id: number;
  base_price: number;

  // optional fields
  description?: string;
  short_description?: string;
  slug?: string;
  old_price?: number;
  stock_state?: "Available" | "OutOfStock" | "PreOrder";
  total_stock?: number;
  min_order_quantity?: number;
  meta_title?: string;
  meta_description?: string;
  brand_id?: number;
  shop_id?: number;
  is_active?: boolean;
  is_featured?: boolean;
  shop_name?: string | null;
  delivered_by?: string;
  colors?: string[];
  rating?: number | string;
  reviewCount?: number | string;
  specifications?: StrictSpecificationsType;
  spec_prop1?: string;
  spec_prop2?: string;
  spec_prop3?: string;
};

export type ProductFormData = {
  colors: string[];
  created_at?: string;
  description: string;
  id?: number;
  image_url: { value: string }[]; // Для формы
  old_price?: number;
  price: number;
  sku: number;
  stock_state: "Available" | "OutOfStock" | "PreOrder";
  title: string;
  total_stock: number;
};

export type ProductCreateOnSupaBase = {
  colors: string[];
  created_at?: string;
  description: string;
  id?: number;
  image_url: string[];
  old_price?: number;
  price: number;
  sku: number;
  stock_state?: "Available" | "OutOfStock" | "PreOrder";
  title: string;
  total_stock: number;
};

export type ProductGET = {
  colors: string[];
  created_at?: string;
  description: string;
  id?: number;
  image_url: string[];
  old_price?: number;
  price: number;
  sku: number;
  stock_state?: "Available" | "OutOfStock" | "PreOrder";
  title: string;
  total_stock: number;
};
