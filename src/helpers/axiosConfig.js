import axios from "axios";

import {
  clearAuth,
  getAuthenticatedUser,
  getToken,
} from "../pages/login/loginHelpers";

export const baseURL = "https://grad-automation-project-2024.onrender.com";

export const axiosInstance = axios.create({
  baseURL,
});

// send token with request
axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getToken()}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//check status code in response
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 && getAuthenticatedUser()) {
      clearAuth();
      window.location.reload();
    } else {
      console.error(error);
    }

    return Promise.reject(error);
  }
);
