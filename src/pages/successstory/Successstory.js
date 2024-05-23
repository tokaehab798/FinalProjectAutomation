import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook to access route parameters
import "./Successstory.css"; // Import your CSS file for styling
import { getSuccessStoryById } from "../../services/successstory"; // Import your API service function
import { imageLoadingFailedHandler } from "../../helpers/image";

const SuccessStory = () => {
  const { storyId: id } = useParams(); // Get the ID from the route parameters

  const [successStory, setSuccessStory] = useState(null); // State to hold success story data

  useEffect(() => {
    const fetchSuccessStory = async () => {
      try {
        const response = await getSuccessStoryById(id); // Fetch success story data by ID
        setSuccessStory(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching success story details:", error);
      }
    };

    fetchSuccessStory();
  }, [id]); // Fetch data whenever the ID changes

  if (!successStory) {
    return <div>Loading...</div>; // Render loading message while data is being fetched
  }

  return (
    <section className="container">
      {/* Go Back Link */}
      <div className="go-back-container" style={{ marginLeft: "20px" }}>
        <a className="go-back-link" onClick={() => window.history.back()}>
          <i className="fas fa-arrow-left"></i> Go Back
        </a>
      </div>
      {/* Success Story Section */}
      <div className="p-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {/* Image Section */}
            <div className="col-md-4">
              <img
                src={successStory.mainPicture.secure_url}
                className="img-fluid"
                alt="Success Story Image"
                style={{ width: "450px" }}
                onError={imageLoadingFailedHandler}
              />
            </div>
            {/* Content Section */}
            <div className="col-md-8 d-flex align-items-center">
              <div>
                {/* Title */}
                <h2>{successStory.title}</h2>
                {/* Description */}
                <p>{successStory.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Picture Section */}
      <div className="p-3">
        <div className="row justify-content-center mb-5 container align-items-center">
          {successStory.additionalPictures.map((picture, index) => (
            <div className="col-md-4" key={index}>
              <div className="member">
                {/* Image */}
                <div className="d-flex justify-content-center">
                  <img
                    src={picture.secure_url}
                    className="img-fluid"
                    alt="Project Image"
                    style={{ width: "350px" }}
                    onError={imageLoadingFailedHandler}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      {successStory.video && (
        <div
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "56.25%",
            position: "relative",
            marginBottom: "-25%",
          }}
        >
          <iframe
            src={successStory.video}
            style={{
              position: "absolute",
              width: "100%",
              height: "50%",
              top: 0,
              left: 0,
            }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Team Members Section */}
      <div className="">
        <div className="container p-5">
          {/* Team Members Title */}
          <h2 className="text-center mb-3">Team Members</h2>
          {/* Underline */}
          <div className="underline mb-lg-5 bg-success"></div>

          {/* Team Members */}
          <div className="d-flex justify-content-center flex-wrap">
            {successStory.teamMembers.map((member, index) => (
              <div className="text-center mx-5 mb-3" key={index}>
                {member.picture && ( // Check if 'picture' exists before accessing its properties
                  <img
                    src={member.picture.secure_url} // Access 'picture' directly, no need for 'teamMembers'
                    className="rounded-circle"
                    alt={"Person " + (index + 1)}
                    style={{ width: "170px", height: "170px" }}
                    onError={imageLoadingFailedHandler}
                  />
                )}
                <div className="mt-2">
                  <h4>{member.name}</h4>
                  <p>Student</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
