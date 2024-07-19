import React from "react";

export default function ItemEquipo(props) {
  return (
    <div className="flex flex-col items-center ml-20">
      <div className="w-[250px] h-[220px] m-5 rounded-md rounded-b-full flex items-center justify-center overflow-hidden ">
        <img className="object-cover" src={props.imagen} alt="Miembro del equipo" />
      </div>
      <div className="flex flex-col gap-3 items-center rounded-b-3xl h-20 text-beige">
        <p className="text-3xl">{props.nombre}</p>
      </div>
    </div>
  );
}


// export default function ItemEquipo() {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="w-[250px] h-[220px] m-5 rounded-md rounded-b-full overflow-hidden">
//         <img className="object-cover w-full h-full" src="/persona.jpeg" alt="persona" />
//       </div>
//       <div className="flex flex-col items-center gap-3 rounded-b-3xl text-beige">
//         <p className="text-3xl">Nombre Apellido</p>
//       </div>
//     </div>
//   );
// }