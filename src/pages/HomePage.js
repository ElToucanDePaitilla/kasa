import React from "react";
import Header from "../components/Header";
import BannerHome from "../components/BannerHome";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
        <Header />
        <BannerHome />
        <Gallery />
        <Footer />
      </div>
  );
};

export default Home;