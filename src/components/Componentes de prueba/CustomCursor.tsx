// src/components/CustomCursor.tsx
import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cornersRef = useRef<(HTMLDivElement | null)[]>([]);

  // Función para asignar el ref de cada esquina correctamente
  const setCornerRef = (index: number) => (el: HTMLDivElement | null) => {
    cornersRef.current[index] = el;
  };

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;
    const corners = cornersRef.current;
    let isOverTarget = false;

    // Inicializar cursor fuera de la vista
    gsap.set(cursor, {
      x: -1000,
      y: -1000,
      opacity: 0,
    });

    // Función para mover cursor
    const moveCursor = (e: MouseEvent) => {
      if (isOverTarget) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power3.out",
        });
      }
    };

    // Función para mostrar cursor en cuadrados
    const showCursor = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      isOverTarget = true;

      gsap.to(cursor, { opacity: 1, duration: 0.2 });

      const updateCorners = () => {
        const rect = target.getBoundingClientRect();
        const cursorRect = cursor.getBoundingClientRect();

        const cursorCenterX = cursorRect.left + cursorRect.width / 2;
        const cursorCenterY = cursorRect.top + cursorRect.height / 2;

        const positions = [
          { x: rect.left - cursorCenterX - 3, y: rect.top - cursorCenterY - 3 },
          { x: rect.right - cursorCenterX + 3 - 12, y: rect.top - cursorCenterY - 3 },
          { x: rect.right - cursorCenterX + 3 - 12, y: rect.bottom - cursorCenterY + 3 - 12 },
          { x: rect.left - cursorCenterX - 3, y: rect.bottom - cursorCenterY + 3 - 12 },
        ];

        corners.forEach((corner, index) => {
          if (corner) {
            gsap.to(corner, {
              x: positions[index].x,
              y: positions[index].y,
              duration: 0.2,
              ease: "power2.out",
            });
          }
        });
      };

      updateCorners();
      target.addEventListener("mousemove", updateCorners);

      target.addEventListener("mouseleave", () => {
        target.removeEventListener("mousemove", updateCorners);
      });
    };

    // Función para ocultar cursor
    const hideCursor = () => {
      isOverTarget = false;
      gsap.to(cursor, { opacity: 0, duration: 0.2 });

      // Resetear posiciones de esquinas
      corners.forEach((corner) => {
        if (corner) {
          gsap.to(corner, {
            x: -18,
            y: -18,
            duration: 0.3,
            ease: "power3.out",
          });
        }
      });
    };

    // Agregar eventos a los elementos con clase .cursor-target
    const targets = document.querySelectorAll<HTMLElement>(".cursor-target");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", showCursor);
      target.addEventListener("mouseleave", hideCursor);
    });

    // Mover cursor globalmente
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", showCursor);
        target.removeEventListener("mouseleave", hideCursor);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "#000",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      {["top-left", "top-right", "bottom-right", "bottom-left"].map((corner, index) => (
        <div
          key={corner}
          ref={setCornerRef(index)}
          style={{
            width: "12px",
            height: "12px",
            border: "3px solid #000",
            borderRight: "none",
            borderBottom: "none",
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;