import React from "react";

function BestSeller() {
  return (
    <section className="py-5 row best-seller">
      <div className="best-seller-main col-lg-6 d-flex flex-column justify-content-center text-center p-5">
        <img
          className="img-fluid mx-auto"
          alt=""
          src="https://picsum.photos/400/400"
        />
        <h2>SPARCO DISH RACK</h2>
        <h4>Experience The Quality</h4>
        <div className="hot-deal mx-auto">OUR HOT NEW DEAL</div>
        <div className="buy-now mx-auto">BUY NOW</div>
      </div>

      <div className="best-seller-sub col-lg-6 d-flex flex-column align-self-stretch">
        <div className="sub-1 d-flex p-3">
          <div className="d-flex flex-column justify-content-around">
            <h2>SPARCO CHAPPALS</h2>
            <span>
              SEE MORE&nbsp;
              <i className="fas fa-arrow-right" />
            </span>
          </div>
          <img
            className="img-fluid ml-auto"
            alt=""
            src="https://picsum.photos/450/350"
          />
        </div>
        <div className="sub-2 d-flex p-3">
          <div className="d-flex flex-column justify-content-around">
            <h2>SPARCO CHAPPALS</h2>
            <span className="see-more">
              SEE MORE&nbsp;
              <i className="fas fa-arrow-right" />
            </span>
          </div>
          <img
            className="img-fluid ml-auto"
            alt=""
            src="https://picsum.photos/451/350"
          />
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
