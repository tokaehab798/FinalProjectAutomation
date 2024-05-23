import React from 'react';

function AdminAddAbout() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section className="container">
      <form onSubmit={handleSubmit}>
        <div className="go-back-container" style={{ marginLeft: '20px', marginTop: '20px' }}>
          <a href="#" className="go-back-link" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i> Go Back
          </a>
        </div>
        {/* Competition Section */}
        <div className="p-5">
          <div className="container">
            <div className="row">
              {/* Input Section */}
              <div className="col-md-5">
                {/* Name Input */}
                <div className="mb-2">
                  <label htmlFor="aboutTitle" className="form-label"></label>
                  <input type="text" className="form-control" id="aboutTitle" placeholder="Enter Title" />
                </div>
                {/* Description Input */}
                <div className="mb-2">
                  <label htmlFor="aboutDescription" className="form-label"></label>
                  <textarea className="form-control" id="aboutDescription" rows="5" placeholder="Enter description"></textarea>
                </div>

                {/* Buttons */}
                <div className="row justify-content-center align-items-center mt-5">
                  <div className="col-md-6 d-flex justify-content-center">
                    <button type="button" className="btn btn-lg btn-outline-success">Cancel</button>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    <button type="submit" className="btn btn-success btn-lg">Save</button>
                  </div>
                </div>
              </div>
              {/* Competition Cards */}
              <div className="col-md-7 mb-3">
                <div className="card position-relative" style={{ width: '500px', height: '350px' }}>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center bg-body-tertiary">
                    <div className="circle-content2 position-relative mb-3">
                      <i className="fa fa-plus fa-2x text-white position-relative"></i>
                    </div>
                    <div>Add New Photo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AdminAddAbout;
