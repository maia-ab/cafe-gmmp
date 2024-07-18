import React from 'react'

function Titulo({ texto, estilo}) {
  return (
  <>
  <div className='flex justify-center items-center my-14'>
    <hr className={`${estilo}`}/>
    <h3 className='text-6xl mx-12'> {texto}</h3>
    <hr className={`${estilo}`} />
    </div>
</>
  )
}

export default Titulo