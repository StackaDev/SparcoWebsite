import React from "react";

function HomeBanner() {
  return (
    <section className="home-banner container-fluid row py-5 mx-0 d-flex flex-row-reverse justify-content-around">
      <div className="col-md-6">
        <img className="img-fluid" alt="" src="https://picsum.photos/640/480" />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-around">
        <h2>
          SPARCO
          <br />
          ELECTRONICS & HOME APPLIANCES
        </h2>
        <h3>
          More than&nbsp;
          <span>2000</span>
          &nbsp;products
        </h3>
      </div>
    </section>
  );
}

export default HomeBanner;
