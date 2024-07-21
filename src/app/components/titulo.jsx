import React from "react";

function Titulo({ texto, estilo, color }) {
  return (
    <>
      <div className="flex justify-center items-center my-14">
        <hr className={`${estilo} hidden md:block`} />
        <h3 className={`text-${color} text-6xl mx-12 text-center`}>{texto}</h3>
        <hr className={`${estilo} hidden md:block`} />
      </div>
    </>
  );
}

export default Titulo;
