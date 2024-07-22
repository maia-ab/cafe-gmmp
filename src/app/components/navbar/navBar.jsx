import React from "react";
import Link from "next/link";
import rutas from "./rutas";

function NavBar() {
  return (

      <div className="hidden lg:block ml-auto">
        <ul className="flex gap-14 ml-auto ">
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

  );
}

export default NavBar;
