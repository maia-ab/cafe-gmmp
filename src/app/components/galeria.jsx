'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import MenuItem from './menuItem';


function Galeria() {
  const [ fotos, setFotos ] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => response.json())
    .then(data => setFotos(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
    <section id='menu' className='grid grid-cols-3 place-items-center gap-4'>
    {fotos.map((foto, i) => (
        <MenuItem itemTitle={foto.title} itemFoto={`${foto.image}`}/>
    ))}
    </section>
    </>
  )
 
  
}

export default Galeria

