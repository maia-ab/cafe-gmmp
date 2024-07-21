"use client";
import { createContext } from "react";
import { useState } from "react";
import menuLista from "../data/data";

export const MenuContext = createContext();

export function MenuContextProvider(props) {
  const [menu, setMenu] = useState(menuLista);
  const [orden, setOrden] = useState([]);

  function actualizarOrden() {
    setOrden(menu.filter((item) => item.cantidad > 0));
  }

  function sumarCantidad(id) {
    setMenu(
      menu.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  }

  function restarCantidad(id) {
    setMenu(
      menu.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      )
    );
  }

  return (
    <MenuContext.Provider
      value={{
        menu,
        orden,
        sumarCantidad,
        restarCantidad,
        actualizarOrden,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}
