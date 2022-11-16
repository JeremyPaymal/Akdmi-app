import React from "react";
import "./HorizontalScrollBarExercises.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ExerciseCard from "../ExerciseCard/ExerciseCard";
import BodyPart from "../BodyPart/BodyPart";

const HorizontalScrollbarExercises = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "black",
        "--swiper-navigation-color": "black",
      }}
      slidesPerView={3}
      initialSlide="3"
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      navigation={true}
      modules={[Navigation]}
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

export default HorizontalScrollbarExercises;
