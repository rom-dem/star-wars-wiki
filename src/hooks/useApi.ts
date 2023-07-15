import apiClient from "@/api/apiClient/apiClient";

interface UseGetItemsStructure {
  getItems: () => {};
}

const useApi = (itemCategory: string): UseGetItemsStructure => {
  const getItems = async () => {
    const response = await apiClient.get(itemCategory);

    return response.data;
  };

  return { getItems };
};

export default useApi;
