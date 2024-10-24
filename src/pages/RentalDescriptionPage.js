import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrousel from '../components/Carrousel';
import RentalDescription from '../components/RentalDescription';
import rentalData from '../datas/rentals-list.json';

const RentalDescriptionPage = () => {
  const { id } = useParams();
  
  // Vérifie que rentalData est bien chargé et contient des éléments
  if (!rentalData || rentalData.length === 0) {
    return <div>Erreur : Données de location non disponibles.</div>;
  }

  const rental = rentalData.find((bien) => bien.id === id);

  if (!rental) {
    return <div>Bien non trouvé</div>;
  }

  return (
    <div>
      <Header />
      <Carrousel pictures={rental.pictures} />
      <RentalDescription rental={rental} />
      <Footer />
    </div>
  );
};

export default RentalDescriptionPage;



