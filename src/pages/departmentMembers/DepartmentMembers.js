import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DepartmentMembers.css";
import { getAllStaff } from "../../services/staff";
import { imageLoadingFailedHandler } from "../../helpers/image";
import { PATHS } from "../../constants/paths";

function DepartmentMembers() {
  const handleGoBack = () => {
    window.history.back();
  };

  const [allStaff, setAllStaff] = useState([]);

  const fetchAllStaff = useCallback(async () => {
    try {
      const response = await getAllStaff();
      const { data } = response;
      setAllStaff(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAllStaff();
  }, [fetchAllStaff]);

  console.log(allStaff);

  return (
    <section className="departments-section p-5" style={{ marginTop: "20px" }}>
      <div className="go-back-container" style={{ marginBottom: "20px" }}>
        <a href="#" className="go-back-link" onClick={handleGoBack}>
          <i className="fas fa-arrow-left"></i> Go Back
        </a>
      </div>
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h2 className="text-center mb-5">Meet Our Team</h2>
            <div className="row justify-content-center">
              {allStaff.map((member) => (
                <div key={member._id} className="col-md-3 text-center mb-4">
                  <div className="circle-img">
                    <img
                      src={member.profilePicture.secure_url}
                      alt="Profile Picture"
                      className="rounded-circle img-fluid"
                      style={{ width: "250px" }}
                      onError={imageLoadingFailedHandler}
                    />
                  </div>
                  <h5 className="mt-2">{member.user.name}</h5>
                  <Link 
                    to={PATHS.departmentmember((member.user._id))}
                    className="text-success text-decoration-none"
                  >
                    View Profile
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DepartmentMembers;
