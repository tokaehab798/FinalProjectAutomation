import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; 
import "./Project.css";
import { imageLoadingFailedHandler } from '../../helpers/image';
import { getProjectById } from '../../services/project';

const Project = () => {
    const { projId: id } = useParams();
    
    // State to hold project data
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await getProjectById(id);
                setProjectData(response.data);
            } catch (error) {
                console.error('Error fetching project details:', error);
            }
        };

        fetchProject();
    }, [id]);
  
    if (!projectData) {
        return <div>Loading...</div>;
    }

    return (
        <section className="container">
            {/* Go Back Link */}
            <div className="go-back-container" style={{ marginLeft: "20px" }}>
                <a className="go-back-link" onClick={() => window.history.back()}>
                    <i className="fas fa-arrow-left"></i> Go Back
                </a>
            </div>

            {/* Project Section */}
            <div className="p-5">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Image Section */}
                        <div className="col-md-4">
                            <img src={projectData.mainPic.secure_url} className="img-fluid" alt="Project Image" style={{ width: '450px' }} onError={imageLoadingFailedHandler}/>
                        </div>
                        {/* Content Section */}
                        <div className="col-md-8 d-flex align-items-start">
                            <div>
                                {/* Title */}
                                <h2>{projectData.title}</h2>
                                {/* Description */}
                                <p>{projectData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Pictures Section */}
            <div className="p-3">
                <div className="container">
                    <div className="row justify-content-center mb-5 container align-items-center">
                        {projectData.additionalPictures.map((picture, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="member">
                                    {/* Image */}
                                    <div className="d-flex justify-content-center">
                                        <img src={picture.secure_url} className="img-fluid" alt="Project Image" style={{ width: '300px' }} onError={imageLoadingFailedHandler}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Members Section */}
            <div className="pb-5">
                <div className="container p-5">
                    {/* Team Members Title */}
                    <h2 className="mb-3 text-center">Project Team Members</h2>
                    {/* Underline */}
                    <div className="underline mb-lg-5 bg-success"></div>

                    {/* Team Members */}
                    <div className="d-flex justify-content-center flex-wrap">
                        {projectData.teamMembers.map((member, index) => (
                            <div className="text-center mx-5 mb-3" key={index}>
                                {/* Team Member Image */}
                                <img src={member.pic.secure_url} alt={"Person " + (index + 1)} className="rounded-circle" style={{ width: '170px', height: '170px' }} onError={imageLoadingFailedHandler} />
                                {/* Team Member Name */}
                                <div className="mt-2">
                                    <h4>{member.name}</h4>
                                    {/* Team Member Role */}
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
