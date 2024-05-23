import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getAllProjects = () => {
  return axiosInstance({
    url: "/api/v2/projects",
    method: method.GET,
  });
};
