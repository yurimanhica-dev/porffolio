import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

export default function HeaderMobile() {
  return (
    <div className="flex items-center shadow-primary shadow justify-between px-8 py-2 text-primary border-b-primary fixed top-0 right-0 left-0 z-50 bg-background">
      <h3 className="text-xl font-semibold ">Portfólio</h3>
      <div className="flex gap-4">
        <Sheet>
          <SheetTrigger>
            <Button variant={"ghost"} className="hover:bg-transparent click">
              <img src="/menu.png" alt="menu" width={16} height={16} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
