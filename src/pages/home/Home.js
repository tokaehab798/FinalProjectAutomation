import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { imageLoadingFailedHandler } from "../../helpers/image";
import { getAllStaff } from "../../services/staff";
import { PATHS } from "../../constants/paths";
import { getAllProjects } from "../../services/projects";

// Sample data arrays (replace with real data from API or other sources)

const srcsofprojects = ["project_img1.jpg", "project_img2.jpg"];
const projectsNames = ["Project One", "Project Two"];

function HomePage() {
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

  return (
    <section className="text-center position-relative">
      {/* Introduction */}
      <div className="row mx-0">
        <div className="col-lg-12 p-0 m-0">
          <img
            src="images/HomePage.png"
            className="position-relative"
            alt="image"
            style={{ width: "100%", height: "500px" }}
            onError={imageLoadingFailedHandler}
          />
          <h1
            className="position-absolute text-white"
            style={{ top: "7%", left: "30%" }}
          >
            Where curiosity meets computation. <br /> Welcome to our AI
            department.
          </h1>
        </div>
      </div>

      {/* About AI Department */}
      <div className="row justify-content-center p-5 bg-light">
        <div className="col-lg-6">
          <p>
            Welcome to Misr University For Science And Technology's Artificial
            Intelligence Department! We're dedicated to advancing AI research,
            education, and innovation. Our passionate team explores AI's
            potential in machine learning, natural language processing, computer
            vision, and robotics. With cutting-edge courses, facilities, and
            research opportunities, we invite students and professionals to join
            us in shaping the future of technology through AI.
          </p>
          <Link
            to={PATHS.about}
            className="btn btn-success text-white text-decoration-none"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Things You'll Learn */}
      <div className="p-5">
        <div className="text-white">
          <h2 className="mb-lg-5 text-dark">Things You'll Learn</h2>
          <div className="container">
            {/* Learning topics */}
            <div className="d-flex justify-content-center align-items-center mb-2">
              {/* Topic 1 */}
              <div
                className="button-like bg-success"
                style={{ margin: "auto" }}
              >
                <div className="dot" style={{ marginLeft: "10px" }}></div>
                <div className="name">Quantum Machine Learning</div>
              </div>
              {/* Topic 2 */}
              <div className="button-like maincolor" style={{ margin: "auto" }}>
                <div className="dot"></div>
                <div className="name">Learn Machine Learning</div>
              </div>
              {/* Topic 3 */}
              <div
                className="button-like bg-success"
                style={{ margin: "auto" }}
              >
                <div className="dot" style={{ marginLeft: "20px" }}></div>
                <div className="name">Learn NLP</div>
              </div>
            </div>

            {/* More learning topics */}
            <div className="d-flex justify-content-center align-items-center mb-2">
              {/* Topic 4 */}
              <div
                className="button-like maincolor"
                style={{ marginRight: "7%" }}
              >
                <div className="dot"></div>
                <div className="name">Computer Vision</div>
              </div>
              {/* Topic 5 */}
              <div
                className="button-like maincolor"
                style={{ marginLeft: "7%" }}
              >
                <div className="dot"></div>
                <div className="name">AI for Cybersecurity</div>
              </div>
            </div>

            {/* Even more learning topics */}
            <div className="d-flex justify-content-center align-items-center mb-2">
              {/* Topic 6 */}
              <div
                className="button-like bg-success"
                style={{ margin: "auto" }}
              >
                <div className="dot"></div>
                <div className="name">AI and Robotics</div>
              </div>
              {/* Topic 7 */}
              <div className="button-like maincolor" style={{ margin: "auto" }}>
                <div className="dot"></div>
                <div className="name">Learn to build a portfolio</div>
              </div>
              {/* Topic 8 */}
              <div
                className="button-like bg-success"
                style={{ margin: "auto" }}
              >
                <div className="dot"></div>
                <div className="name text-center">Reinforcement Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Members Section */}
      <div className="bg-light">
        <div className="container p-5">
          <h2 className="text-center mb-3">Department Members</h2>
          <div className="underline mb-lg-5 bg-success"></div>
          <div className="row justify-content-center">
            {allStaff
              .filter((_, index) => index < 3)
              .map((member) => (
                <div key={member.user.id} className="col-3 mb-4 m-md-4">
                  <div className="member-card card fixed-height-card-member">
                    <img
                      src={member.profilePicture.secure_url}
                      className="img-fluid card-img-top lazyload img-thumbnail"
                      alt="Member Image"
                      style={{ height: "200px" }}
                      onError={imageLoadingFailedHandler}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        {member.user.name}
                      </h5>
                      <Link
                        to={PATHS.departmentmember(member.user.id)}
                        className="btn btn-success d-block mx-auto"
                      >
                        See Details{" "}
                        <i
                          className="fa fa-arrow-right ms-2"
                          style={{ marginTop: "5px" }}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center mt-4">
            <Link
              to={PATHS.departmentMembers}
              className="btn btn-outline-success"
            >
              See All
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container p-5">
        <h2 className="text-center mb-3">Projects</h2>
        <div className="underline mb-lg-5 bg-success"></div>
        <div className="row justify-content-center">
          {allProjects
            .filter((_, index) => index < 3)
            .map((project) => (
              <div key={project._id} className="col-3 mb-4 m-md-4">
                <div className="member-card card fixed-height-card-member">
                  <img
                    src={project.mainPic.secure_url}
                    className="img-fluid card-img-top lazyload img-thumbnail"
                    alt="Member Image"
                    style={{ height: "200px" }}
                    onError={imageLoadingFailedHandler}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{project.title}</h5>
                    <Link
                      to={PATHS.project(project._id)}
                      className="btn btn-success d-block mx-auto"
                    >
                      See Details{" "}
                      <i
                        className="fa fa-arrow-right ms-2"
                        style={{ marginTop: "5px" }}
                      ></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-4">
          <Link to={PATHS.projects} className="btn btn-outline-success">
            See All
          </Link>
        </div>
      </div>

      {/* We Are Here to Help Section */}
      <div className="bg-light p-5">
        <div className="p-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="images/6.png"
                      className="img-fluid"
                      alt="Image"
                      style={{ width: "350px" }}
                      onError={imageLoadingFailedHandler}
                    />
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div>
                      <h2>We're Here to Help</h2>
                      <p>
                        Read through our FAQs and, if you can't find what you're
                        looking for, our experts will be happy to answer your
                        questions.
                      </p>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-success me-2">
                          Read FAQs
                        </button>
                        <Link
                          to="/contact"
                          className="text-decoration-none text-body-tertiary"
                        >
                          <i className="fas fa-envelope me-2"></i>Ask a Question
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
