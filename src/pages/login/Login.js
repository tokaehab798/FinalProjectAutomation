import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import your CSS file
import { login } from "../../services/auth";
import { parseJwt, persistAuth } from "./loginHelpers";
import { AuthContext } from "../../context/AuthContext";
import * as authActionTypes from "../../constants/auth";
import { PATHS } from "../../constants/paths";
import { imageLoadingFailedHandler } from "../../helpers/image";

function LoginForm() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [userID, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleUserIDChange = (event) => {
    setUserID(event.target.value);
  };

  const handleUserPasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      id: userID,
      password: userPassword,
    };

    try {
      const response = await login(data);

      const {
        data: { token },
      } = response;

      const user = parseJwt(token);
      persistAuth(user, token);

      dispatch({
        type: authActionTypes.LOGIN,
        payload: { ...user, isAuthenticated: true },
      });

      navigate(PATHS.home);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="h-50 py-5" style={{ backgroundColor: "#eee" }}>
      <div className="container py-3 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-xl-8">
            <div className="card rounded-3 shadow-lg">
              <div className="row g-0">
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <div className="card-body p-md-4">
                    <div className="text-center mb-4">
                      <h2 className="display-5 text-uppercase mb-3">Welcome</h2>
                      <p className="lead">Login to continue</p>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="LoginID"
                          className={`form-label text-muted ${
                            userID.length ? "0" : "top__ position-relative"
                          }`}
                        >
                          ID
                        </label>
                        <input
                          type="text"
                          id="LoginID"
                          name="LoginID"
                          className="form-control shadow-none fw-light"
                          value={userID}
                          onChange={handleUserIDChange}
                          placeholder="Enter your ID"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="LoginPassword"
                          className={`form-label text-muted ${
                            userPassword.length
                              ? "0"
                              : "top__ position-relative"
                          }`}
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="LoginPassword"
                          name="LoginPassword"
                          className="form-control fw-light shadow-none"
                          value={userPassword}
                          onChange={handleUserPasswordChange}
                          placeholder="Enter your Password"
                        />
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          name="checkbox"
                          className="form-check-input shadow"
                          id="rememberMe"
                        />
                        <label
                          htmlFor="rememberMe"
                          className="form-check-label text-muted"
                        >
                          Remember Me
                        </label>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn btn-success btn-lg px-4 mb-2"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    src="images/login.jpg"
                    alt="Login Image"
                    className="img-fluid rounded"
                    onError={imageLoadingFailedHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
