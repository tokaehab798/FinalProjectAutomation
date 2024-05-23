import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file
import { NAVBAR_ROUTES } from "../../constants/routes";
import { PATHS } from "../../constants/paths";
import { clearAuth } from "../../pages/login/loginHelpers";
import { AuthContext } from "../../context/AuthContext";
import * as authActionTypes from "../../constants/auth";
import { imageLoadingFailedHandler } from "../../helpers/image";

function Navbar() {
  const location = useLocation(); // Get the current location using useLocation()
  const navigate = useNavigate();

  const {
    user: { role },
    dispatch,
  } = useContext(AuthContext);

  const userLoggedOutHandler = () => {
    clearAuth();
    dispatch({ type: authActionTypes.LOGOUT });
    navigate(PATHS.login);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-4"
      id="navbar-example2"
    >
      <div className="container">
        <div className="col-auto me-auto">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src="/images/must logo - no background.png" // Update the path to your logo
              alt="image"
              className="navbar-brand"
              style={{ width: "70px", height: "60px" }}
              onError={imageLoadingFailedHandler}
            />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {NAVBAR_ROUTES.filter((route) => route.roles?.includes(role)).map(
              (route, i) => (
                <li className="nav-item" key={i}>
                  <NavLink
                    className={`nav-link fs-6 ms-2 ${
                      location.pathname === route.path
                        ? "active text-white bg-success rounded"
                        : ""
                    }`}
                    to={route.path}
                  >
                    {route.label}
                  </NavLink>
                </li>
              )
            )}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Training
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/internaltraining">
                    Internal Training
                  </a>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to={PATHS.externaltraining2}
                  >
                    External Training
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <button
              className="btn btn-outline-success shadow btn text-center"
              onClick={userLoggedOutHandler}
            >
              Log Out
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
