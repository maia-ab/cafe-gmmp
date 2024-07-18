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
      <ul className="">
        {navLinks.map((link) => (
          <li className="text-red-700" key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavBar;
