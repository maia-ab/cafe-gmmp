"use client";
import React from "react";
import SumarRestar from "./sumar-restar";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

function MenuItem({ item }) {
  useContext(MenuContext);

  return (
    <>
      <div className="bg-forest-green w-[250px] h-[400px] rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md  m-2 transform transition-transform  hover:scale-110 hover:shadow-2xl">
        <div className="w-[250px] h-[220px] mb-5 rounded-md rounded-tl-3xl flex items-center justify-center overflow-hidden ">
          <img className="object-cover" src={item.imagenUrl} alt={item.titulo} />
        </div>
        <div className="flex flex-col gap-3 items-center rounded-b-3xl h-20 text-beige">
          <p className="text-3xl">{item.titulo}</p>
          <p>${item.precio}</p>
          <SumarRestar item={item} /> 
        </div>
      </div>
    </>
  );
}

export default MenuItem;
