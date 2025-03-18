import { useEffect, useState } from "react";
import HeaderDesktop from "./header-desktop";
import HeaderMobile from "./header-mobile";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true); // Inicialmente null para evitar renderização prematura

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // sm = 768px no Tailwind
    };

    checkScreenSize(); // Verifica o tamanho da tela imediatamente
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Se isMobile ainda for null, não renderiza nada
  if (isMobile === null) {
    return null;
  }

  return <header>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</header>;
};

export default Header;
