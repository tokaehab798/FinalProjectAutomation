import { Suspense, useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as authActionTypes from "./constants/auth";
import { ROUTES } from "./constants/routes";
import WithAuth from "./hoc/withAuth/WithAuth";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import { getAuthenticatedUser } from "./pages/login/loginHelpers";
import { AuthContext } from "./context/AuthContext";
import { PATHS } from "./constants/paths";
import LoginForm from "./pages/login/Login";

const App = () => {
  const {
    user: { isAuthenticated, role },
    dispatch,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticatedUser = getAuthenticatedUser();

    if (authenticatedUser) {
      dispatch({
        type: authActionTypes.LOGIN,
        payload: {
          ...JSON.parse(authenticatedUser),
          isAuthenticated: true,
        },
      });
    } else {
      dispatch({ type: authActionTypes.LOGOUT });
      navigate(PATHS.login);
    }
  }, [dispatch, navigate]);

  const returnWhenWrongPath = () => {
    switch (true) {
      case isAuthenticated: {
        return <Navigate to={PATHS.notfound} />;
      }

      default:
        return <></>;
    }
  };

  return (
    <>
      {isAuthenticated && <Navbar />}

      <Suspense fallback={<span>... loading</span>}>
        <Routes>
          {isAuthenticated ? (
            ROUTES.filter((route) => route.roles?.includes(role)).map(
              (route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <WithAuth
                      WrappedComponent={route.page}
                      roles={route.roles}
                    />
                  }
                />
              )
            )
          ) : (
            <Route path={PATHS.login} element={<LoginForm />} />
          )}

          <Route path="*" element={returnWhenWrongPath()} />
        </Routes>
      </Suspense>

      {isAuthenticated && <Footer />}
    </>
  );
};

export default App;
