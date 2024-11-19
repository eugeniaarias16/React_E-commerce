import React from 'react';
import { LogoSectionBox } from './LogoStyles';
import { Link } from 'react-router-dom';

export const LogoSection = () => {
  // Manejador de error para cambiar la imagen si falla la carga de la original
  const handleImageError = (event) => {
    event.target.src = '/assets/Logo/Logo.svg';
  };

  return (
    <LogoSectionBox>
      <Link to="/">
        <img 
          src="public/assets/Logo/Logo.svg" 
          alt="Logo" 
          onError={handleImageError}
        />
      </Link>
    </LogoSectionBox>
  );
};
