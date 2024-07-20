import React from 'react'
import NavBar from './navBar'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex items-center bg-forest-green h-[100px] px-16'>
         <Link href={"/"}> <img className='h-20 w-20' src="/gmmp-logo.png" alt="Logo de gmmp" /> </Link>
        < NavBar/>
    </div>
  )
}

export default Header