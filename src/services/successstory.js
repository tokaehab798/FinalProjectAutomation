import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getSuccessStoryById = (id) => {
  return axiosInstance({
    url: `/api/v2/successStories/${id}`,
    method: method.GET,
  });
};

export const deleteSuccessStoryById = (id) => {
  return axiosInstance({
    url: `/api/v2/successStories/${id}`,
    method: method.DELETE,
  });
};

export const addSuccessStory = (values) => {
  const {
    title,
    description,
    mainPicture,
    additionalPictures,
    teamMembersPictures,
  } = values;

  const fileMainPicture = mainPicture[0].response;
  const fileAdditionalPictures = additionalPictures[0].response;
  const fileTeamMembersPictures = teamMembersPictures[0].response;

  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  formData.append("mainPicture", fileMainPicture);
  formData.append("additionalPictures", fileAdditionalPictures);
  formData.append("teamMembers[0][name]", values["teamMembers[0][name]"]);
  formData.append("teamMembersPictures", fileTeamMembersPictures);

  // Make the request with formData
  return axiosInstance({
    url: `/api/v2/successStories`,
    method: "POST",
    data: formData,
  });
};
