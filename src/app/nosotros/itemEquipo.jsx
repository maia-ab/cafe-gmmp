import React from "react";

export default function ItemEquipo(props) {
  return (
    <div className="flex flex-col items-center ml-20">
      <div className="w-[250px] h-[220px] m-5  rounded-[10px_10px_120px_120px] flex items-center justify-center overflow-hidden ">
        <img className="object-cover" src={props.imagen} alt="Miembro del equipo" />
      </div>
      <div className="flex flex-col gap-3 items-center rounded-b-3xl h-20 text-beige">
        <p className="text-3xl">{props.nombre}</p>
      </div>
    </div>
  );
}


