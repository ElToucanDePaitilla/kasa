import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CollapseItem from "../components/CollapseItem";
import imageAbout from "../assets/images/banner/ImageHeaderAbout.png";
import collapsesData from '../datas/collapses-text.json'; // Importer les données JSON

const AboutPage = () => {
  return (
    <main>
      <Header />
      <Banner imageSrc={imageAbout} bannerType="about" /> {/* Classe 'about' */}
      <section className="content">
                {collapsesData.map((item) => (
                    <CollapseItem key={item.id} title={item.title} content={[item.content]} />
                ))}
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
