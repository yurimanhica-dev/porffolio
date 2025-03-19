import { useEffect, useState } from "react";
import {
  FaAddressBook,
  FaLaptopCode,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

export default function HeaderMobile() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
      setIsOpen(false);
    }
  };
  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-background border-none outline-none">
      {/* Cabeçalho */}
      <div className="flex items-center shadow-primary shadow justify-between px-8 py-2 text-primary border-b-primary bg-background">
        <a href="/" className="text-xl font-semibold">
          Portfólio
        </a>
        <div className="flex gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Button variant={"ghost"} className="hover:bg-transparent">
                <img src="/menu.png" alt="menu" width={16} height={16} />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[90%]">
              <SheetHeader>
                <SheetDescription>
                  <div className="flex flex-col gap-4 items-center h-screen mt-10 text-white ">
                    <Button
                      className="w-full rounded-full "
                      onClick={() => scrollToSection("main")}
                    >
                      <HiHome />
                      <a href="#main" className="flex gap-2">
                        Página Inicial
                      </a>
                    </Button>
                    <Button
                      className="w-full rounded-full"
                      onClick={() => scrollToSection("experiencia")}
                    >
                      <FaLaptopCode />
                      <a href="#experiencia" className="flex gap-2">
                        Experiências | Tech
                      </a>
                    </Button>
                    <Button
                      className="w-full rounded-full"
                      onClick={() => scrollToSection("project")}
                    >
                      <FaProjectDiagram />
                      <a
                        href="#project"
                        className="flex gap-2"
                        onClick={() => scrollToSection("sobre-mim")}
                      >
                        Projetos
                      </a>
                    </Button>
                    <Button
                      className="w-full rounded-full"
                      onClick={() => scrollToSection("about")}
                    >
                      <FaUser />
                      <a href="about" className="flex gap-2">
                        Sobre Me
                      </a>
                    </Button>
                    <Button
                      className="w-full rounded-full cursor-pointer"
                      onClick={() => scrollToSection("about")}
                    >
                      <FaAddressBook />
                      <a href="#about" className="flex gap-2">
                        Contatos
                      </a>
                    </Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div
        className="h-2 bg-cyan-900 transition-all duration-200 ease-out-in "
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
