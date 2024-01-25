"use client";
import React from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import {
  Parallax,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

function SectionHome() {
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
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="w-full bg-slate-700 h-48 rounded-xl"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-slate-700 h-48 rounded-xl"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-slate-700 h-48 rounded-xl"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-slate-700 h-48 rounded-xl"></div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}

export default SectionHome;
