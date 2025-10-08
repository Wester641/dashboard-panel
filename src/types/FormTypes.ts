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
  type?: string;
  defaultValue?: string | null;
  multiline?: boolean;
}

// export interface Product {
//   title: string;
//   slug: string | null;
//   description: string | null;
//   short_description: string | null;
//   sku: string;
//   base_price: number;
//   old_price: number | null;
//   stock_state: string;
//   total_stock: number;
//   min_order_quantity: number;
//   meta_title: string | null;
//   meta_description: string | null;
//   category_id: number;
//   brand_id: number | null;
//   shop_id: number | null;
//   is_active: boolean;
//   is_featured: boolean;
//   tag_ids: number[];
//   image_ids: number[];
//   shop_name: string | null;
//   delivered_by: string;
//   specifications: Record<string, string[]>;
//   colors: string[];
//   tags_names: string[];
//   rating: string | null;
//   reviewCount: string | null;
// }

// "specifications": {
//   "additionalProp1": [
//     "https://res.cloudinary.com/dx2cycu19/image/upload//v1747591248/air1_jgyucc.jpg"
//   ],
//   "additionalProp2": [
//     "https://res.cloudinary.com/dx2cycu19/image/upload//v2744621248/air1_jgyucc.jpg"
//   ],
//   "additionalProp3": [
//     "https://res.cloudinary.com/dx2cycu19/image/upload//v3747591248/air1_jgyucc.jpg"
//   ]
// },

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

export type ProductCreateOnSupaBase = {
  colors: string[];
  created_at?: string;
  description: string;
  id?: number;
  image_url: { value: string }[];
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
  image_url: { value: string }[];
  old_price?: number;
  price: number;
  sku: number;
  stock_state?: "Available" | "OutOfStock" | "PreOrder";
  title: string;
  total_stock: number;
};
