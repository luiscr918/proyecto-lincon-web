// src/components/Componentes de prueba/GaleriaCards.tsx
import React from 'react';
import { ScrollStackItem } from './ScrollStack';

const DemoScrollStackItems = () => {
  return (
    <>
      <ScrollStackItem>
        <h2>¿Cuáles son los horarios de la escuela?</h2>
        <p style={{ textAlign: "center" }}>
          Los horarios de la escuela son de lunes a viernes, de 8:00 AM a 4:00 PM.
        </p>
      </ScrollStackItem>

      <ScrollStackItem>
        <h2>¿Cuáles son los requisitos para inscribir a mi hijo?</h2>
        <p style={{ textAlign: "center" }}>
          Necesitarás el certificado de nacimiento, carnet de vacunas actualizado y el pago de la matrícula.
        </p>
      </ScrollStackItem>

      <ScrollStackItem>
        <h2>¿Se ofrecen actividades extracurriculares?</h2>
        <p style={{ textAlign: "center" }}>
          Sí, ofrecemos deportes, arte, música, y clases de inglés.
        </p>
      </ScrollStackItem>
    </>
  );
};

export default DemoScrollStackItems;
