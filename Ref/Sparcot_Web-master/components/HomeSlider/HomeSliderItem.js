import React from "react";

function HomeSliderItem() {
  return (
    <div className="carousel-item d-flex">
      <div className="d-flex carousel-content row">
        <div className="col-md-6 carousel-text  d-flex flex-column justify-content-center">
          <h2>SPARCO DISH RACK</h2>
          <h3>
            Experience
            <br />
            the quality.
          </h3>
          <div className="buy-now">BUY NOW</div>
        </div>
        <img
          className="col-md-6 img-fluid"
          alt=""
          src="https://picsum.photos/350/200"
        />
      </div>
    </div>
  );
}

export default HomeSliderItem;
