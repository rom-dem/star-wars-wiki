import apiClient from "../apiClient/apiClient";
import { ApiEndpointsStructure } from "../types";

const getItems = async (itemCategory: string) => {
  const items = await apiClient.get(`${itemCategory}`);

  return items.data;
};

export default getItems;
