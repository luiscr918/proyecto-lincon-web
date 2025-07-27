import { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";

const TargetCursorLocal = ({
    targetSelector = ".cursor-target",
    spinDuration = 2,
    containerSelector = ".contact-container" // Nuevo: selector del contenedor
}) => {
    const cursorRef = useRef(null);
    const cornersRef = useRef(null);
    const spinTl = useRef(null);
    const containerRef = useRef(null);

    const constants = useMemo(
        () => ({
            borderWidth: 3,
            cornerSize: 12,
            parallaxStrength: 0.00005,
        }),
        []
    );

    const moveCursor = useCallback((x, y) => {
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

        // Encontrar el contenedor específico
        const container = document.querySelector(containerSelector);
        if (!container) return;
        
        containerRef.current = container;

        // Solo ocultar cursor en el contenedor específico
        container.style.cursor = 'none';

        const cursor = cursorRef.current;
        cornersRef.current = cursor.querySelectorAll(".target-cursor-corner");

        let activeTarget = null;
        let currentTargetMove = null;
        let currentLeaveHandler = null;
        let isAnimatingToTarget = false;
        let resumeTimeout = null;
        let isInsideContainer = false;

        const cleanupTarget = (target) => {
            if (currentTargetMove) {
                target.removeEventListener("mousemove", currentTargetMove);
            }
            if (currentLeaveHandler) {
                target.removeEventListener("mouseleave", currentLeaveHandler);
            }
            currentTargetMove = null;
            currentLeaveHandler = null;
        };

        // Inicializar cursor fuera de la vista
        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
            x: -1000,
            y: -1000,
            opacity: 0
        });

        const createSpinTimeline = () => {
            if (spinTl.current) {
                spinTl.current.kill();
            }
            spinTl.current = gsap
                .timeline({ repeat: -1 })
                .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });
        };

        // Evento para detectar cuando el mouse entra al contenedor
        const containerEnterHandler = (e) => {
            if (!isInsideContainer) {
                isInsideContainer = true;
                gsap.to(cursor, { opacity: 1, duration: 0.2 });
                createSpinTimeline();
            }
        };

        // Evento para detectar cuando el mouse sale del contenedor
        const containerLeaveHandler = (e) => {
            // Verificar si realmente salió del contenedor
            const rect = container.getBoundingClientRect();
            const { clientX, clientY } = e;
            
            if (clientX < rect.left || clientX > rect.right || 
                clientY < rect.top || clientY > rect.bottom) {
                isInsideContainer = false;
                gsap.to(cursor, { opacity: 0, duration: 0.2 });
                spinTl.current?.kill();
                
                if (activeTarget) {
                    cleanupTarget(activeTarget);
                    activeTarget = null;
                }
            }
        };

        // Solo mover cursor cuando esté dentro del contenedor
        const moveHandler = (e) => {
            if (isInsideContainer) {
                moveCursor(e.clientX, e.clientY);
            }
        };

        container.addEventListener("mouseenter", containerEnterHandler);
        container.addEventListener("mouseleave", containerLeaveHandler);
        window.addEventListener("mousemove", moveHandler);

        const enterHandler = (e) => {
            // Solo procesar si estamos dentro del contenedor
            if (!isInsideContainer) return;
            
            const directTarget = e.target;

            // Verificar que el target esté dentro del contenedor
            if (!container.contains(directTarget)) return;

            const allTargets = [];
            let current = directTarget;
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

            const updateCorners = (mouseX, mouseY) => {
                const rect = target.getBoundingClientRect();
                const cursorRect = cursorRef.current.getBoundingClientRect();

                const cursorCenterX = cursorRect.left + cursorRect.width / 2;
                const cursorCenterY = cursorRect.top + cursorRect.height / 2;

                const [tlc, trc, brc, blc] = Array.from(cornersRef.current);

                const { borderWidth, cornerSize, parallaxStrength } = constants;

                let tlOffset = {
                    x: rect.left - cursorCenterX - borderWidth,
                    y: rect.top - cursorCenterY - borderWidth,
                };
                let trOffset = {
                    x: rect.right - cursorCenterX + borderWidth - cornerSize,
                    y: rect.top - cursorCenterY - borderWidth,
                };
                let brOffset = {
                    x: rect.right - cursorCenterX + borderWidth - cornerSize,
                    y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
                };
                let blOffset = {
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

            let moveThrottle = null;
            const targetMove = (ev) => {
                if (moveThrottle || isAnimatingToTarget) return;
                moveThrottle = requestAnimationFrame(() => {
                    const mouseEvent = ev;
                    updateCorners(mouseEvent.clientX, mouseEvent.clientY);
                    moveThrottle = null;
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
                    if (!activeTarget && cursorRef.current && spinTl.current && isInsideContainer) {
                        const currentRotation = gsap.getProperty(
                            cursorRef.current,
                            "rotation"
                        );
                        const normalizedRotation = currentRotation % 360;

                        spinTl.current.kill();
                        spinTl.current = gsap
                            .timeline({ repeat: -1 })
                            .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });

                        gsap.to(cursorRef.current, {
                            rotation: normalizedRotation + 360,
                            duration: spinDuration * (1 - normalizedRotation / 360),
                            ease: "none",
                            onComplete: () => {
                                spinTl.current?.restart();
                            },
                        });
                    }
                    resumeTimeout = null;
                }, 50);

                cleanupTarget(target);
            };

            currentTargetMove = targetMove;
            currentLeaveHandler = leaveHandler;

            target.addEventListener("mousemove", targetMove);
            target.addEventListener("mouseleave", leaveHandler);
        };

        container.addEventListener("mouseover", enterHandler, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveHandler);
            container.removeEventListener("mouseenter", containerEnterHandler);
            container.removeEventListener("mouseleave", containerLeaveHandler);
            container.removeEventListener("mouseover", enterHandler);

            if (activeTarget) {
                cleanupTarget(activeTarget);
            }

            spinTl.current?.kill();
            if (containerRef.current) {
                containerRef.current.style.cursor = 'auto';
            }
        };
    }, [targetSelector, spinDuration, moveCursor, constants, containerSelector]);

    return (
        <div ref={cursorRef} className="target-cursor-wrapper" style={{
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9999,
            opacity: 0
        }}>
            <div className="target-cursor-dot" style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#000',
                borderRadius: '50%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }} />
            <div className="target-cursor-corner corner-tl" style={{
                width: '12px',
                height: '12px',
                border: '3px solid #000',
                borderRight: 'none',
                borderBottom: 'none',
                position: 'absolute',
                top: '-18px',
                left: '-18px'
            }} />
            <div className="target-cursor-corner corner-tr" style={{
                width: '12px',
                height: '12px',
                border: '3px solid #000',
                borderLeft: 'none',
                borderBottom: 'none',
                position: 'absolute',
                top: '-18px',
                right: '-18px'
            }} />
            <div className="target-cursor-corner corner-br" style={{
                width: '12px',
                height: '12px',
                border: '3px solid #000',
                borderLeft: 'none',
                borderTop: 'none',
                position: 'absolute',
                bottom: '-18px',
                right: '-18px'
            }} />
            <div className="target-cursor-corner corner-bl" style={{
                width: '12px',
                height: '12px',
                border: '3px solid #000',
                borderRight: 'none',
                borderTop: 'none',
                position: 'absolute',
                bottom: '-18px',
                left: '-18px'
            }} />
        </div>
    );
};

export default TargetCursorLocal;