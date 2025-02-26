"use client";

import { Swiper, SwiperSlide } from "swiper/react";
const images = [
    "/assets/images/banner/1.jpg",
    "/assets/images/banner/2.jpg",
    "/assets/images/banner/3.jpg",
    "/assets/images/banner/4.jpg",
    "/assets/images/banner/5.jpg",
    "/assets/images/banner/6.jpg",
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Slide from "../Slide/Slide";

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            {
                images.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                        <Slide image={imgSrc} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Banner;
