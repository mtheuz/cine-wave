"use client";
import React, { useEffect, useState } from "react";
import Container from "../component/Container";
import ListMoviesItem from "../component/ListMoviesItem";
import MoviesForCategory from "../component/MoviesForCategory";

interface Movie {
  title: string;
}

function Favoritos() {
  const [favoritesMovies, setfavoritesMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favoritesMoviesStorage = Object.keys(localStorage);
      const movies = favoritesMoviesStorage.map((key) => {
        const storedItem =
          key !== "ally-supports-cache" ? localStorage.getItem(key) : null;
        if (storedItem) {
          return JSON.parse(storedItem) as Movie;
        }
        return {} as Movie;
      });
      setfavoritesMovies(movies);
    }
  }, []);

  const clearAllFavorites = () => {
    console.log("limpar");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <section className="bg-blue-primary min-h-screen">
      <Container className="">
        {favoritesMovies.length !== 0 ? (
          <div className="flex flex-start items-center">
            <MoviesForCategory movies={favoritesMovies} title="Favoritos">
              <div>
                {favoritesMovies.length != 0 ? (
                  <button
                    className="p-2  bg-blue-900  border-2 border-black  rounded-xl text-white  font-bold"
                    onClick={clearAllFavorites}
                  >
                    Limpar favorios
                  </button>
                ) : null}
              </div>
            </MoviesForCategory>
          </div>
        ) : (
          <div className="flex justify-center mt-56">
            <h1 className="text-white/40 font-bold text-lg md:text-4xl">
              Nenhum Filme adicionado aos favortos
            </h1>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Favoritos;
