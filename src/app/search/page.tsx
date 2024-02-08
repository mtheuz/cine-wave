"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../component/Container";
import {
  getMoviesAllGerners,
  getMoviesGeners,
  getMoviesTopRated,
  getSearch,
} from "@/api/api";
import MoviesForCategory from "../component/MoviesForCategory";
import Loading from "../component/Loading";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Search() {
  const [moviesTopRated, setmoviesTopRated] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [genre, setGenre] = useState(0);
  const [allGeners, setAllGeners] = useState([]);
  const [genreCategory, setGenreCategory] = useState<any>([]);
  const moviesInifinite = useRef(null);
  const genresContainerRef = useRef(null);
  const [searchName, setSearchName] = useState("");
  const [search, setSearch] = useState<any>([]);

  useEffect(() => {
    getMoviesAllGerners().then((response) => setAllGeners(response.genres));
  }, []);
  useEffect(() => {
    if (page !== 0 && genre === 0 && searchName == "") {
      getMoviesTopRated(page).then((response) => {
        console.log(page)

        console.log(response);

        if (page <= response.total_pages)
          setmoviesTopRated([...moviesTopRated, ...response.results]);
      });
    } else if (genre !== 0 && searchName == "") {
      setGenreCategory([]);
      getMoviesGeners(genre, page).then((response) => {
        console.log(page)
        console.log(response);

        if (page <= response.total_pages)
          setGenreCategory([...genreCategory, ...response.results]);
      });
    } else {
      setSearch([]);
      getSearch(searchName, page).then((response) => {
        console.log(page)

        console.log(response);
        if (page <= response.total_pages)
          setSearch([...search, ...response.results]);
      });
    }
  }, [genre, page, searchName]);

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
  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    setSearchName(inputValue);
    setGenre(0);
    setPage(1)
    console.log("Valor do input:", inputValue);
  };
  const moviesToShow =
    searchName !== ""
      ? searchName
      : genre === 0
      ? moviesTopRated
      : genreCategory;
  return (
    <section className="bg-blue-primary min-h-[1400px]">
      <Container>
        <div className="flex mb-4">
          <input
            className="w-full h-16 p-4 text-white text-2xl rounded-lg bg-blue-950"
            type="text"
            value={searchName}
            placeholder="FILMES..."
            onChange={handleInputChange}
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
            <FaChevronRight size={30} />
          </button>
          {allGeners.length > 0 &&
            allGeners.map((genero: any, index) => (
              <div className="" key={index}>
                <button
                  onClick={() => {setGenre(genero.id); setPage(1)} }
                  className="p-2 py-8 ml-2 w-40 text-white bg-blue-900/80  rounded-xl transition duration-300 delay-150  hover:cursor-pointer border-4 border-transparent hover:border-white"
                >
                  {genero.name}
                </button>
              </div>
            ))}
          <div className="scroll-buttons"></div>
        </div>
        <MoviesForCategory
          title="Explore"
          movies={
            genre != 0
              ? genreCategory
              : searchName !== ""
              ? search
              : moviesTopRated
          }
        />
      </Container>
      <div ref={moviesInifinite}></div>
    </section>
  );
}

export default Search;
