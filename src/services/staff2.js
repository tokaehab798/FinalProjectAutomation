import * as method from "../constants/requestMethods";
import { axiosInstance } from "../helpers/axiosConfig";

export const getStaffById = (id) => {
  return axiosInstance({
    url: `/api/v2/staff/${id}`,
    method: method.GET,
  });
};

export const editStaffProfile = (id, values) => {
  const { profilePicture, researchPapers, brief } = values;

  const fileResearchPaper = researchPapers[0].response;
  const fileProfilePictures = profilePicture[0].response;

  const formData = new FormData();

  console.log(values["subjectHistory[0][subjectCode]"]);

  formData.append("brief", brief);
  formData.append(
    "subjectHistory[0][subjectCode]",
    values["subjectHistory[0][subjectCode]"]
  );
  formData.append(
    "subjectHistory[0][subjectName]",
    values["subjectHistory[0][subjectName]"]
  );

  formData.append("researchPapers", fileResearchPaper);
  formData.append("profilePicture", fileProfilePictures);

  return axiosInstance({
    url: `/api/v2/staff/${id}`,
    method: method.PUT,
    data: formData,
  });
};
