import apiClient from "../apiClient/apiClient";

const getItems = async (itemCategory: string) => {
  const items = await apiClient.get(`${itemCategory}`);

  return items.data;
};

export default getItems;
