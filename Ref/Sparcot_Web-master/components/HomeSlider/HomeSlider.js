import React from "react";
import { Carousel } from "react-responsive-carousel";
import HomeSliderItem from "./HomeSliderItem";

function HomeSlider() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <HomeSliderItem />
      <HomeSliderItem />
      <HomeSliderItem />
      <HomeSliderItem />
    </Carousel>
  );
}
export default HomeSlider;
