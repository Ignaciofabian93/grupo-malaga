"use client";

import { useState } from "react";
import logo from "@/app/assets/images/logo-small.png";
import Image from "next/image";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const sections = [
  {
    name: "Quiénes somos",
    ref: "#about",
  },
  {
    name: "Nuestros servicios",
    ref: "#services",
  },
  {
    name: "Contacto",
    ref: "#contact",
  },
];

const Item = ({
  name,
  ref,
  close,
}: {
  name: string;
  ref: string;
  close: () => void;
}) => {
  return (
    <a
      href={ref}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        close();
      }}
    >
      <li
        className={clsx(
          "list-none text-[#fff] cursor-pointer text-sm",
          "transition-colors duration-300 ease-in-out hover:text-[#c09d68]"
        )}
      >
        {name}
      </li>
    </a>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-[80px] bg-[#00252d] flex items-center justify-center relative z-50">
      <nav className="w-full h-full flex items-center justify-between px-4">
        <div className="w-1/3 max-w-[200px] h-full flex items-center justify-center">
          <Image src={logo} alt="logo" width={120} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:w-[40%] h-full items-center justify-evenly py-1 px-4">
          {sections.map((section) => (
            <Item
              key={section.name}
              name={section.name}
              ref={section.ref}
              close={() => setIsMenuOpen(false)}
            />
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <Menu
            className="text-white cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
            size={28}
          />
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <aside
        className={clsx(
          "fixed top-0 right-0 h-full w-2/3 max-w-xs bg-[#00252d] shadow-lg z-40",
          "transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="absolute top-4 right-4">
          <X
            className="text-white cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
            size={28}
            color="#fff"
          />
        </div>
        <ul className="flex flex-col items-center justify-center gap-6 mt-24">
          {sections.map((section) => (
            <Item
              key={section.name}
              name={section.name}
              ref={section.ref}
              close={() => setIsMenuOpen(false)}
            />
          ))}
        </ul>
        <div className="w-full absolute bottom-4 flex justify-center">
          <Image src={logo} alt="logo" width={120} />
        </div>
      </aside>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
