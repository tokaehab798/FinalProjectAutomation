import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getExternalTrainingById } from '../../services/externaltraining';
import "./ExternalTraining.css";
import { imageLoadingFailedHandler } from '../../helpers/image';

const handleGoBack = () => {
  window.history.back();
};

function ExternalTraining() {
  const { ExtId:id } = useParams();
  const [externalTraining, setExternalTraining] = useState(null); // Change initial state to null

  useEffect(() => {
    const fetchExternalTraining = async () => {
      try {
        const response = await getExternalTrainingById(id);
        setExternalTraining(response.data);
      } catch (error) {
        console.error('Error fetching training details:', error);
      }
    };

    fetchExternalTraining();
  }, [id]);

  if (!externalTraining) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5">
      <div
        className="go-back-container"
        style={{ marginLeft: "20px", marginBottom: "20px" }}
      >
        <a href="#" className="go-back-link" onClick={handleGoBack}>
          <i className="fas fa-arrow-left"></i> Go Back
        </a>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {/* Image Section */}
          <div className="col-md-5">
            {/* Access the secure_url property of the trainingPic object */}
            <img src={externalTraining.trainingPic.secure_url} className="img-fluid rounded-1" alt="Training Image" style={{ width: '450px' }} onError={imageLoadingFailedHandler} />
          </div>
          {/* Content Section */}
          <div className="col-md-7 d-flex align-items-center">
            <div>
              {/* Title */}
              <h2>{externalTraining.title}</h2>
              {/* Description */}
              <p>{externalTraining.description}</p>
              {/* Line containing start date, end date, and link */}
              <div>
                <p className="mb-0"><strong>Start from:</strong> <span className="text-secondary">{new Date(externalTraining.startsFrom).toLocaleDateString()}</span></p>
                <div className="d-inline">
                  <p className="mb-0 d-inline me-5"><strong>Period:</strong> <span className="text-secondary">{new Date(externalTraining.endsAt).toLocaleDateString()}</span></p>
                  <p className="mb-0 d-inline ms-5"><strong>Link:</strong> <a href={externalTraining.link} className="text-success">{externalTraining.link}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExternalTraining;
