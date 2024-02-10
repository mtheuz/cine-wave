import React from 'react'
import Container from './Container'
function Footer() {
  return (
    <section className='absolute bg-black w-full '>
        <Container className='flex items-center justify-center h-16  pt-0 '>
            <h1 className=' text-white text-center  text-sm'>© 2024 Matheus Mota. Todos os direitos reservados.</h1>
        </Container>
    </section>
  )
}

export default Footer