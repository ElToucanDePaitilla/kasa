import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrousel from '../components/Carrousel';
import RentalDescription from '../components/RentalDescription';
import rentalData from '../datas/rentals-list.json';

const RentalDescriptionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const rental = rentalData.find((bien) => bien.id === id);


  useEffect(() => {
    if (!rental) {
      navigate("/not-found", { replace: true });
    }
  }, [rental, navigate]);

 
  if (!rentalData || rentalData.length === 0) {
    return <div>Erreur : Données de location non disponibles.</div>;
  }

 
  if (!rental) {
    return null; 
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