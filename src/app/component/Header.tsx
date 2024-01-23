import Image from 'next/image'
import React from 'react'
import logo from '/public/logo.png'

function Header() {
  return (
    <header className='flex bg-blue-secondary h-header-height max-w-header-maxWidht w-full rounded-3xl drop-shadow-lg items-center  fixed'>
        <div className='flex items-center '>
            <Image className='h-16 w-16 ' src={logo} alt={'logo'}/>
            <h1 className='font-bold text-font-logo'>CINEWAVE</h1>
        </div>
   
    </header>
  )
}

export default Header