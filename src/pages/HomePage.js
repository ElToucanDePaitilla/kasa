import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import imageHome from "../assets/images/banner/ImageHeaderHome.png";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Banner 
      imageSrc={imageHome}
      title={
        <div>
            Chez vous,<span className="title-break"> partout et ailleurs</span>
        </div>
      }
      bannerType="home" /> {/* Classe 'home' */}
      <Gallery />
      <Footer />
    </main>
  );
};

export default HomePage;

