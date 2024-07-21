'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Titulo from './titulo';
import GaleriaItem from './galeriaItem';

function Galeria() {
    const [galeria, setGaleria] = useState([]);
  
    useEffect(() => {
      fetch("https://api.sampleapis.com/coffee/hot")
        .then((response) => response.json())
        .then((data) => setGaleria(data))
        .catch((err) => console.log(err));
    }, []);

    const galeriaFiltrada = galeria.filter((item) => item.image !== null)
  
    return (
        
      <>
        <div className="m-20">
            <Titulo  texto="Galeria" estilo="w-[500px]  border-t border-dark-brown m-2" /> 
          <div id="galeria" className="md:grid grid-cols-4 lg:grid-cols-5 gap-4">
            {galeriaFiltrada.map((galeriaItem, i) => (
            <GaleriaItem item={galeriaItem}/>
            ))}
          </div>
        </div>
      </>
    );
  }

export default Galeria