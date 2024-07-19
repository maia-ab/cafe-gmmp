/* import React from "react";

function FTTF({ TF = false, imagePath, titulo, texto }) {
  return (
    <div className="h-125 flex items-center justify-center">
      {TF ? (
        <div className="bg-cream flex items-center justify-center p-8">
          <div className="bg-cream p-8 max-w-4xl w-full flex flex-col lg:flex-row items-start lg:items-center">
            <div className="flex-1 lg:mr-8">
              <h1 className="text-4xl font-bold text-dark-brown mb-4">
                {titulo}
              </h1>
              <p className="text-dark-brown text-lg">{texto}</p>
            </div>
            <div className="flex-shrink-0 mt-8 lg:mt-0 lg:ml-8 border-l border-dark-brown pl-8">
              <img
                src={imagePath}
                alt="prueba"
                className="w-64 h-64"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-cream flex items-center justify-center p-8">
          <img
            src={imagePath}
            alt="prueba"
            className="w-64 h-64"
          />
          <div className="flex-shrink-0 mt-8 lg:mt-0 lg:ml-8 border-l border-dark-brown pl-8">
            <div className="bg-cream p-8 max-w-4xl w-full flex flex-col lg:flex-row items-start lg:items-center">
              <div className="flex-1 lg:mr-8">
                <h1 className="text-4xl font-bold text-dark-brown mb-4">
                  {titulo}
                </h1>
                <p className="text-dark-brown text-lg">{texto}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FTTF; */


import React from "react";

function FTTF({ TF = false, imagePath, titulo, texto }) {
  return (
    <div className="h-125 flex items-center justify-center">
      <div className="bg-cream flex items-center justify-center p-8 max-w-4xl w-full">
        {TF ? (
          <div className="flex flex-col lg:flex-row items-center w-full">
            <div className="flex-1 lg:mr-8">
              <h1 className="text-4xl font-bold text-dark-brown mb-4">
                {titulo}
              </h1>
              <p className="text-dark-brown text-lg">{texto}</p>
            </div>
            <div className="flex-shrink-0 lg:ml-8 border-l border-dark-brown pl-8">
              <img
                src={imagePath}
                alt="prueba"
                className="w-64 h-64"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-center w-full">
            <div className="flex-shrink-0 lg:mr-8 border-r border-dark-brown pr-8">
              <img
                src={imagePath}
                alt="prueba"
                className="w-64 h-64"
              />
            </div>
            <div className="flex-1 lg:ml-8">
              <h1 className="text-4xl font-bold text-dark-brown mb-4">
                {titulo}
              </h1>
              <p className="text-dark-brown text-lg">{texto}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FTTF;


