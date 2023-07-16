import { ApiData } from "@/api/types";
import apiClient from "../api/apiClient/apiClient";

const useApi = (itemCategory: string) => {
  const getItemsData = async (): Promise<ApiData> => {
    const { data } = await apiClient.get(itemCategory);

    return data;
  };

  return { getItemsData };
};

export default useApi;
