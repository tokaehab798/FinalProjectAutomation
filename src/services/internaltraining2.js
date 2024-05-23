import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getInternalTrainingById = (id) => {
  return axiosInstance({
    url: `/api/v2/internalTrainings/${id}`,
    method: method.GET,
  });
};

export const deleteInternalById = (id) => {
  return axiosInstance({
    url: `/api/v2/internalTrainings/${id}`,
    method: method.DELETE,
  });
};
export const addInternalTraining = (values) => {
  const {
    title,
    description,
    startsFrom,
    endsAt,
    trainingPicture,
    
  } = values;

  const fileTrainingPicture = trainingPicture[0].response;
  const fileTrainingPictureInstructor = values["teachingInstructor.profilePicture"][0].response
  

  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  formData.append("startsFrom", startsFrom);
  formData.append("endsAt", endsAt);
  formData.append("whatYouWillLearn[0]", values["whatYouWillLearn[0]"]);
  formData.append("teachingInstructor[0][name]", values["teachingInstructor[0][name]"]);
  formData.append("teachingInstructor[0][title]", values["teachingInstructor[0][title]"]);
  formData.append("teachingInstructor[0][description]", values["teachingInstructor[0][description]"]);
  formData.append("teachingInstructor.profilePicture", fileTrainingPictureInstructor);
  formData.append("trainingPicture", fileTrainingPicture);
  

  // Make the request with formData
  return axiosInstance({
    url: `/api/v2/internalTrainings`,
    method: method.POST,
    data: formData,
  });
};
