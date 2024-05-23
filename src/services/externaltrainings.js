import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getAllExternalTrainings = () => {
  return axiosInstance({
    url: "/api/v2/externalTrainings",
    method: method.GET,
  });
};
