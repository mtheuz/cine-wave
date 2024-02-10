"use client";
import React, { useEffect, useState } from "react";
import Container from "../component/Container";
import Link from "next/link";
import Image from "next/image";
import { BiSolidCameraMovie } from "react-icons/bi";
import { getMoviesTopRated, getSearch } from "@/api/api";
import { motion } from "framer-motion";

type MovieDetails = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  backdrop_path: string;
  genres: any;
  release_date: string;
  vote_average: string;
  runtime: number;
};

function Indication() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [page, setPage] = useState(0);
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [control, setControl] = useState(true)
  const ImageURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const aleatorioPage = Math.floor(Math.random() * 458);
    const aleatorioMovie = Math.floor(Math.random() * 20);
    getMoviesTopRated(aleatorioPage).then((response) => {
      setMovie(response.results[aleatorioMovie]);
    });
  }, [isFlipped]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setControl(false)
  };

  return (
    <section className="flex bg-blue-primary min-h-screen justify-center items-center relative">
      <div
        className="absolute inset-0 bg-cover bg-top h-full "
        style={{
          backgroundImage: `url(${
            isFlipped ? ImageURL + movie?.backdrop_path : null
          })`,
          filter: "blur(10px)",
        }}
      ></div>
      <Container className="flex flex-col w-full justify-center items-center">
        <h1
          className={`text-white p-5 min-h-4 text-xl md:text-4xl font-bold z-10 ${
            !isFlipped ? "hidden" : ""
          }`}
        >
          {movie?.title}
        </h1>

        <motion.div
          className="rounded-lg shadow-lg cursor-pointer z-20"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isFlipped ? 1460 : 0 }}
          transition={{ duration: 4 }}
        >
          <Link
            href={`/movie/${movie?.id}`}
            className="flex  justify-center items-center w-64 h-96 bg-gradient-to-b border-2 border-black from-slate-600 to-slate-800 rounded-xl "
          >
            {isFlipped ? (
              <Image
                className="rounded-lg "
                src={ImageURL + movie?.poster_path}
                alt="poster"
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <BiSolidCameraMovie color="white" size={60} />
            )}
          </Link>
        </motion.div>

        <button
          onClick={handleFlip}
          className="p-2 md:p-5 md:w-56 w-40 mt-10 bg-gradient-to-b hover:bg-gradient-to-t border-2  from-blue-400 to-blue-800 rounded-xl text-white  font-bold z-10"
        >
          {!isFlipped?<h1>Me indique um filme</h1>  : <h1>Voltar</h1>}
          
        </button>
        <div className="absolute bottom-0 inset-0 bg-gradient-to-b from-transparent to-slate-950/60 rounded-md"></div>
      </Container>
    </section>
  );
}

export default Indication;
