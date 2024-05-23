import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getAllForms = () => {
  return axiosInstance({
    url: "/api/v1/forms",
    method: method.GET,
  });
};
