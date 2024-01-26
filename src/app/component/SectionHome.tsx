"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { getMoviesNow } from "@/api/api";

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
  useEffect(() => {
    getMoviesNow().then((response) => setMoviesNow(response.results));
  }, []);
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
         
          slidesPerView={1}
          //navigation
        >
          
            {moviesNow.map((movie: any, index: number) => (
              
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
