import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getExternalTrainingById = (id) => {
  return axiosInstance({
    url: `/api/v2/externalTrainings/${id}`,
    method: method.GET,
  });
};

export const deleteExternalById = (id) => {
  return axiosInstance({
    url: `/api/v2/externalTrainings/${id}`,
    method: method.DELETE,
  });
};


export const addExternalForm = (values) => {
  const {
    title,
    description,
    link,
    trainingPic,
    startsFrom, // assuming startsFrom comes from the form
    endsAt,     // assuming endsAt comes from the form
  } = values;

  const filetrainingPic = trainingPic[0].response;
  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  formData.append("link", link);
  formData.append("trainingPic", filetrainingPic);
  formData.append("startsFrom", startsFrom); // append startsFrom
  formData.append("endsAt", endsAt);         // append endsAt

  // Make the request with formData
  return axiosInstance({
    url: `/api/v2/externalTrainings`,
    method: method.POST,
    data: formData,
  });
};
