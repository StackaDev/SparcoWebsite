/* eslint-disable react/prefer-stateless-function */
import React from "react";
import logo from "../../public/static/images/logo.png";
import toggle from "../../public/static/images/toggle.svg";

class TopNav extends React.Component {
  render() {
    return (
      <>
        <head>
          <script
            src="https://kit.fontawesome.com/b332fe29c5.js"
            crossOrigin="anonymous"
          />
        </head>
        <div className="container-fluid top-nav row">
          <div className="row top-nav-contents col d-flex flex-row justify-content-between">
            <img
              src={logo}
              className="sparcot-logo img-fluid col"
              alt="sparcot-logo"
            />
            <div className="social col-md d-lg-flex d-none flex-column justify-content-between py-4">
              <div className="d-flex flex-row justify-content-around fa-2x">
                <i className="fab fa-facebook-square" />
                <i className="fab fa-instagram" />
                <i className="fab fa-twitter-square" />
                <i className="fab fa-linkedin" />
              </div>
              <h4 className="text-center mt-3">
                Toll Free&nbsp;/&nbsp;
                <span>1800-1234-5678</span>
              </h4>
            </div>
            <div className="col-md d-flex flex-column justify-content-around search-bar">
              <div className="col-md wrap">
                <div className="search">
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="What are you looking for?"
                  />
                  <button type="submit" className="searchButton">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="top-nav-toggle d-flex flex-row justify-content-center my-2">
            <img className="img-fluid" src={toggle} alt="x" />
          </div>
        </div>
      </>
    );
  }
}
export default TopNav;
