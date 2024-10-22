import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Carrousel from "../components/Carrousel";
import rentalData from "../datas/rentals-list.json";

const RentalDescriptionPage = () => {
  const rental = rentalData[0]; // Exemple d'utilisation avec le premier élément
  const { pictures } = rental;

  return (
    <div>
      <Header />
      <Carrousel pictures={pictures} />
      <Footer />
    </div>
  );
};

export default RentalDescriptionPage;
