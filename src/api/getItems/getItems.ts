import apiClient from "../apiClient/apiClient";
import { ApiData } from "../types";

const getItems = async (
  itemCategory: string,
  page: number,
): Promise<ApiData> => {
  const { data } = await apiClient.get(`${itemCategory}?page=${page}`);

  return data;
};

export default getItems;
