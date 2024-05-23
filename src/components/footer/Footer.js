import React from 'react';
import "./Footer.css"; // Import your CSS file with correct extension

function Footer() {
  return (
    <footer className="py-5 maincolor text-white">
      <div className="container">
        <div className="row">
          {/* First Footer section: Icons */}
          <div className="col-lg-4 d-flex justify-content-center">
            <div className=" d-flex align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <div><i className="fab fa-facebook-f border TheIcons m-2"></i></div>
                <div><i className="fab fa-twitter border TheIcons m-2"></i></div>
                <div><i className="fab fa-linkedin-in border TheIcons m-2"></i></div>
                <div><i className="fab fa-youtube border TheIcons m-2"></i></div>
                <div><i className="fab fa-instagram border TheIcons m-2"></i></div>
              </div>
            </div>
          </div>

          <div className="col-lg-2"></div>

          {/* Second Footer section: Pages */}
          <div className="col-lg-2">
            <div className="row row-cols-2">
              <div className="col">
                <h6>Pages</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Home</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">About</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Department Members</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Works</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Portfolio</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Career</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Footer section: Company */}
          <div className="col-lg-2">
            <div className="row row-cols-2">
              <div className="col">
                <h6>Company</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Terms Condition</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Privacy policy</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Cookies</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fourth Footer section: Community */}
          <div className="col-lg-2">
            <div className="row row-cols-2">
              <div className="col">
                <h6>Community</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Help center</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Forum</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Webinars</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fw-lighter">Professionals</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional content for the footer */}
        <div className="d-flex justify-content-center py-4 my-4 border-top flex-column">
          <div className="d-flex justify-content-center  align-items-center">
            <div><i className="fab fa-facebook-f  fs-5 m-3"></i></div>
            <div><i className="fab fa-twitter  fs-5 m-3"></i></div>
            <div><i className="fab fa-linkedin-in fs-5  m-3"></i></div>
            <div><i className="fab fa-instagram fs-5 m-3"></i></div>
          </div>
          <ul className=" d-flex flex-row justify-content-center align-items-center pt-3">
            <li className="mb-2 list-unstyled"><a href="#" className="  me-4 text-decoration-none text-white fw-lighter">About</a></li>
            <li className="mb-2 list-unstyled"><a href="#" className="  me-4 text-decoration-none text-white fw-lighter">Contact us</a></li>
            <li className="mb-2 list-unstyled"><a href="#" className="  me-4 text-decoration-none text-white fw-lighter">FAQs</a></li>
            <li className="mb-2 list-unstyled"><a href="#" className="  me-4 text-decoration-none text-white fw-lighter">Terms and conditions</a></li>
            <li className="mb-2 list-unstyled"><a href="#" className="  me-4 text-decoration-none text-white fw-lighter">Cookie policy</a></li>
            <li className="mb-2 list-unstyled"><a href="#" className="  me-4 text-decoration-none text-white fw-lighter">Privacy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
