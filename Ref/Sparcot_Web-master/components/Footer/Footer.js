import React from "react";

function Footer() {
  return (
    <section className="footer">
      <div className="row">
        <div className="col-lg-6 row">
          <div className="pt-4 col-md-6">
            <h4>About Us</h4>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
          </div>
          <div className="pt-4 col-md-6">
            <h4>Products</h4>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
          </div>
        </div>
        <div className="col-lg-6 row">
          <div className="pt-4 col-md-6">
            <h4>Links</h4>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
            <h6>Lorem Ipsum</h6>
          </div>
          <div className="pt-4 col-md-6">
            <h4>Contact Us</h4>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </h6>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-2 d-flex flex-row justify-content-between">
        <div className="col-md-3 d-flex flex-row justify-content-between fa-2x">
          <i className="fab fa-facebook-square" />
          <i className="fab fa-instagram" />
          <i className="fab fa-twitter-square" />
          <i className="fab fa-linkedin" />
        </div>
        <div className="col-md-5 d-flex flex-coloumn justify-content-center">
          <h5>
            ©2019 Sparcot. Designed &amp; Developed By&nbsp;
            <a href="https://stacka.tech">StackATech</a>
          </h5>
        </div>
      </div>
    </section>
  );
}
export default Footer;
