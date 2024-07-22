import React from "react";
import { FaMapPin, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Titulo from "../components/titulo";

export default function MapaYContactos() {
  return (
    <div className="flex flex-col items-center justify-center h-[800px]">
      <Titulo texto={"Contacto"} estilo="w-[500px]  border-t border-dark-brown m-2" />
      <div className="flex p-8 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="flex-shrink-0 lg:mr-8 lg:border-r lg:border-dark-brown lg:pr-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.443585905654!2d-58.63940818798713!3d-34.618228972836306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055fc5137%3A0x410e93a3c96d550!2sTte.%20Manuel%20Origone%20151%2C%20Villa%20Tesei%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1721512332413!5m2!1ses!2sar"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <br />
          </div>
          <div className="flex-1 lg:ml-8">
            <h1 className="flex text-3xl text-dark-brown mb-4">
              <FaMapPin /> <span> - Origone 151, Hurlingham</span>
            </h1>
            <br />
            <h1 className="flex text-3xl text-dark-brown mb-4">
              <FaInstagram /> <span> - @cafegmmp</span>
            </h1>
            <br />
            <h1 className="flex text-3xl text-dark-brown mb-4">
              <CiMail /> <span> - contacto@cafegmmp.com</span>
            </h1>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
