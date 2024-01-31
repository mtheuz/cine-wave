"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { getAllImagens, getMoviesNow, getMoviesPopular, getMoviesTopRated, getMoviesUpcoming } from "@/api/api";

import {
  Parallax,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import ImageCard from "./ImageCard";
import ListMoviesItem from "./ListMoviesItem";
import Link from "next/link";
import MoviesForCategory from "./MoviesForCategory";

function SectionHome() {
  const [moviesNow, setMoviesNow] = useState([]);
  const [moviesPopular, setMoiesPopular] = useState([]);
  const [moviesTopRated, setmoviesTopRated] = useState([]);
  const [moviesUpcoming, setmoviesUpcoming] = useState([]);
  const [allImagens, setAllImagens] = useState([]);
  useEffect(() => {
    getMoviesNow().then((response) => setMoviesNow(response.results));
    getMoviesPopular().then((response) => setMoiesPopular(response.results));
    getMoviesTopRated().then((response) => setmoviesTopRated(response.results));
    getMoviesUpcoming().then((response) => setmoviesUpcoming(response.results));
  }, []);

  useEffect(() => {
    getAllImagens(moviesNow).then((response) => console.log(response.results));
  }, [moviesNow]);
  return (
    <>
      <section className="bg-blue-primary">
        <Container>
          <Swiper
            modules={[Parallax, Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            //navigation
          >
            {moviesNow.slice(0, 10).map((movie: any, index: number) => (
              <SwiperSlide key={index} className="relative">
                <Link href={`/movie/${movie.id}`}>
                  <div className="relative rounded-xl transition duration-300 delay-150 hover:cursor-pointer border-4 border-transparent hover:border-white ">
                    <ImageCard pathBanner={movie.backdrop_path} />
                    <div className="absolute p-2 text-white bottom-0 inset-0 bg-gradient-to-l from-transparent to-slate-950 rounded-md"></div>
                    <div className="absolute bottom-0 left-0 text-white p-4 w-full md:w-1/2">
                      <div className="md:text-4xl font-bold">{movie.title}</div>
                      <div className="pl-1 text-md hidden md:flex">
                        <p>{movie.overview}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <MoviesForCategory title="Em cartaz" movies={moviesNow}/>
          <MoviesForCategory title="Popular" movies={moviesPopular}/>
          <MoviesForCategory title="Melhor Avaliados" movies={moviesTopRated}/>
          <MoviesForCategory title="Em breve" movies={moviesUpcoming}/>
        </Container>
      </section>
    </>
  );
}

export default SectionHome;
