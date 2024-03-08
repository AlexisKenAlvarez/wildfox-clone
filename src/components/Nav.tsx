import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";
import Logo from '../assets/logo.svg'

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = [
    {
      label: "Home",
      link: "",
    },

    {
      label: "About",
      link: "",
    },
    {
      label: "Tokenomics",
      link: "",
    },

  ];

  return (
    <nav
      className={cn(
        "w-full lg:py-8 py-7 text-white transition-all ease-in-out duration-300 font-secondary fixed top-0 left-0 px-6 bg-white/0 z-30",
        {
          "!py-4 bg-white/10 backdrop-blur-sm": scrollPosition > 100,
        }
      )}
    >
      <div className="flex items-center mx-auto justify-center">
        <div className="w-full grid lg:place-content-start">
          <img src={Logo} alt="mini_logo" className="w-344" />
        </div>
        <ul className="w-full hidden items-center justify-center gap-x-10 lg:flex text-black font-bold">
          {navList.map((items) => (
            <li key={items.label}>{items.label}</li>
          ))}
        </ul>
        <div className="w-full flex items-center justify-end gap-x-3 lg:justify-end">
          <Button className=" text-black px-7 sm:block hidden">
            Trade $OMEGA
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden block">
                <AlignJustify />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="w-full h-full bg-white font-secondary">
                <img src="/logo.webp" alt="Logo" className="w-14 mx-auto" />
                <ul className="w-full flex flex-col items-center justify-center gap-y-10 mt-10">
                  {navList.map((items) => (
                    <li key={items.label}>{items.label}</li>
                  ))}
                </ul>
              </div>  
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Nav;