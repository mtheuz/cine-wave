import React from 'react'
import ReactLoading from "react-loading";
import Container from './Container';
function Loading() {
  return (
    <Container className='max-h-[1240px]'>
    <div className='flex mt-56 justify-center h-screen overflow-y-hidden'><ReactLoading type='bars' delay={10} color="white" /></div>

    </Container>
  )
}

export default Loading