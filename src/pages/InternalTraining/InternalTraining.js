import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./InternalTraining.css"
import { getAllInternalTrainings } from "../../services/internaltraining";
import { PATHS } from "../../constants/paths";
import { AuthContext } from "../../context/AuthContext";
import { deleteInternalById } from "../../services/internaltraining2";
import { ADMIN } from "../../constants/roles";
import { errorImage, imageLoadingFailedHandler } from "../../helpers/image";

function InternalTraining() {
    const { user: { role } } = useContext(AuthContext);
    const [allInternalTrainings, setAllInternalTrainings] = useState([]);

    const fetchAllInternalTrainings = useCallback(async () => {
        try {
            const response = await getAllInternalTrainings();
            const data = response.data;
            setAllInternalTrainings(data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        fetchAllInternalTrainings();
    }, [fetchAllInternalTrainings]);

    const handleDeleteInternal = async (id) => {
        try {
            await deleteInternalById(id);
            fetchAllInternalTrainings();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="p-5">
            <div className="container">
                <div className="row justify-content-center">
                    {allInternalTrainings.map((training, index) => (
                        <div key={index} className="col-md-4 mb-3 d-flex justify-content-center">
                            <div className="card shadow" style={{ width: '20rem' }}>
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    {/* Use optional chaining to access the property */}
                                    <img src={training?.trainingPicture?.secure_url ||  errorImage} className="card-img-top" alt="Training" style={{ objectFit: 'cover', height: '100%' }} onError={imageLoadingFailedHandler} />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{training.title}</h4>
                                    <p className="card-text">{training.description}</p>

                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-success">
                                            <Link to={PATHS.internaltraining2(training._id)} style={{ textDecoration: 'none', color: 'white' }}>
                                                Apply
                                            </Link>
                                        </button>
                                        {role === ADMIN && (
                                            <button
                                                className="btn btn-danger btn-sm position-absolute bottom-0 end-0 mb-3 me-3"
                                                onClick={() => handleDeleteInternal(training._id)}
                                            >
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add Internal Training Card for Admin */}
                    {role === ADMIN && (
                        <div className="col-md-4 mb-3">
                            <div className="card position-relative" style={{ width: "300px", height: "350.8px" }}>
                                <div className="card-body d-flex justify-content-center align-items-center bg-body-tertiary">
                                    <Link to={PATHS.adminaddinternal} style={{ textDecoration: "none" }}>
                                        <div className="circle-content3 position-relative">
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

export default InternalTraining;
