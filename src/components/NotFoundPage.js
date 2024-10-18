import React from 'react';
//import '../styles/components/_notFoundPage.scss';

import Img404 from '../assets/images/error404/Img404.png';

const NotFoundPage = () => {
  return (
    <div className="msg404">
      <img src={Img404} alt="Erreur 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="#">Retourner sur la page d'accueil</a>
    </div>
  );
};

export default NotFoundPage;