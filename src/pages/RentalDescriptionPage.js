import React from "react";
import { useParams } from "react-router-dom"; // Pour récupérer l'ID depuis l'URL
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import rentalData from "../datas/rentals-list.json";

const RentalDescriptionPage = () => {
  const { id } = useParams(); // Récupérer l'ID du bien depuis l'URL
  const rental = rentalData.find((bien) => bien.id === id); // Trouver le bien correspondant

  if (!rental) {
    return <div>Bien non trouvé</div>;
  }

  const { pictures } = rental;

  return (
    <div>
      <Header />
      <Carrousel pictures={pictures} />
      <div className="rental-details"></div>
      <Footer />
    </div>
  );
};

export default RentalDescriptionPage;
