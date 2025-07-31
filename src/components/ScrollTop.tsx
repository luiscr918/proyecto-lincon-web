import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Solo hace scroll al top cuando cambia la ruta (pathname)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;