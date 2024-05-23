import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getProjectById = (id) => {
  return axiosInstance({
    url: `/api/v2/projects/${id}`,
    method: method.GET,
  });
};

export const deleteProjectById = (id) => {
  return axiosInstance({
    url: `/api/v2/projects/${id}`,
    method: method.DELETE,
  });
};

export const addProject = (values) => {
  const { title, description, mainPic, additionalPictures, teamMembers } =
    values;

  const fileMainPicture = mainPic[0].response;
  const fileAdditionalPictures = additionalPictures[0].response;
  const fileTeamMembersPictures = teamMembers[0].response;

  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  formData.append("mainPic", fileMainPicture);
  formData.append("additionalPictures", fileAdditionalPictures);
  formData.append("teamMembers[0][name]", values["teamMembers[0][name]"]);
  formData.append("teamMembers", fileTeamMembersPictures);

  // Make the request with formData
  return axiosInstance({
    url: `/api/v2/projects`,
    method: "POST",
    data: formData,
  });
};
