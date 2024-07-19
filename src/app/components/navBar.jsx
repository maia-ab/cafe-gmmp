import React from "react";
import Link from "next/link";

const navLinks = [
  {
    href: "/nosotros",
    label: "Nosotros",
  },
  {
    href: "/recetas",
    label: "Recetas",
  },
  ,
  {
    href: "/#menu",
    label: "Menu",
  },
  ,
  {
    href: "/#contacto",
    label: "Contacto",
  },
];

function NavBar() {
  return (
    <>
      <ul className="flex gap-14 ml-auto ">
        {navLinks.map((link) => (
          <li className="text-beige text-3xl hover:text-[#FFFCF8]" key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavBar;
