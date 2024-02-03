import React from 'react'
import ReactLoading from "react-loading";
import Container from './Container';
function Loading() {
  return (
    <Container>
    <div className='flex justify-center items-center h-screen overflow-y-hidden'><ReactLoading type='spin' color="white" /></div>

    </Container>
  )
}

export default Loading