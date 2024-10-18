import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";

import ImageHeaderHome from "../../assets/images/banner/ImageHeaderHome.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={ImageHeaderHome} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;