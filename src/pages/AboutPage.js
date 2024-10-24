import React from "react";
import Header from "../components/Header";
import BannerAbout from "../components/BannerAbout";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
        <Header />
        <BannerAbout />
        <Collapse />
        <Footer />
      </div>
  );
};

export default Home;