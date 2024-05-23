// MyComponent.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompetitionById } from "../../services/competition";
import { imageLoadingFailedHandler } from "../../helpers/image";

const MyComponent = () => {
  const { compeId: id } = useParams();
  const [competition, setCompetition] = useState(null);

  useEffect(() => {
    const fetchCompetition = async () => {
      try {
        const response = await getCompetitionById(id);
        setCompetition(response.data);
      } catch (error) {
        console.error('Error fetching competition details:', error);
      }
    };

    fetchCompetition();
  }, [id]);

  if (!competition) {
    return <div>Loading...</div>;
  }
  const truncatedDescription = competition.description.substring(0, 50) + "...";
  return (
    <div className="p-5">
      <div className="go-back-container" style={{ marginLeft: "20px" }}>
        <a className="go-back-link" onClick={() => window.history.back()}>
          <i className="fas fa-arrow-left"></i> Go Back
        </a>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <img src={competition.competitionPic.secure_url} className="img-fluid rounded-1" alt="Competition Image" style={{ width: '450px' }} onError={imageLoadingFailedHandler} />
          </div>
          <div className="col-md-7 d-flex align-items-center">
            <div>
              <h2>{competition.title}</h2>
              <p>{competition.description}</p>
              <div className="d-flex justify-content-start">
                <p className="mb-0 d-inline"><strong>Go To Link:</strong> <a href={competition.link} className="text-success">{competition.link}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
