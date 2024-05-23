import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AppLayout from "../../components/appLayout/AppLayout";
import { PATHS } from "../../constants/paths";
import { AuthContext } from "../../context/AuthContext";

const WithAuth = ({ WrappedComponent, roles }) => {
  const {
    user: { role },
  } = useContext(AuthContext);

  if (roles.includes(role) && WrappedComponent) {
    return <AppLayout wrappedComponent={WrappedComponent} />;
  } else {
    return <Navigate to={PATHS.notfound} />;
  }
};

export default WithAuth;
