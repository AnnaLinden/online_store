import axios from "axios";

const productionUrl = import.meta.env.VITE_STORE_API;

export const customFetch = axios.create({
  baseURL: productionUrl,
});
