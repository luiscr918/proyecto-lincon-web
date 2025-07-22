import React from "react";

import "../styles/scrollTransicion.css";
import { useScrollAnimation } from "../scroll/scrolTransicion";

type Props = {
  children: React.ReactNode;
};

export const ScrollTransition: React.FC<Props> = ({ children }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`scroll-transition ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};
