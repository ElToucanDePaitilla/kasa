import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import imageAbout from "../assets/images/banner/ImageHeaderAbout.png";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Banner imageSrc={imageAbout} bannerType="about" /> {/* Classe 'about' */}
      <Collapse />
      <Footer />
    </div>
  );
};

export default AboutPage;
