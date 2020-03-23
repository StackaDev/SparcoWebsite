import React from "react";
import { Carousel } from "react-responsive-carousel";
import ExploreQualtySliderItem from "./ExploreQualtySliderItem";

function ExploreQualitySlider(props) {
  const { width } = props;

  let centerSlidePercentage;
  if (width > 800) {
    centerSlidePercentage = 33.3;
  } else {
    centerSlidePercentage = 70;
  }
  return (
    <Carousel
      centerMode
      centerSlidePercentage={centerSlidePercentage}
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
    >
      <ExploreQualtySliderItem />
      <ExploreQualtySliderItem />
      <ExploreQualtySliderItem />
      <ExploreQualtySliderItem />
      <ExploreQualtySliderItem />
    </Carousel>
  );
}

export default ExploreQualitySlider;
