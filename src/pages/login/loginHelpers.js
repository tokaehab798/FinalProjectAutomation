export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const persistAuth = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const getAuthenticatedUser = () => {
  return localStorage.getItem("user");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

// convert JWT
export const parseJwt = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};
