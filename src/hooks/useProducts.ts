import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "../supabase/supabase-client";
import type { ProductCreateOnSupaBase, ProductGET } from "../types/FormTypes";

export const useProducts = () => {
  return useQuery<ProductGET[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;
      return data as ProductGET[];
    },
  });
};

export const useProduct = (id: number) => {
  return useQuery<ProductGET>({
    queryKey: ["products", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data as ProductGET;
    },
    enabled: !!id,
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (product: ProductCreateOnSupaBase) => {
      const { data, error } = await supabase
        .from("products")
        .insert([product])
        .select();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
