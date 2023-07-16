import { useQuery } from "react-query";
import getItems from "@/api/getItems/getItems";

const getItemsQuery = "getItemsQuery";

const useApi = (itemCategory: string) => {
  const { data, error, isError, isLoading } = useQuery(
    [getItemsQuery, itemCategory],
    () => getItems(itemCategory),
  );

  return { data, error, isError, isLoading };
};

export default useApi;
