import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getStaffById } from "../../services/staff2";
import { imageLoadingFailedHandler } from "../../helpers/image";
import "./DepartmentMember.css";
import { PATHS } from "../../constants/paths";
import { ADMIN, DOCTOR } from "../../constants/roles";
import { AuthContext } from "../../context/AuthContext";

function DepartmentMemberProfile() {
  const {
    user: { role },
  } = useContext(AuthContext);

  const [activeTab, setActiveTab] = useState("subjects");
  const [member, setMember] = useState(null);
  const { memberId } = useParams();

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await getStaffById(memberId);
        setMember(response.data);
      } catch (error) {
        console.error("Error fetching member details:", error);
      }
    };

    fetchMember();
  }, [memberId]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (!member) {
      return <div>Loading...</div>;
    }

    switch (activeTab) {
      case "subjects":
        return (
          <div className="research-paper">
            <div className="shadow p-3 mb-2 bg-white rounded">
              <h5 className="card-title mb-4">About {member.user.name}</h5>
              <p className="mb-4">{member.brief}</p>
            </div>
          </div>
        );
      case "image":
        return (
          <div className="research-paper">
            <div className="shadow p-3 mb-2 bg-white rounded">
              {console.log(member.researchPapers[0].secure_url)}
              <embed
                src={member.researchPapers[0].secure_url} // Assuming there is only one research paper
                frameBorder="0"
                style={{ width: "100%", height: "600px" }}
                sandbox="allow-scripts"
                readOnly
              />
            </div>
          </div>
        );
      case "history":
        return (
          <div className="research-paper">
            <h5 className="card-title">Subject History</h5>
            <div className="shadow-sm p-3 rounded">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                  </tr>
                </thead>
                <tbody>
                  {member.subjectHistory.map((subject, index) => (
                    <tr key={index}>
                      <td>{subject.subjectCode}</td>
                      <td>{subject.subjectName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  const editButtonStyle = {
    backgroundColor: "#157347",
    borderColor: "#157347",
  };
  return (
    <section className="bg-light">
      <div
        className=" d-flex justify-content-between container"
        style={{ paddingLeft: "20px", paddingTop: "20px" }}
      >
        <a
          href="#"
          className="go-back-link"
          onClick={() => window.history.back()}
        >
          <i className="fas fa-arrow-left"></i> Go Back
        </a>

        {[ADMIN, DOCTOR].includes(role) && (
          <button
            type="button"
            className="btn btn-primary"
            style={editButtonStyle}
          >
            <Link
              to={PATHS.staffEditProfile}
              style={{ textDecoration: "none", color: "white" }}
            >
              Edit
            </Link>
          </button>
        )}
      </div>
      {member && (
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-3 text-center d-flex flex-column align-items-center">
              <div className="circle-img mb-3">
                <img
                  src={member.profilePicture.secure_url}
                  alt={member.user.name}
                  className="rounded-circle img-fluid"
                  onError={imageLoadingFailedHandler}
                />
              </div>
              <h4>{member.user.name}</h4>
              <p className="text-muted">{member.user.role}</p>
            </div>
          </div>
        </div>
      )}

      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs justify-content-center card-header-tabs">
            <li className="nav-item">
              <button
                className={`nav-link btn ${
                  activeTab === "subjects" ? "active text-success" : ""
                }`}
                onClick={() => handleTabClick("subjects")}
              >
                Brief
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn ${
                  activeTab === "image" ? "active text-success" : ""
                }`}
                onClick={() => handleTabClick("image")}
              >
                Research Paper
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn ${
                  activeTab === "history" ? "active text-success" : ""
                }`}
                onClick={() => handleTabClick("history")}
              >
                Subject History
              </button>
            </li>
          </ul>
        </div>
        <div>{renderContent()}</div>
      </div>
    </section>
  );
}

export default DepartmentMemberProfile;
