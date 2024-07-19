"use client";

import React from "react";
import { useState, useEffect } from "react";
import MenuItem from "./menuItem";
import OrderItem from "./orderItem";

function Menu() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => setFotos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex gap-32 p-24 justify-center">
        <div id="menu" className="grid grid-cols-3 gap-4">
          {fotos.map((foto, i) => (
            <MenuItem itemTitle={foto.title} itemFoto={`${foto.image}`} />
          ))}
        </div>
        <div className="w-[500px] bg-dark-brown rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md px-8 py-24 text-beige flex flex-col items-center gap-8">
          <h2 className="text-5xl">Tu Orden</h2>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <p className="text-3xl">Total:</p>
          <button className="bg-coconut h-[50px] w-[300px] rounded-2xl text-2xl"> Ordenar </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
