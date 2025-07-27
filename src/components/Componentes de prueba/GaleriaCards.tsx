import { useEffect } from "react";
import { ScrollStackItem } from "../../components/Componentes de prueba/ScrollStack";

const DemoScrollStackItems = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".scroll-stack-card");
    const scrollContainer = document.querySelector(".scroll-stack-inner");

    if (!scrollContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        root: scrollContainer,
        threshold: 0.6,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="scroll-stack-inner">
      <ScrollStackItem>
        <h2 className="text-emerald-300">
          ¿Cuáles son los horarios de la escuela?
        </h2>
        <p style={{ textAlign: "center" }}>
          Los horarios de la escuela son de lunes a viernes, de 8:00 AM a 4:00
          PM.
        </p>
      </ScrollStackItem>

      <ScrollStackItem>
        <h2 className="text-emerald-300">
          ¿Cuáles son los requisitos para inscribir a mi hijo?
        </h2>
        <p style={{ textAlign: "center" }}>
          Necesitarás el certificado de nacimiento, carnet de vacunas
          actualizado y el pago de la matrícula.
        </p>
      </ScrollStackItem>

      <ScrollStackItem>
        <h2 className="text-emerald-300">
          ¿Se ofrecen actividades extracurriculares?
        </h2>
        <p style={{ textAlign: "center" }}>
          Sí, ofrecemos deportes, arte, música, y clases de inglés.
        </p>
      </ScrollStackItem>
    </div>
  );
};

export default DemoScrollStackItems;
