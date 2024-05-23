import React from 'react';
import "./AdminAddProject.css"

function AdminAddStudyplan() {
    return (
        <section className="container">
            <div className="go-back-container" style={{ marginLeft: "20px" }}>
                <a className="go-back-link" onClick={() => window.history.back()}>
                    <i className="fas fa-arrow-left"></i> Go Back
                </a>
            </div>
            {/* Competition Section */}
            <div className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 m-2">
                            <div className="card position-relative" style={{ width: "400px", height: "350px" }}>
                                <div className="card-body d-flex flex-column justify-content-center align-items-center bg-body-tertiary">
                                    <div className="circle-contentdown position-relative mb-3">
                                        <i className="fa fa-plus fa-2x text-white position-relative"></i>
                                    </div>
                                    <div>Add New studyplan</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-md-6 d-flex justify-content-center">
                            <a href="#" className="text-decoration-none">
                                <div className="btn btn-lg btn-outline-success">Cancel</div>
                            </a>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <a href="#" className="text-decoration-none">
                                <div className="btn btn-success btn-lg">Save</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminAddStudyplan;
