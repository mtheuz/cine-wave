"use client"
import React, { useEffect, useState } from 'react';
import Container from '../component/Container';
import ListMoviesItem from '../component/ListMoviesItem';
import MoviesForCategory from '../component/MoviesForCategory';

interface Movie {
  // Defina a estrutura do seu objeto de filme
  title: string;
  // Outros campos...
}

function Favoritos() {
  const [localStorageItems, setLocalStorageItems] = useState<Movie[]>([]);

  useEffect(() => {
    // Verificar se estamos no lado do cliente antes de acessar o localStorage
    if (typeof window !== 'undefined') {
      const localStorageKeys = Object.keys(localStorage);
      const items = localStorageKeys.map((key) => {
        const storedItem =(key !== "ally-supports-cache") ? localStorage.getItem(key): null;
        if (storedItem) {
          return JSON.parse(storedItem) as Movie;
        }
        return {} as Movie;
      });
      setLocalStorageItems(items);
    }
  }, []);

  return (
    <section className='bg-blue-primary h-screen'>
      <Container className='flex felx'>
        <MoviesForCategory movies={localStorageItems} title='Favoritos'/>
      </Container>
    </section>
  );
}

export default Favoritos;