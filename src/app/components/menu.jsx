"use client";

import React from "react";
import { useState, useEffect } from "react";
import MenuItem from "./menuItem";

import OrderBox from "./orderBox";

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
        <OrderBox />
      </div>
    </>
  );
}

export default Menu;
