"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "../styles/slide.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

function slide() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/img1.jpg"
        alt="image"
        width={1000}
        height={800}
      />
    </SwiperSlide>
  );
}
function slide2() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/img13.jpg"
        alt="image"
        width={1000}
        height={800}
      />
    </SwiperSlide>
  );
}
function slide3() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/img14.jpg"
        alt="image"
        width={1000}
        height={800}
      />
    </SwiperSlide>
  );
}
function slide4() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/img4.jpg"
        alt="image"
        width={1000}
        height={800}
      />
    </SwiperSlide>
  );
}
function slide5() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/img15.jpg"
        alt="image"
        width={1000}
        height={800}
      />
    </SwiperSlide>
  );
}
function slide6() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/img6.jpg"
        alt="image"
        width={1000}
        height={800}
      />
    </SwiperSlide>
  );
}
function slide7() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/img7.jpg"
        alt="image"
        width={1000}
        height={800}
      />
    </SwiperSlide>
  );
}
function slide8() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/img8.jpg"
        alt="image"
        width={1000}
        height={800}
      />
    </SwiperSlide>
  );
}
function slide9() {
  return (
    <SwiperSlide className={styles.swiper}>
      <Image
        className={styles.img}
        src="/img9.jpg"
        alt="image"
        width={1000}
        height={800}
      />
    </SwiperSlide>
  );
}
const Slider = () => {
  return (
    <section className={styles.sectionf}>
      <div className={styles.div}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 3700,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          pagination={{ clickable: true }}
          className={styles.slides}
        >
          {slide()}
          {slide2()}
          {slide3()}
          {slide4()}
          {slide5()}
          {slide6()}
          {slide7()}
          {slide8()}
          {slide9()}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
