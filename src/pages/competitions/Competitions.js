import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Competitions.css";
import { getAllCompetitions } from '../../services/competitions';
import { PATHS } from "../../constants/paths";
import { imageLoadingFailedHandler } from "../../helpers/image";
import { AuthContext } from "../../context/AuthContext";
import { deleteCompetitionById } from "../../services/competition";
import { ADMIN } from "../../constants/roles";

const TrainingComponent = () => {
  const { user: { role } } = useContext(AuthContext);
  const [allCompetitions, setAllCompetitions] = useState([]);

  const fetchAllCompetitions = useCallback(async () => {
    try {
      const response = await getAllCompetitions();
      const data = response.data;
      setAllCompetitions(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAllCompetitions();
  }, [fetchAllCompetitions]);

  const handleDeleteCompetition = async (id) => {
    try {
      await deleteCompetitionById(id);
      fetchAllCompetitions();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="p-5">
      <div className="container">
        <div className="row justify-content-center">
          {allCompetitions.map((competition, i) => (
            <div key={i} className="col-md-4 mb-3 d-flex justify-content-center ">
              <div className="card shadow" style={{ width: '25rem' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={competition.competitionPic.secure_url} className="card-img-top" alt="Competition" style={{ objectFit: 'cover', height: '100%' }} onError={imageLoadingFailedHandler} />
                </div>
                <div className="card-body ">
                  <h4 className="card-title">{competition.title}</h4>
                  <p className="card-text text-muted">{competition.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-success">
                      <Link to={PATHS.competition(competition._id)} style={{ textDecoration: 'none', color: 'inherit' }}>Register now</Link>
                    </button>
                    {role === ADMIN && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteCompetition(competition._id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Render additional card for admin */}
          {role === ADMIN && (
            <div className="col-md-4 mb-3 d-flex justify-content-center">
              <Link to={PATHS.adminaddcompetition} style={{ textDecoration: 'none' }}>
                <div className="card position-relative" style={{ width: "300px", height: "327.99px" }}>
                  <div className="card-body d-flex justify-content-center align-items-center bg-body-tertiary">
                    <div className="circle-content3 position-relative">
                      <i className="fa fa-plus fa-3x text-white position-relative"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TrainingComponent;
