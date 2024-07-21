"use client";

import React from "react";
import MenuItem from "./menuItem";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

import OrderBox from "./orderBox";

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

