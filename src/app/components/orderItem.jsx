import React from 'react'
import SumarRestar from './sumar-restar'

function OrderItem({item}) {
  return (
    <div className='flex items-center '>
        <div className='bg-beige h-[100px] w-[100px] rounded-3xl'></div>
        <div className='mx-5'>
            <p className='text-4xl'>{item.titulo}</p>
        </div>
        <p className='ml-auto text-2xl'>${item.precio}</p>
    </div>
  )
}

export default OrderItem