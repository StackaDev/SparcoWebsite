import React from "react";
import TopNav from "../components/TopNav/TopNav";
import Footer from "../components/Footer/Footer";
import "../public/static/sass/master.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "../components/Categories/Categories";

function MainLayout(props) {
  const { children, width } = props;
  return (
    <>
      <head>
        <script
          src="https://kit.fontawesome.com/b332fe29c5.js"
          crossOrigin="anonymous"
        />
      </head>
      <TopNav />
      {width !== undefined ? <Categories width={width} /> : <></>}
      {children}
      <Footer />
    </>
  );
}
export default MainLayout;
