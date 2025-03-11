import { AxiosError, AxiosResponse } from "axios";
import httpClient from "../../axios/axios";
import { GetWantedParams, WantedResultSet } from "./types";

export const getWanted = ({
  page,
  pageSize,
  title = "",
}: GetWantedParams): Promise<WantedResultSet> => {
  return new Promise((resolve, reject) => {
    const config = {
      method: "GET",
      url: "/@wanted",
      params: {
        page,
        pageSize,
        title: title.length > 0 ? title : null,
      },
    };
    httpClient(config)
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};
