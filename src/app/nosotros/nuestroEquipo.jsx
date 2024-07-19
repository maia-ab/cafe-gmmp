import React from "react";
import ItemEquipo from "./itemEquipo";
import Titulo from "../components/titulo";

export default function NuestroEquipo() {
  return (
    <div className="flex flex-wrap justify-center bg-forest-green">
      <Titulo texto={"Nuestro equipo"} estilo="w-[500px] border-beige border-t m-2" color="beige" />
      <div className="flex flex-wrap justify-center bg-forest-green px-16">
        <ItemEquipo imagen="/persona5.jpg" nombre="Marcelo Almendra" />
        <ItemEquipo imagen="/persona6.jpg" nombre="Paula Juárez" />
        <ItemEquipo imagen="/persona7.jpg" nombre="Mónica Buendía" />
        <ItemEquipo imagen="/persona8.jpg" nombre="Gonzalo Martinez" />
      </div>
    </div>
  );
}
