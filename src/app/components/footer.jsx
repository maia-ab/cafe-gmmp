import React from "react";

const nombres = ["Maximiliano Almada","Maia Barrionuevo", "Priscila Jofre", "Giovanni Martini"];

function Footer() {
  return <div className="bg-black h-40 flex items-center justify-center">
      <ul className="lg:flex lg:justify-center lg:gap-16">
        {nombres.map((nombre, i) => (
          <li className="text-white" key={i}>
            {nombres[i]}
          </li>
        ))}
      </ul>
  </div>;
}

export default Footer;
