import React from "react";
import "./HorizontalScrollBar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import ExerciseCard from "../ExerciseCard/ExerciseCard";
import BodyPart from "../BodyPart/BodyPart";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "white",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-navigation-color": "white",
      }}
      slidesPerView={3}
      initialSlide="3"
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 1,
          slidesPerGroup:1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          slidesPerGroup:2,
        },
        950: {
          slidesPerView: 3,
        },
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HorizontalScrollbar;
