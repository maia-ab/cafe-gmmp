'use client';
import React from "react";
import SumarRestar from "./sumar-restar";

function MenuItem({ itemTitle, itemFoto, itemPrecio, itemCantidad }) {
  return (
    <>
     <div className="bg-forest-green w-[250px] h-[400px] rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md  m-2 transform transition-transform  hover:scale-110 hover:shadow-2xl">
      <div className="w-[250px] h-[220px] mb-5 rounded-md rounded-tl-3xl flex items-center justify-center overflow-hidden ">
        <img
          className="object-cover"
          src={itemFoto}
          alt={itemTitle}
        />
      </div>
      <div className="flex flex-col gap-3 items-center rounded-b-3xl h-20 text-beige">
      <p className="text-3xl">{itemTitle}</p>
      <p>${itemPrecio}</p>
      <SumarRestar itemCantidad={itemCantidad} />
      </div>
      </div>
    </>

  );
}

export default MenuItem;
