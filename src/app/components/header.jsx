import React from 'react'
import NavBar from './navBar'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex items-center bg-forest-green h-[80px] px-16'>
         <Link href={"/"}> Logo </Link>
        < NavBar/>
    </div>
  )
}

export default Header