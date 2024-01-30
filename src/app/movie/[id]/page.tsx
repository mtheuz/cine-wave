'use client'
import { getMoviesDetails } from "@/api/api";
import Container from "@/component/Container";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface MovieDetails {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    backdrop_path: string
  }

function Movie({ params }: { params: any }) {
  const ImageURL = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMoviesDetails(params.id);
        console.log(response)
        setMovie(response); // Certifique-se de que response.results existe
      } catch (error) {
        console.error("Erro ao obter detalhes do filme:", error);
      }
    };

    fetchMovieDetails();
  }, [params.id]); // Adicione params.id como dependência se necessário

  return (
    <section className="bg-blue-primary bg-cover bg-top" style={{
        backgroundImage: `url(${ImageURL + movie?.backdrop_path})`,
      }}>
      <Container className="flex items-center justify-center h-screen">
        {movie && (
          <div className="flex flex-row w-4/5">
            <div className=" h-96 w-64 rounded-xl relative">
              <Image
                className="rounded-lg"
                src={ImageURL + movie.poster_path}
                alt="poster"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-3/5 ml-10">
              <h1 className="text-white mb-6 text-2xl font-bold">{movie.title}</h1>
              <p className="text-white">{movie.overview}ggg</p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Movie;