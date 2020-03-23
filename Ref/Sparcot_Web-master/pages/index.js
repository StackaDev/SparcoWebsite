/* eslint-disable no-undef */
import React, { Component } from "react";
import MainLayout from "../layout/MainLayout";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import ExploreQuality from "../components/ExploreQuality/ExploreQuality";
import BestSeller from "../components/BestSeller/BestSeller";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Collections from "../components/Collections/Collections";
import OurMarket from "../components/OurMarket/OurMarket";
import OurClients from "../components/OurClients/OurClients";
import OurBrands from "../components/OurBrands/OurBrands";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width
    };
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    return (
      <MainLayout width={width}>
        <HomeSlider />
        {width !== undefined ? <ExploreQuality width={width} /> : <></>}
        <BestSeller />
        <HomeBanner />
        <Collections />
        <OurMarket />
        <OurClients />
        <OurBrands />
      </MainLayout>
    );
  }
}

export default Home;
