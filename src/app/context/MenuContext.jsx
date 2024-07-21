"use client";
import { createContext } from "react";
import { useState } from "react";
import menuLista from "../data/data";

export const MenuContext = createContext();

export function MenuContextProvider(props) {
  const [menu, setMenu] = useState(menuLista);

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
        sumarCantidad,
        restarCantidad,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}
