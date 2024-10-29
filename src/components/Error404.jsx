import React from 'react';

const Error404 = () => {
  return (
    <div className="msg404">
      <p className="NotFound404">404</p>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
  );
};

export default Error404;