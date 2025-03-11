import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://api.fbi.gov";

const httpClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
