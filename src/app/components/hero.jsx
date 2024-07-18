import React from 'react'
import Image from "next/image";

function Hero() {
  return (
    <div className="relative">
      <Image
        className="object-cover h-[300px] md:h-[500px] lg:h-[700px]"
        src="/hero-image.jpg"
        alt="Imagen hero"
        width={1920}
        height={1080}
      />
      <div className="flex flex-col justify-center items-center absolute inset-0">
        <h1 className="text-white text-5xl  md:text-7xl lg:text-8xl">Cafe de Calidad</h1>
        <hr className='w-[350px] border-t border-white m-2' />
        <p className="text-white text-lg md:text-2xl lg:text-3xl font-light">Sentite como en casa</p>
      </div>
    </div>
  );
}

export default Hero;