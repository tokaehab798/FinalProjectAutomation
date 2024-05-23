import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const login = (data) => {
  return axiosInstance({
    url: "/login",
    method: method.POST,
    data,
  });
};
