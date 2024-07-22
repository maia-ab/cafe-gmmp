import React from "react";
import Titulo from "../components/titulo";

export default function CafeReceta() {
  return (
    <div className="flex flex-col items-center">
      <Titulo
        texto={"Como hacemos nuestros productos"}
        estilo="w-[200px] border-dark-brown border-t m-2"
        color="dark-brown"
      />
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="lg:w-[800px] sm:w-full lg:h-[450px] mt-5 mb-16 flex flex-wrap justify-center"
          src="https://www.youtube.com/embed/yJc_hMAjjwc"
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
}
