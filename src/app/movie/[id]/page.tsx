"use client";
import { getMoviesDetails } from "@/api/api";
import Container from "@/app/component/Container";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IoIosAddCircle } from "react-icons/io";
import { MdPlaylistAddCheckCircle } from "react-icons/md";

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

const inverterOrdemData = (data: string) => {
  if (!data || typeof data !== "string") {
    return "";
  }
  const partesData = data.split("-");
  
  if (partesData.length !== 3) {
    return "";
  }
  const dataInvertida = partesData.reverse().join("-");
  return dataInvertida;
};

function minutesToHours(minutes: number) {
  if (isNaN(minutes) || minutes < 0) {
    return "";
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  const formattedHours = hours > 0 ? `${hours}h` : "";
  const formattedMinutes = remainingMinutes > 0 ? `${remainingMinutes}min` : "";
  return (
    formattedHours +
    (formattedHours && formattedMinutes ? " " : "") +
    formattedMinutes
    );
  }

  const formattedVote = (vote: string): string => {
    if (!vote || isNaN(parseFloat(vote))) {
    return "";
  }
  const formattedVote = parseFloat(vote).toFixed(1);
  return formattedVote;
};

function Movie({ params }: { params: any }) {
  const [loading, setLoading] = useState(true)
  const [checkButton, setCheckButton] = useState(false);
  const textAnimation = useRef(null);
  const imageAnimation = useRef(null);
  
  const ImageURL = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [movieId, setMovieId] = useState('')
  
  useEffect(() => {
    const animationText = textAnimation.current;
    const animationImagen = imageAnimation.current;
    gsap.fromTo(
      animationText,
      {
        opacity: 0,
        x: -70,
      },
      {
        opacity: 100,
        x: 0,
        duration: 1,
      }
      );
      gsap.fromTo(
        animationImagen,
      {
        opacity: 0,
        x: -70,
      },
      {
        opacity: 100,
        x: 0,
        duration: 1,
      }
    );
  });
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMoviesDetails(params.id);
        setMovie(response);
        setMovieId(response.id)
        setLoading(false)
      } catch (error) {
        console.error("Erro ao obter detalhes do filme:", error);
      }
    };
    
    fetchMovieDetails();
  }, [params.id]);

  const buttonCheck = (id :any, movie: any) => {
    checkButton ? setCheckButton(false) : setCheckButton(true);
    if(!checkButton){
      localStorage.setItem(id, JSON.stringify(movie));
    }else{
      localStorage.removeItem(id);
    }
  };
  useEffect(() => {
    const localStorageKeys = Object.keys(localStorage);
    if (localStorageKeys.includes(movieId.toString())) {
      setCheckButton(true);
    }
  }, [movieId]);
  

  return (
    <section className="bg-blue-primary bg-cover bg-top h-screen overflow-y-auto">
      <div
        className="absolute inset-0 bg-cover bg-top h-screen"
        style={{
          backgroundImage: `url(${ImageURL + movie?.backdrop_path})`,
          filter: "blur(10px)",
        }}
      ></div>
      <Container className="flex items-center justify-center h-full  ">
        {movie && (
          <div className="flex flex-col md:flex-row md:w-4/5 h-full  w-full items-center ">
            <div
              className="w-56 md:h-96 md:w-64 min-h-96 rounded-xl relative opacity-0"
              ref={imageAnimation}
              >
              <Image
                className="rounded-lg z-10"
                src={ImageURL + movie.poster_path}
                alt="poster"
                layout="fill"
                objectFit="cover"
                />
            </div>
            <div
              className="z-10 md:w-3/5 md:ml-10 max-h-96 opacity-0"
              ref={textAnimation}
            >
              <div className="flex mt-10 md:mt-0  md:justify-start justify-center items-center mb-6">
                <h1 className="text-white  text-2xl md:text-4xl font-bold ">
                  {movie.title}
                </h1>
                <button onClick={() =>buttonCheck(movie.id, movie)}>
                  {checkButton ? (
                    <MdPlaylistAddCheckCircle
                      size={35}
                      color="white"
                      className="ml-4"
                    />
                  ) : (
                    <IoIosAddCircle size={40} className="ml-4" />
                  )}
                </button>
              </div>

              <p className="text-white text-sm md:text-lg ">{movie.overview}</p>
              <div className="text-sm md:mt-10 mt-8">
                <div className="flex flex-row text-white z-10 ">
                  <h1 className="md:text-base mr-2 font-bold">Duração: </h1>
                  <h2 className=" md:text-base ">
                    {minutesToHours(movie.runtime)}
                  </h2>
                </div>
                <div className="flex flex-row text-white z-10   ">
                  <h1 className="md:text-base mr-2 font-bold fir">Gênero: </h1>
                  {movie.genres.map((genre: any) => (
                    <h2 key={genre.id} className=" md:text-base ">
                      {genre.name},
                    </h2>
                  ))}
                </div>
                <div className="flex flex-row text-white z-10">
                  <h1 className="md:text-base mr-2 font-bold">
                    Data de lançamento:{" "}
                  </h1>
                  <h2 className=" md:text-base ">
                    {inverterOrdemData(movie.release_date)}
                  </h2>
                </div>
                <div className="flex flex-row text-yellow-400 z-10">
                  <h1 className="md:text-base mr-2 font-bold">Nota: </h1>
                  <h2 className=" md:text-base ">
                    {formattedVote(movie.vote_average)}
                  </h2>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 inset-0 bg-gradient-to-b from-transparent to-slate-950/60 rounded-md"></div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Movie;
