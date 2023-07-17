import { useQuery } from "react-query";
import getItems from "@/api/getItems/getItems";

const getItemsQuery = "getItemsQuery";

const useApi = (itemCategory: string, page: number) => {
  const { data, error, isError, isLoading } = useQuery(
    [getItemsQuery, itemCategory, page],
    () => getItems(itemCategory, page),
  );

  return { data, error, isError, isLoading };
};

export default useApi;
