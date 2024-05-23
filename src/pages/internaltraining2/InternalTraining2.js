import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InternalTraining2.css';
import { getInternalTrainingById } from '../../services/internaltraining2';
import { imageLoadingFailedHandler } from '../../helpers/image';

function InternalTraining2() {
  const { interId: id } = useParams();
  const [internalTraining, setInternalTraining] = useState(null);

  useEffect(() => {
    const fetchInternalTraining = async () => {
      try {
        const response = await getInternalTrainingById(id);
        setInternalTraining(response.data);
      } catch (error) {
        console.error('Error fetching internal training details:', error);
      }
    };

    fetchInternalTraining();
  }, [id]);

  if (!internalTraining) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Image and Content Section */}
      <div className="p-5">
        <div className="go-back-container" style={{ marginLeft: '20px' }}>
          <a className="go-back-link" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i> Go Back
          </a>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {/* Image Section */}
            <div className="col-md-5">
              <img
                src={internalTraining.trainingPicture.secure_url}
                className="img-fluid rounded-1"
                alt="Internal Training Image"
                style={{ width: '450px' }}
                onError={imageLoadingFailedHandler}
              />
            </div>
            {/* Content Section */}
            <div className="col-md-5 d-flex align-items-center">
              <div>
                {/* Title */}
                <h2>{internalTraining.title}</h2>
                {/* Paragraph */}
                <p>{internalTraining.description}</p>
                {/* Line containing start date, end date, and link */}
                <div>
                  <p className="mb-0">
                    <strong>Starts From:</strong>{' '}
                    <span className="text-secondary">{internalTraining.startsFrom}</span>
                  </p>
                  <div className="d-flex justify-content-between ">
                    <p className="me-5">
                      <strong>Ends At:</strong>{' '}
                      <span className="text-secondary">{internalTraining.endsAt}</span>
                    </p>
                    <button className="btn btn-success ">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What you'll Learn Section */}
      <div className="bg-light">
        <div className="container p-5 ">
          <h4 className="text-center mb-5">What you'll Learn</h4>
          <div className="row justify-content-center">
            <div className="col-md-10">
              {internalTraining.whatYouWillLearn.map((item, index) => (
                <section key={index} className="mb-4 d-flex">
                  <i className="fa-solid fa-check text-success me-3"></i>
                  <p>{item}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Training Instructor Section */}
      <div className="container p-5">
        <h4 className="text-center mb-5 fw-bold">Training Instructor</h4>
        <div className="row justify-content-start">
          <div className="col-md-9">
            {internalTraining.teachingInstructor.map((instructor, index) => (
              <div key={index} className="d-flex align-items-center mb-4">
                {/* Image without circular shape */}
                <div className="overflow-hidden me-3" style={{ width: '200px', height: '200px' }}>
                  <img
                    src={instructor.profilePicture.secure_url}
                    alt="Instructor"
                    className="w-100 h-100"
                    style={{ height: '100%' }}
                    onError={imageLoadingFailedHandler}
                  />
                </div>
                {/* Instructor name and brief description */}
                <div>
                  <h5 className="fw-bold">{instructor.name}</h5>
                  <h6 className="text-muted">{instructor.title}</h6>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternalTraining2;
