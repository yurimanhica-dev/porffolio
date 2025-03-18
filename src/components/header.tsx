import { useEffect, useState } from "react";
import HeaderDesktop from "./header-desktop";
import HeaderMobile from "./header-mobile";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // sm = 640px no Tailwind
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return <header>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</header>;
};

export default Header;
