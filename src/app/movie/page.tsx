"use client"
import React, { useEffect, useState } from 'react'
import Container from '../component/Container'
import MoviesForCategory from '../component/MoviesForCategory'
import { getMoviesGeners, getMoviesNow, getMoviesPopular, getMoviesTopRated, getMoviesUpcoming } from '@/api/api';

function MoviesALL() {
    const [moviesNow, setMoviesNow] = useState([]);
    const [moviesPopular, setMoiesPopular] = useState([]);
    const [moviesTopRated, setmoviesTopRated] = useState([]);
    const [moviesUpcoming, setmoviesUpcoming] = useState([]);
    const [moviesAction, setMoviesAction] = useState([]);
    const [moviesAdventure, setMoviesAdventure] = useState([]);
    const [allImagens, setAllImagens] = useState([]);
    useEffect(() => {
      getMoviesGeners(28).then((response) => setMoviesAction(response.results));
      getMoviesGeners(12).then((response) => setMoviesAdventure(response.results));
      getMoviesPopular().then((response) => setMoiesPopular(response.results));
      getMoviesTopRated().then((response) => setmoviesTopRated(response.results));
      getMoviesUpcoming().then((response) => setmoviesUpcoming(response.results));
    }, []);
  return (
    <section className='bg-blue-primary'>
        <Container>
            <MoviesForCategory movies={moviesAction.slice(0,12)} title='Filmes de Ação'/>
            <MoviesForCategory movies={moviesAdventure.slice(0,12)} title='Filmes de Aventura'/>
        </Container>
    </section>
  )
}

export default MoviesALL