import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from './Denim Jeans.jpg'
import img1 from './WELCOME.jpg'
import img2 from './Add a heading (1).jpg'
import img3 from './banner-1.jpeg'
import img4 from './banner-2.jpeg'
import img5 from './banner-3.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img5} alt=''/></SwiperSlide>
        <SwiperSlide><img src={img3} alt='https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGplYW5zJTIwc2xpZGVyJTIwaW1hZ2V8ZW58MHwwfDB8fHww'/></SwiperSlide>
        <SwiperSlide><img src={img4} alt='https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGplYW5zJTIwc2xpZGVyJTIwaW1hZ2V8ZW58MHwwfDB8fHww'/></SwiperSlide>

      </Swiper>
    </>
  );
}
