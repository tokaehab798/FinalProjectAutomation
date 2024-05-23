import { Upload, message } from "antd";

export const errorImage = "https://placehold.jp/150x150.png";

export const imageLoadingFailedHandler = (event) => {
  if (!event.target.src || event.target.src === "") {
    event.target.src = errorImage;
  }
  event.target.onerror = null;
};

const isImage = (file) => {
  return file.type.includes("image/");
};

export const beforUploadTypeFileIsImage = (file) => {
  if (!isImage(file)) {
    message.error(`${file.name} is not an image file`);
  }

  return isImage(file) || Upload.LIST_IGNORE;
};

export const isPDF = (file) => {
  return file.type === "application/pdf";
};

export const beforUploadTypeFileIsPdf = (file) => {
  if (!isPDF(file)) {
    message.error(`${file.name} is not an PDF file`);
  }

  return isPDF(file) || Upload.LIST_IGNORE;
};