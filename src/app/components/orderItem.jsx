import React from "react";

function OrderItem({ item }) {
  return (
    <div className="flex items-center my-5">
      <div className="bg-beige h-[100px] w-[100px] rounded-3xl"></div>
      <div className="mx-5">
        <p className="text-4xl">{item.titulo}<span className="text-base"> x{item.cantidad}</span></p>
      </div>
      <p className="ml-auto text-2xl">${item.precio}</p>
    </div>
  );
}

export default OrderItem;
