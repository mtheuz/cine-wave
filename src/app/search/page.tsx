"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../component/Container";
import { getMoviesAllGerners, getMoviesGeners, getMoviesTopRated } from "@/api/api";
import MoviesForCategory from "../component/MoviesForCategory";
import Loading from "../component/Loading";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Search() {
  const [moviesTopRated, setmoviesTopRated] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [genre, setGenre] = useState(0)
  const [allGeners, setAllGeners] = useState([]);
  const[genreCategory, setGenreCategory] = useState<any>([])
  const moviesInifinite = useRef(null);
  const genresContainerRef = useRef(null);

  useEffect(() => {
    getMoviesAllGerners().then((response) => setAllGeners(response.genres));
  });
  useEffect(() => {
    if (page !== 0 && genre === 0) {
      getMoviesTopRated(page).then((response) =>
        setmoviesTopRated([...moviesTopRated, ...response.results])
      );
    } else if (genre !== 0) {
      setGenreCategory([])
      getMoviesGeners(genre, page).then((response) =>
        setGenreCategory([...genreCategory, ...response.results])
      );
    }
  }, [genre, page]);

  useEffect(() => {
    const IntersectionObservation = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;
      if (ratio > 0) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (moviesInifinite.current) {
      IntersectionObservation.observe(moviesInifinite.current);
    }
    return () => {
      IntersectionObservation.disconnect();
    };
  }, [moviesInifinite]);

  const handleScroll = (direction: string) => {
    const container = genresContainerRef.current;

    if (container) {
      const scrollAmount = 2000;
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <section className="bg-blue-primary">
      <Container>
        <div className="flex mb-4">
          <input
            className="w-full h-16 p-4 text-white text-2xl rounded-lg bg-blue-950"
            type="text"
            placeholder="Filmes, Series..."
          />
        </div>
        <div
          className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent items-center"
          ref={genresContainerRef}
        >
          <button
            className=" absolute z-10 text-white/70 ml-4 p-4 opacity-0 hover:opacity-100 transition duration-300 delay-150  hover:cursor-pointer border-4 border-transparent "
            onClick={() => handleScroll("left")}
          >
            <FaChevronLeft size={30} />
          </button>
          <button
            className=" absolute z-10  text-white/70 right-0 mr-8 opacity-0 hover:opacity-100 transition duration-300 delay-150  hover:cursor-pointer border-4 border-transparent "
            onClick={() => handleScroll("right")}
          >
            <FaChevronRight size={30}/>
          </button>
          {allGeners.length > 0 &&
            allGeners.map((genero: any, index) => (
              <div className="" key={index}>
                <button onClick={()=> setGenre(genero.id)} className="p-2 py-8 ml-2 w-40 text-white bg-blue-900/80  rounded-xl transition duration-300 delay-150  hover:cursor-pointer border-4 border-transparent hover:border-white">
                  {genero.name}
                </button>
                
              </div>
            ))}
          <div className="scroll-buttons"></div>
        </div>
        <MoviesForCategory title="Explore" movies={(genre === 0 ) ?moviesTopRated : genreCategory} />
      </Container>
      <div ref={moviesInifinite}>
        <Loading />
      </div>
    </section>
  );
}

export default Search;
