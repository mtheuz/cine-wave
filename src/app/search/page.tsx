"use client"
import React, { useEffect, useState } from 'react'
import Container from '../component/Container'
import { getMoviesTopRated } from '@/api/api';
import MoviesForCategory from '../component/MoviesForCategory';

function Search() {

  const [moviesTopRated, setmoviesTopRated] = useState([]);
  useEffect(() => {
    getMoviesTopRated().then((response) => setmoviesTopRated(response.results));
  }, []);

  return (
    <section className='bg-blue-primary' >
        <Container>
            <div className='flex mb-4'>
            <input className='w-full h-16 p-4 text-white text-2xl rounded-lg bg-blue-950' type="text" placeholder='Filmes, Series...' />
            </div>
            <MoviesForCategory title='Explore' movies={moviesTopRated}/>
        </Container>
    </section>
  )
}

export default Search