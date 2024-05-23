import { createContext, useReducer } from "react";
import * as authActionTypes from "../constants/auth";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN: {
      return action.payload;
    }
    case authActionTypes.LOGOUT: {
      return { isAuthenticated: false };
    }
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, {});

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
