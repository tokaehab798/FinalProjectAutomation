import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getCompetitionById = (id) => {
  return axiosInstance({
    url: `/api/v2/competitions/${id}`,
    method: method.GET,
  });
};

export const deleteCompetitionById = (id) => {
  return axiosInstance({
    url: `/api/v2/competitions/${id}`,
    method: method.DELETE,
  });
};

export const addCompetitionForm = (values) => {
  const {
    title,
    description,
    link,
    competitionPic,
  } = values;

  const filecompetitionPic = competitionPic[0].response;
  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  formData.append("link", link);
  formData.append("competitionPic", filecompetitionPic);


  // Make the request with formData
  return axiosInstance({
    url: `/api/v2/competitions`,
    method: method.POST,
    data: formData,
  });
};
