import { useEffect, useState } from "react";
import {
  FaAddressBook,
  FaLaptopCode,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";

export default function HeaderDesktop() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-background border-none outline-none">
      <div className="flex items-center shadow-primary shadow justify-between px-8 lg:px-24 xl:px-40 mx-auto py-2 text-primary bg-background">
        <a href="/" className="text-xl font-semibold">
          Portfólio
        </a>
        <div className="text-sm ">
          <ul className="flex gap-4 justify-center lg:gap-8 xl:gap-12">
            <li className="flex items-center gap-1 justify-center">
              <HiHome className="text-primary" />
              <a href="/" onClick={() => scrollToSection("main")}>
                Página Inicial
              </a>
            </li>

            <li className="flex items-center gap-1 justify-center">
              <FaLaptopCode className="text-primary" />
              <a
                href="#experiencia"
                onClick={() => scrollToSection("experiencia")}
              >
                Experiências | Tech
              </a>
            </li>
            <li className="flex items-center gap-1 justify-center">
              <FaProjectDiagram className="text-primary" />
              <a href="#project" onClick={() => scrollToSection("#project")}>
                Projetos
              </a>
            </li>
            <li className="flex items-center gap-1 justify-center">
              <FaUser className="text-primary" />
              <a href="#sobre-mim" onClick={() => scrollToSection("sobre-mim")}>
                Sobre Me
              </a>
            </li>
            <li className="flex items-center gap-1 justify-center">
              <FaAddressBook className="text-primary" />
              <a href="/">Contatos</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="h-2 bg-cyan-900 transition-all duration-200 ease-out-in "
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
