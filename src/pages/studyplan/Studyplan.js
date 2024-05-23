import React, { useState } from 'react';
import './Studyplan.css'; // Import your CSS file
import { imageLoadingFailedHandler } from '../../helpers/image';

function Gallery() {
  const [flag, setFlag] = useState(true);
  const [modelImg, setModelImg] = useState('');
  const srcs = ["images/لائحة.png"];

  const hideElement = (element) => {
    if (element.target.id === 'img') return;
    setFlag(true);
  }

  return (
    <section className="p-5">
      <div className="go-back-container" style={{ marginLeft: '20px' }}>
        <a href="#" className="go-back-link" onClick={() => window.history.back()}>
          <i className="fas fa-arrow-left"></i> Go Back
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-success">Artificial Intelligence</button>
      </div>
      <div className="container">
        <div className="row g-5 d-flex justify-content-center align-items-center p-5">
          {srcs.map((src, index) => (
            <div className="col-6" key={index}>
              <div className="rounded-3 position-relative overflow-hidden">
                <img className="img-fluid rounded" src={src} alt="" onError={imageLoadingFailedHandler} />
                <div
                  onClick={() => { setFlag(false); setModelImg(src); }}
                  className="layer__ rounded text-white position-absolute maincolorbackground start-0 h-100 w-100 top-0 d-flex justify-content-center align-items-center"
                >
                  <i className="fa-solid fa-plus fa-7x"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={hideElement}
        className={flag ? 'd-none' : 'model__ position-fixed start-0 w-100 h-100 top-0 bg-black bg-opacity-25 d-flex justify-content-center align-items-center'}
      >
        <img id="img" src={modelImg} alt="" style={{ width: '80%' }} onError={imageLoadingFailedHandler} />
      </div>
    </section>
  );
}

export default Gallery;
