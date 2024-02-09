"use client"
import React, { useEffect, useState } from 'react'
import Container from '../component/Container'
import MoviesForCategory from '../component/MoviesForCategory'
import { getMoviesGeners, getMoviesNow, getMoviesPopular, getMoviesTopRated, getMoviesUpcoming } from '@/api/api';
import Loading from '../component/Loading';

function MoviesALL() {
    const [moviesAction, setMoviesAction] = useState([]);
    const [moviesAdventure, setMoviesAdventure] = useState([]);
    const [moviesAnimação, setMoviesAnimação] = useState([]);
    const [moviesDrama, setMoviesDrama] = useState([]);
    const [moviesfanatasia, setMoviesFantasia] = useState([]);
    const [moviesficcao, setMoviesficcao] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getMoviesGeners(28,1).then((response) => setMoviesAction(response.results));
      getMoviesGeners(12,1).then((response) => setMoviesAdventure(response.results));
      getMoviesGeners(16,1).then((response) => setMoviesAnimação(response.results));
      getMoviesGeners(18,1).then((response) => setMoviesDrama(response.results));
      getMoviesGeners(14,1).then((response) => setMoviesFantasia(response.results));
      getMoviesGeners(878,1).then((response) => setMoviesficcao(response.results));
      setLoading(false)
    }, []);

  return (
    <section className='bg-blue-primary min-h-screen'>
        <Container>
          {loading ? <Loading/> :  <div>
              <MoviesForCategory movies={moviesAction.slice(0,12)} title='Filmes de Ação'/>
              <MoviesForCategory movies={moviesAdventure.slice(0,12)} title='Filmes de Aventura'/>
              <MoviesForCategory movies={moviesAnimação.slice(0,12)} title='Filmes de Animação'/>
              <MoviesForCategory movies={moviesDrama.slice(0,12)} title='Filmes de Drama'/>
              <MoviesForCategory movies={moviesfanatasia.slice(0,12)} title='Filmes de Fantasia'/>
              <MoviesForCategory movies={moviesficcao.slice(0,12)} title='Filmes de Ficção Cientifica'/>
            </div>}
           
        </Container>
    </section>
  )
}

export default MoviesALL