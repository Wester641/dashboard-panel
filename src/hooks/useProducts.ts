import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosInstance.get("/products");
      return response.data;
    },
  });
};
