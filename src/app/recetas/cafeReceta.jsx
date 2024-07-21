import React from 'react'
import Titulo from '../components/titulo'

export default function CafeReceta() {
return (
    <div className="flex flex-col items-center">
        <Titulo
            texto={"Como hacemos nuestro café"}
            estilo="w-[200px] border-dark-brown border-t m-2"
            color="dark-brown"
        />
        <iframe
            className="lg:w-[800px] sm:w-full lg:h-[450px] mt-5 mb-16 flex flex-wrap justify-center"
            src="https://www.youtube.com/embed/Y8Tbe-p1pJg"
            title="YouTube video player"
        ></iframe>
    </div>
);
}
