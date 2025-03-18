import { useEffect, useState } from "react";
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

  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-background border-none outline-none">
      {/* Barra de progresso */}
      <div
        className="h-2 bg-teal-600 transition-all duration-200 ease-out-in "
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Cabeçalho */}
      <div className="flex items-center shadow-primary shadow justify-between px-8 py-2 text-primary border-b-primary bg-background">
        <h3 className="text-xl font-semibold">Portfólio</h3>
        <div className="flex gap-4">
          <Sheet>
            <SheetTrigger>
              <Button variant={"ghost"} className="hover:bg-transparent">
                <img src="/menu.png" alt="menu" width={16} height={16} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
