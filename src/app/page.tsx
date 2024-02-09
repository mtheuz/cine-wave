"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import {
  getMoviesNow,
  getMoviesPopular,
  getMoviesTopRated,
  getMoviesUpcoming,
  getSearch,
} from "@/api/api";

import {
  Parallax,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Container from "./component/Container";
import Loading from "./component/Loading";
import Link from "next/link";
import ImageCard from "./component/ImageCard";
import MoviesForCategory from "./component/MoviesForCategory";

function SectionHome() {
  const [moviesNow, setMoviesNow] = useState([]);
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesTopRated, setMoviesTopRated] = useState([]);
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);

        const moviesNowResponse = await getMoviesNow();
        setMoviesNow(moviesNowResponse.results);


        const moviesPopularResponse = await getMoviesPopular(1);
        setMoviesPopular(moviesPopularResponse.results);

        const moviesTopRatedResponse = await getMoviesTopRated(1);
        setMoviesTopRated(moviesTopRatedResponse.results);

        const moviesUpcomingResponse = await getMoviesUpcoming();
        setMoviesUpcoming(moviesUpcomingResponse.results);

        setLoading(false);
      } catch (error) {
        console.error("Error loading movies:", error);
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <>
      <section className="bg-blue-primary min-h-screen">
        <Container>
          {loading ? (
            <Loading />
          ) : (
            <>
              <Swiper
                modules={[
                  Parallax,
                  Navigation,
                  Pagination,
                  Scrollbar,
                  Autoplay,
                ]}
                spaceBetween={50}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                slidesPerView={1}
              >
                {moviesNow.slice(0, 10).map((movie: any, index: number) => (
                  <SwiperSlide key={index} className="relative">
                    <Link href={`/movie/${movie.id}`}>
                      <div className="relative rounded-xl transition duration-300 delay-150 hover:cursor-pointer border-4 border-transparent hover:border-white ">
                        <ImageCard pathBanner={movie.backdrop_path} />
                        <div className="absolute p-2 text-white bottom-0 inset-0 bg-gradient-to-l from-transparent to-slate-950 rounded-md"></div>
                        <div className="absolute bottom-0 left-0 text-white p-4 w-full md:w-1/2">
                          <div className="md:text-4xl font-bold">
                            {movie.title}
                          </div>
                          <div className="pl-1 text-md hidden md:flex">
                            <p>{movie.overview}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <MoviesForCategory title="Em cartaz" movies={moviesNow.slice(0,18)} />
              <MoviesForCategory title="Popular" movies={moviesPopular.slice(0,18)} />
              <MoviesForCategory
                title="Melhor Avaliados"
                movies={moviesTopRated.slice(0,18)}
              />
              <MoviesForCategory title="Em breve" movies={moviesUpcoming.slice(0,18)} />
            </>
          )}
        </Container>
      </section>
    </>
  );
}

export default SectionHome;
