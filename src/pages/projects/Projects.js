import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Projects.css";
import { getAllProjects } from "../../services/projects";
import { imageLoadingFailedHandler } from "../../helpers/image";
import { PATHS } from "../../constants/paths";
import { AuthContext } from "../../context/AuthContext";
import { ADMIN } from "../../constants/roles";
import { deleteProjectById } from "../../services/project";

const Projects = () => {
  const { user: { role } } = useContext(AuthContext);
  const [allProjects, setAllProjects] = useState([]);

  const fetchAllProjects = useCallback(async () => {
    try {
      const response = await getAllProjects();
      const { data } = response;
      setAllProjects(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAllProjects();
  }, [fetchAllProjects]);

  const handleDeleteProjects = async (id) => {
    try {
      await deleteProjectById(id);
      fetchAllProjects();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <div className="container p-5">
        <h2 className="text-center mb-3">Projects</h2>
        <div className="underline mb-lg-5 bg-success"></div>
        <div className="row justify-content-center mb-5">
          {allProjects.map((project) => (
            <div className="col-md-4" key={project._id}>
              <div className="member">
                <div className="d-flex justify-content-center">
                  <img src={project.mainPic.secure_url} className="img-fluid img-thumbnail" alt={project.title} style={{ height: '200px' }} onError={imageLoadingFailedHandler} />
                </div>
                <div>
                  <h5 className="mt-3" style={{ textAlign: 'center' }}>{project.title}</h5>
                  
                  <div className="d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                    <div style={{ width: 'calc(60% - 10px)' }}>
                      <Link to={PATHS.project(project._id)} className="text-decoration-none text-success mb-3 d-flex align-items-center" style={{ margin: '0', padding: '0' }}>
                        <p className="mb-0 me-2">See More Details</p>
                        <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                    {role === ADMIN && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteProjects(project._id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Additional card for editing projects */}
          {role === ADMIN && (
            <div className="col-md-4 mb-3">
              <div className="card position-relative" style={{ width: "305px", height: "200px" }}>
                <div className="card-body d-flex justify-content-center align-items-center bg-body-tertiary">
                  <Link to={PATHS.adminAddProject} style={{ textDecoration: "none" }}>
                    <div className="circle-content2 position-relative">
                      <i className="fa fa-plus fa-2x text-white position-relative"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
