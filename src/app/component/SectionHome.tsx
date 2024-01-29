"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { getAllImagens, getMoviesNow } from "@/api/api";

import {
  Parallax,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import ImageCard from "./ImageCard";

function SectionHome() {
  const [moviesNow, setMoviesNow] = useState([]);
  const [allImagens, setAllImagens] = useState([]);
  useEffect(() => {
    getMoviesNow().then((response) => setMoviesNow(response.results));
  }, []);

  useEffect(() => {
    getAllImagens(moviesNow).then((response) => console.log(response.results));
  }, [moviesNow]);
  return (
    <section className="bg-blue-primary h-section-height">
      <Container>
        <Swiper
          modules={[Parallax, Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={50}
          parallax={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          //navigation
        >
          
            {moviesNow.slice(0,10).map((movie: any, index: number) => (
              <SwiperSlide key={index}>
              <ImageCard  pathBanner={movie.backdrop_path} />
              </SwiperSlide>
            ))}
          
        </Swiper>
      </Container>
    </section>
  );
}

export default SectionHome;
