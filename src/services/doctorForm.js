import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getDrForm = (id) => {
  return axiosInstance({
    url: `/api/v1/forms/formsToHandle/${id}`,
    method: method.GET,
  });
};
