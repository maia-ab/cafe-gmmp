import React from "react";
function GaleriaItem({ item }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center my-20">
      <img src={item.image} alt={item.title} />
      <h3 className="text-dark-brown text-3xl md:text-xl lg:text-2xl">
        {item.title}
      </h3>
    </div>
  );
}

export default GaleriaItem;
