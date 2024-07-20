import React from "react";

function FTTF({ TF = false, imagePath, titulo, texto }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex p-8 max-w-[1200px]">
        {TF ? (
          <div className="flex flex-col items-center lg:flex-row  w-full ">
            <div className="flex-1 lg:mr-8">
              <h1 className="text-4xl font-bold text-dark-brown mb-4">
                {titulo}
              </h1>
              <p className="text-dark-brown text-lg w-96">{texto}</p>
            </div>
            <div className="flex-shrink-0 lg:ml-8 lg:border-l lg:border-dark-brown lg:pl-8">
              <img src={imagePath} alt={titulo} className="w-96 h-96 lg:ml-9" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-center w-full">
            <div className="flex-shrink-0 lg:mr-8 lg:border-r lg:border-dark-brown lg:pr-8">
              <img src={imagePath} alt={titulo} className="w-96 h-96 lg:mr-8" />
            </div>
            <div className="flex-1 lg:ml-8">
              <h1 className="text-4xl font-bold text-dark-brown mb-4">
                {titulo}
              </h1>
              <p className="text-dark-brown text-lg w-96 ml-1">{texto}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FTTF;
