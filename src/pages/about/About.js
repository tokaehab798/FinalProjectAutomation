import React from "react";
import "./About.css";
import { imageLoadingFailedHandler } from "../../helpers/image";

const About = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section className="about-section" style={{ marginTop: "20px" }}>
      <div className="container">
        <div
          className="go-back-container"
          style={{ marginLeft: "20px", marginBottom: "20px" }}
        >
          <a href="#" className="go-back-link" onClick={handleGoBack}>
            <i className="fas fa-arrow-left"></i> Go Back
          </a>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="section-title">About AI Department</h3>
            <p className="lead">
              The AI department at Must University is dedicated to advancing the
              field of Artificial Intelligence through education, research, and
              innovation.
            </p>
            <h3>Mission Statement</h3>
            <p>
              Our mission is to educate the next generation of AI experts,
              conduct cutting-edge research in AI, and contribute to the
              development of AI technologies that benefit society.
            </p>
            <h3>Programs Offered</h3>
            <ul>
              <li>Bachelor's Degree in Artificial Intelligence</li>
              <li>Master's Degree in Artificial Intelligence</li>
              <li>Ph.D. in Artificial Intelligence</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img
              src="images/WhatsApp Image 2024-03-09 at 3.10.15 PM (1).jpeg"
              alt="AI Department"
              className="img-fluid department-image"
              onError={imageLoadingFailedHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
