import React from 'react'
import NavBar from './navBar'
import Link from 'next/link'

function Header() {
  return (
    <div className='bg-blue-400'>
         <Link href={"/"}> Logo </Link>
        < NavBar/>
    </div>
  )
}

export default Header