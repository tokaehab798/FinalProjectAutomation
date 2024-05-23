import React, { useCallback, useContext, useEffect, useState } from "react";
import "./ExternalTraining2.css";
import { getAllExternalTrainings } from '../../services/externaltrainings';
import { imageLoadingFailedHandler } from "../../helpers/image";
import { Link } from 'react-router-dom';
import { PATHS } from "../../constants/paths";
import { AuthContext } from "../../context/AuthContext";
import { deleteExternalById } from "../../services/externaltraining";
import { ADMIN } from "../../constants/roles";

function ExternalTraining2() {
    const { user: { role } } = useContext(AuthContext);
    const [allExternalTrainings, setAllExternalTrainings] = useState([]);

    const fetchAllExternalTrainings = useCallback(async () => {
        try {
            const response = await getAllExternalTrainings();
            const data = response.data;
            setAllExternalTrainings(data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        fetchAllExternalTrainings();
    }, [fetchAllExternalTrainings]);

    const handleDeleteExternal = async (id) => {
        try {
            await deleteExternalById(id);
            fetchAllExternalTrainings();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="p-5">
            <div className="container">
                <div className="row justify-content-center">
                    {allExternalTrainings.map((training, index) => (
                        <div key={index} className="col-md-4 mb-3 d-flex justify-content-center">
                            <div className="card shadow" style={{ width: '20rem' }}>
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={training.trainingPic.secure_url} className="card-img-top" alt="Training" style={{ objectFit: 'cover', height: '100%' }} onError={imageLoadingFailedHandler} />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{training.title}</h4>
                                    <p className="card-text">{training.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <Link to={PATHS.externaltraining(training._id)} className="text-decoration-none d-flex justify-content-center align-items-center text-success mb-3">
                                            <p className="mb-0">See More Details</p>
                                            <i className="fa fa-arrow-right ms-2" style={{ marginTop: '5px' }}></i>
                                        </Link>
                                        {role === ADMIN && (
                                            <button
                                                className="btn btn-danger btn-sm position-absolute bottom-0 end-0 mb-3 me-3"
                                                onClick={() => handleDeleteExternal(training._id)}
                                            >
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Additional card for admin */}
                    {role === ADMIN && (
                        <div className="col-md-4 mb-3">
                            <div className="card position-relative" style={{ width: "320px", height: "451px" }}>
                                <div className="card-body d-flex justify-content-center align-items-center bg-body-tertiary">
                                    <Link to={PATHS.adminaddexternal} style={{ textDecoration: "none" }}> 
                                        <div className="circle-content3 position-relative">
                                            <i className="fa fa-plus fa-3x text-white position-relative"></i>
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

export default ExternalTraining2;
