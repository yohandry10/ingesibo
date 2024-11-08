// src/components/Preloader.tsx
import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="morphing-shape"></div>
      <div className="rotating-circle"></div> {/* Círculo de carga añadido */}
    </div>
  );
};

export default Preloader;