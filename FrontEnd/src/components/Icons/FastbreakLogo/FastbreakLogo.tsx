import React from 'react';
import logo from './Fastbreak Logo - Color.png';

interface FastbreakLogoProps {
  size: number;
}

function FastbreakLogo({ size: width }: FastbreakLogoProps) {
  return (
    <header>
      <img src={logo} alt="Logo" style={{ width, height: 'auto' }} />
    </header>
  );
}

export default FastbreakLogo;
