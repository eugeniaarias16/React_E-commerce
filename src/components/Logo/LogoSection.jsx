import React from 'react';
import { LogoSectionBox } from './LogoStyles';
import { Link } from 'react-router-dom';

export const LogoSection = () => {
  return (
    <LogoSectionBox>
      <Link to="/">
        <img src="public\assets\Logo\Logo.svg" alt="Logo" />
      </Link>
    </LogoSectionBox>
  );
};
