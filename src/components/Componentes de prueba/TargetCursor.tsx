import { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";

interface TargetCursorLocalProps {
  targetSelector?: string;
  spinDuration?: number;
  containerSelector?: string;
}

const TargetCursorLocal = ({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  containerSelector = ".contact-container",
}: TargetCursorLocalProps) => {
  // Definir los tipos correctamente
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cornersRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const spinTl = useRef<GSAPTimeline | null>(null); // GSAPTimeline
  const containerRef = useRef<HTMLElement | null>(null);

  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
      parallaxStrength: 0.00005,
    }),
    []
  );

  const moveCursor = useCallback((x: number, y: number) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    const container = document.querySelector(containerSelector) as HTMLElement;
    if (!container) return;

    containerRef.current = container;
    container.style.cursor = "none";

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll(".target-cursor-corner");

    let activeTarget: HTMLElement | null = null;
    let currentTargetMove: ((ev: MouseEvent) => void) | null = null;
    let currentLeaveHandler: (() => void) | null = null;
    let isAnimatingToTarget = false;
    let resumeTimeout: NodeJS.Timeout | null = null;
    let isInsideContainer = false;

    const cleanupTarget = (target: HTMLElement) => {
      if (currentTargetMove) {
        target.removeEventListener("mousemove", currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener("mouseleave", currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: -1000,
      y: -1000,
      opacity: 0,
    });

    const createSpinTimeline = () => {
      if (spinTl.current) {
        spinTl.current.kill();
      }
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursor, {
          rotation: "+=360",
          duration: spinDuration,
          ease: "none",
        });
    };

    const containerEnterHandler = () => {
      if (!isInsideContainer) {
        isInsideContainer = true;
        gsap.to(cursor, { opacity: 1, duration: 0.2 });
        createSpinTimeline();
      }
    };

    const containerLeaveHandler = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const { clientX, clientY } = e;

      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        isInsideContainer = false;
        gsap.to(cursor, { opacity: 0, duration: 0.2 });
        spinTl.current?.kill();

        if (activeTarget) {
          cleanupTarget(activeTarget);
          activeTarget = null;
        }
      }
    };

    const moveHandler = (e: MouseEvent) => {
      if (isInsideContainer) {
        moveCursor(e.clientX, e.clientY);
      }
    };

    container.addEventListener("mouseenter", containerEnterHandler);
    container.addEventListener("mouseleave", containerLeaveHandler);
    window.addEventListener("mousemove", moveHandler);

    const enterHandler = (e: MouseEvent) => {
      if (!isInsideContainer) return;

      const directTarget = e.target as HTMLElement;

      if (!container.contains(directTarget)) return;

      const allTargets: HTMLElement[] = [];
      let current: HTMLElement | null = directTarget;
      while (current && current !== document.body) {
        if (current.matches(targetSelector)) {
          allTargets.push(current);
        }
        current = current.parentElement;
      }

      const target = allTargets[0] || null;
      if (!target || !cursorRef.current || !cornersRef.current) return;

      if (activeTarget === target) return;

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;

      gsap.killTweensOf(cursorRef.current, "rotation");
      spinTl.current?.pause();
      gsap.set(cursorRef.current, { rotation: 0 });

      const updateCorners = (mouseX?: number, mouseY?: number) => {
        if (!cornersRef.current) return;

        const rect = target.getBoundingClientRect();
        const cursorRect = cursorRef.current?.getBoundingClientRect();

        if (!cursorRect) return;

        const cursorCenterX = cursorRect.left + cursorRect.width / 2;
        const cursorCenterY = cursorRect.top + cursorRect.height / 2;

        const [tlc, trc, brc, blc] = Array.from(
          cornersRef.current
        ) as HTMLElement[];
        const { borderWidth, cornerSize, parallaxStrength } = constants;

        const tlOffset: { x: number; y: number } = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.top - cursorCenterY - borderWidth,
        };
        const trOffset: { x: number; y: number } = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.top - cursorCenterY - borderWidth,
        };
        const brOffset: { x: number; y: number } = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };
        const blOffset: { x: number; y: number } = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };

        if (mouseX !== undefined && mouseY !== undefined) {
          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          const mouseOffsetX = (mouseX - targetCenterX) * parallaxStrength;
          const mouseOffsetY = (mouseY - targetCenterY) * parallaxStrength;

          tlOffset.x += mouseOffsetX;
          tlOffset.y += mouseOffsetY;
          trOffset.x += mouseOffsetX;
          trOffset.y += mouseOffsetY;
          brOffset.x += mouseOffsetX;
          brOffset.y += mouseOffsetY;
          blOffset.x += mouseOffsetX;
          blOffset.y += mouseOffsetY;
        }

        const tl = gsap.timeline();
        const corners = [tlc, trc, brc, blc];
        const offsets = [tlOffset, trOffset, brOffset, blOffset];

        corners.forEach((corner, index) => {
          tl.to(
            corner,
            {
              x: offsets[index].x,
              y: offsets[index].y,
              duration: 0.2,
              ease: "power2.out",
            },
            0
          );
        });
      };

      isAnimatingToTarget = true;
      updateCorners();

      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      let moveThrottle: number | null = null; // Tipo correcto para throttle
      const targetMove = (ev: MouseEvent) => {
        if (moveThrottle || isAnimatingToTarget) return;
        moveThrottle = requestAnimationFrame(() => {
          updateCorners(ev.clientX, ev.clientY);
          moveThrottle = null; // Restablecer después de la animación
        });
      };

      const leaveHandler = () => {
        activeTarget = null;
        isAnimatingToTarget = false;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current);
          gsap.killTweensOf(corners);

          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
          ];

          const tl = gsap.timeline();
          corners.forEach((corner, index) => {
            tl.to(
              corner,
              {
                x: positions[index].x,
                y: positions[index].y,
                duration: 0.3,
                ease: "power3.out",
              },
              0
            );
          });
        }

        resumeTimeout = setTimeout(() => {
          if (
            !activeTarget &&
            cursorRef.current &&
            spinTl.current &&
            isInsideContainer
          ) {
            const currentRotation = gsap.getProperty(
              cursorRef.current,
              "rotation"
            );
            const normalizedRotation = Number(currentRotation) % 360;

            spinTl.current.kill();
            spinTl.current = gsap
              .timeline({ repeat: -1 })
              .to(cursorRef.current, {
                rotation: "+=360",
                duration: spinDuration,
                ease: "none",
              });

            gsap.to(cursorRef.current, {
              rotation: normalizedRotation,
              duration: 0,
            });
          }
        }, 500);
      };

      target.addEventListener("mousemove", targetMove);
      target.addEventListener("mouseleave", leaveHandler);
    };

    document.addEventListener("mouseenter", enterHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      container.removeEventListener("mouseenter", containerEnterHandler);
      container.removeEventListener("mouseleave", containerLeaveHandler);
      document.removeEventListener("mouseenter", enterHandler);
    };
  }, [spinDuration, targetSelector, containerSelector, constants, moveCursor]);

  return <div ref={cursorRef} className="cursor" />;
};

export default TargetCursorLocal;
