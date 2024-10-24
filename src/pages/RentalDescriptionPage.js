import React from "react";
import { useParams } from "react-router-dom"; // Pour récupérer l'ID depuis l'URL
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import RentalDescription from "../components/RentalDescription";
import rentalData from "../datas/rentals-list.json";

const RentalDescriptionPage = () => {
  const { id } = useParams(); // Récupérer l'ID du bien depuis l'URL
  const rental = rentalData.find((bien) => bien.id === id); // Trouver le bien correspondant

  if (!rental) {
    return <div>Bien non trouvé</div>; // Gestion d'erreur si le bien n'est pas trouvé
  }

  const { pictures } = rental;

  return (
    <div>
      <Header />
      <Carrousel pictures={pictures} />
      
      {/* Ajout du composant RentalDescription */}
      <div className="rental-details">
        <RentalDescription rental={rental} />
      </div>

      <Footer />
    </div>
  );
};

export default RentalDescriptionPage;

