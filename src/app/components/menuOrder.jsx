import React from "react";
import OrderItem from "./orderItem";

function MenuOrder() {
  return (
    <div className="w-[500px] bg-dark-brown rounded-tl-3xl rounded-br-3xl px-8 py-24 text-beige flex flex-col items-center gap-8">
      <h2 className="text-5xl">Tu Orden</h2>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <p className="text-3xl">Total:</p>
      <button className="bg-coconut h-[50px] w-[300px] rounded-2xl text-2xl">
        Ordenar
      </button>
    </div>
  );
}

export default MenuOrder;
