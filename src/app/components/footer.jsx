import React from "react";

const integrantes = [
  {
    nombre: "Maximiliano Almada",
    github: "https://github.com/maximilianoalmada",
  },
  {
    nombre: "Maia Barrionuevo",
    github: "https://github.com/maia-ab",
  },
  {
    nombre: "Priscila Jofre",
    github: "https://github.com/Pri-PJ",
  },
  {
    nombre: "Giovanni Martini",
    github: "https://github.com/Giovanni-Martini",
  },
];

function Footer() {
  return (
    <div className="bg-black h-64 md:h-40 flex items-center justify-center">
      <ul className="lg:flex lg:justify-center lg:gap-16">
        {integrantes.map((integrante, i) => (
          <li className="text-white text-2xl" key={i}>
            <a href={integrante.github} target="_blank" rel="noopener noreferrer">
              {integrante.nombre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
