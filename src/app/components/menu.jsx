"use client";

import React from "react";
import { useState, useEffect } from "react";
import MenuItem from "./menuItem";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

import OrderBox from "./orderBox";
/*
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
*/
function Menu() {
  const { menu } = useContext(MenuContext);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-8 lg:p-24  lg:items-start">
 <div className="w-full lg:w-2/3 grid justify-center items-center gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      <div className="w-full lg:w-1/3">
        <OrderBox />
      </div>
    </div>
  );
}

export default Menu;

