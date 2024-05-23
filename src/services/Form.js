import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const createForm = (data) => {
  return axiosInstance({
    url: `/api/v1/forms/createform`,
    method: method.POST,
    data,
  });
};

export const forwardForm = (formId, data) => {
  return axiosInstance({
    url: `/api/v1/forms/forward/${formId}`,
    method: method.PUT,
    data,
  });
};
