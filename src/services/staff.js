import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getAllStaff = () => {
  return axiosInstance({
    url: "/api/v2/staff",
    method: method.GET,
  });
};
