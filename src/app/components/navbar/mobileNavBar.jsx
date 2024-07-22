"use client";

import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import rutas from "./rutas";
import Link from "next/link";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between md:hidden">
      <div className="ml-auto" onClick={handleOpen}>
        <IoMenu size={50} color="beige" />
      </div>
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-forest-green text-black transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" fixed top-10 right-20" onClick={handleClose}>
          <IoCloseOutline size={50} color="beige" />
        </div>
        <div onClick={handleClose}>
          <ul className="flex flex-col gap-9">
            {rutas.map((link) => (
              <li
                className="text-beige text-3xl hover:text-[#FFFCF8]"
                key={link.href}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={handleClose}></div>
      </div>
    </div>
  );
}

export default MobileNavbar;
