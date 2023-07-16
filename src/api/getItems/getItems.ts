import apiClient from "../apiClient/apiClient";
import { ApiData } from "../types";

const getItems = async (itemCategory: string): Promise<ApiData> => {
  const { data } = await apiClient.get(itemCategory);

  return data;
};

export default getItems;
