import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import imageHome from "../assets/images/banner/ImageHeaderHome.png";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner imageSrc={imageHome} title="Chez vous, partout et ailleurs" bannerType="home" /> {/* Classe 'home' */}
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomePage;

