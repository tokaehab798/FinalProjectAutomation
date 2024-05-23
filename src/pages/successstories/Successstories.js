import React, { useCallback, useContext, useEffect, useState } from "react";
import "./Successstories.css"; // Make sure to import your CSS file if needed
import { getAllSuccessStories } from "../../services/successstories";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { errorImage, imageLoadingFailedHandler } from "../../helpers/image";
import { AuthContext } from "../../context/AuthContext";
import { ADMIN } from "../../constants/roles";
import { deleteSuccessStoryById } from "../../services/successstory";

const MyComponent = () => {
  const {
    user: { role },
  } = useContext(AuthContext);

  const [allSuccessStories, setAllSuccessStories] = useState([]);

  const fetchAllSuccessStories = useCallback(async () => {
    try {
      const response = await getAllSuccessStories();
      const { data } = response;
      setAllSuccessStories(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAllSuccessStories();
  }, [fetchAllSuccessStories]);

  const handleDeleteSuccessStory = async (id) => {
    try {
      await deleteSuccessStoryById(id);

      fetchAllSuccessStories();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="p-5">
      <div className="container">
        <div className="row">
          {allSuccessStories.map((story) => (
            <div className="col-md-4 mb-3" key={story._id}>
              <div
                className="card "
                style={{ width: "18rem", marginBottom: "20px" , height:"400px"}}
              >
                <img
                  src={story?.mainPicture?.secure_url || errorImage}
                  className="card-img-top"
                  alt="Story Main Picture"
                  height={200}
                  onError={imageLoadingFailedHandler}
                />
                <div className="card-body">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text ">{story.description}</p>

                  <div className="d-flex justify-content-between">
                    <Link
                      to={PATHS.successstory(story._id)}
                      className="text-decoration-none d-flex justify-content-start align-items-center text-success"
                    >
                      <p className="mb-0">See More Details</p>
                      <i
                        className="fa fa-arrow-right ms-2"
                        style={{ marginTop: "5px" }}
                      ></i>
                    </Link>

                    {role === ADMIN && (
                      <button
                        className="btn btn-danger btn-sm position-absolute bottom-0 end-0 mb-3 me-3"
                        onClick={() => handleDeleteSuccessStory(story._id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {role === ADMIN && (
            <div className="col-md-4 mb-3">
              <div
                className="card position-relative"
                style={{ width: "288px", height: "400px" }}
              >
                <div className="card-body d-flex justify-content-center align-items-center bg-body-tertiary">
                  <Link
                    to={PATHS.adminaddsuccessstory}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="circle-content position-relative">
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
};

export default MyComponent;
