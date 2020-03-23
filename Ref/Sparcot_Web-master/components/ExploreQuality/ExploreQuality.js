import React from "react";
import ExploreQualitySlider from "./ExploreQualitySlider";

function ExploreQuality(props) {
  const { width } = props; // Props Passed From Index.js
  return (
    <section className="exp-quality mt-5 pt-5">
      <div className="container">
        <h2 className="text-center">EXPLORE OUR QUALITY</h2>
        <p className="text-center">
          Lorem ipsum dolor sit am et, consectetur adipiscing elit, sed do eiusm
          od tem por incididunt ut labore et dolore m ag na aliqua. Ut enim ad m
          inim veniam , quis nostrud exercitation ullam co laboris nisi ut
          aliquip ex ea com m odo consequat.
        </p>
      </div>
      <ExploreQualitySlider width={width} />
    </section>
  );
}

export default ExploreQuality;
