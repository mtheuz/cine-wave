
import React from 'react'
import Container from '../component/Container'
import Link from 'next/link'
import { BiSolidCameraMovie } from "react-icons/bi";

function page() {
  return (
    <section className='flex bg-blue-primary h-screen justify-center items-center'>
        <Container className='flex flex-col w-full justify-center items-center'>
            <Link href='/' className='flex  justify-center items-center w-64 h-96 bg-gradient-to-b border-2 border-white from-slate-600 to-slate-800 rounded-xl'>
                
            <BiSolidCameraMovie  color='white' size={60}/>
            </Link>
            <button className='p-5 mt-10 bg-gradient-to-b hover:bg-gradient-to-t border-2 border-white from-blue-400 to-blue-800 rounded-xl text-white  font-bold'> Me indique um filme</button>
        </Container>
    </section>
  )
}

export default page