import { IoIosAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

function SumarRestar({ item }) {
  const { sumarCantidad, restarCantidad, agregarAOrden, eliminarDeOrden } =
    useContext(MenuContext);

  function sumar() {
    sumarCantidad(item.id);
  }

  function restar() {
    if (item.cantidad > 0) {
      restarCantidad(item.id);
    }
  }

  return (
    <div className="flex gap-2 items-center">
      <IoIosAddCircleOutline onClick={sumar} size={50} color="beige" />
      <div>
        <p className="text-xl">{item.cantidad}</p>
      </div>
      <IoRemoveCircleOutline onClick={restar} size={50} color="beige" />
    </div>
  );
}

export default SumarRestar;
