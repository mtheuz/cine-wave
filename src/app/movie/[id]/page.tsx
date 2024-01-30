"use client";
import { getMoviesDetails } from "@/api/api";
import Container from "@/component/Container";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  backdrop_path: string;
  genres: any;
  release_date: string;
  vote_average: string;
  runtime: number;
}
function minutesToHours(minutes: number) {
  if (isNaN(minutes) || minutes < 0) {
    return "Formato de entrada inválido";
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
  const ImageURL = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMoviesDetails(params.id);
        console.log(response);
        setMovie(response); // Certifique-se de que response.results existe
      } catch (error) {
        console.error("Erro ao obter detalhes do filme:", error);
      }
    };

    fetchMovieDetails();
  }, [params.id]); // Adicione params.id como dependência se necessário

  return (
    <section className="bg-blue-primary bg-cover bg-top">
      <div
        className="absolute inset-0 bg-cover bg-top "
        style={{
          backgroundImage: `url(${ImageURL + movie?.backdrop_path})`,
          filter: "blur(10px)",
        }}
      ></div>
      <Container className="flex items-center justify-center h-screen ">
        {movie && (
          <div className="flex flex-col md:flex-row w-4/5">
            <div className=" h-96 w-64 rounded-xl relative">
              <Image
                className="rounded-lg z-10"
                src={ImageURL + movie.poster_path}
                alt="poster"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="z-10 w-3/5 ml-10">
              <h1 className="text-white mb-6 text-4xl font-bold">
                {movie.title}
              </h1>
              <p className="text-white text-lg">{movie.overview}</p>
              <div className="flex flex-row text-white z-10 mt-10">
                <h1 className="text-base mr-2 font-bold">Duração: </h1>
                <h2 className=" text-base ">{minutesToHours(movie.runtime)}</h2>
              </div>
              <div className="flex flex-row text-white z-10   ">
                <h1 className="text-base mr-2 font-bold fir">Gênero: </h1>
                {movie.genres.map((genre: any) => (
                  <h2 key={genre.id} className=" text-base ">
                    {genre.name},
                  </h2>
                ))}
              </div>
              <div className="flex flex-row text-white z-10">
                <h1 className="text-base mr-2 font-bold">
                  Data de lançamento:{" "}
                </h1>
                <h2 className=" text-base ">{movie.release_date}</h2>
              </div>
              <div className="flex flex-row text-yellow-400 z-10">
                <h1 className="text-base mr-2 font-bold">Nota: </h1>
                <h2 className=" text-base ">{formattedVote(movie.vote_average)}</h2>
              </div>
            </div>

            <div className="absolute p-2 text-white text-sm bottom-0 inset-0 bg-gradient-to-b from-transparent to-slate-950 rounded-md"></div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Movie;
