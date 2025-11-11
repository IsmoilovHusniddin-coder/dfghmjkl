import { useAxios } from "../useAxios";
import { useQuery } from "@tanstack/react-query";

interface QueryType {
  url: string;
  pathname: string;
}

export const useQueryHandler = ({ url, pathname }: QueryType) => {
  const axios = useAxios();
  return useQuery({ queryKey: [pathname], queryFn: () => axios({ url: url }) });
};
