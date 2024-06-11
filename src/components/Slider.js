import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../App.css";
import huracan from "../assets/images/huracan.jpg";
import revuelto from "../assets/images/revuelto.jpg";
import urus from "../assets/images/urus.jpg";

export default function Slider() {
  const data = [
    { id: "1", image: huracan },
    { id: "2", image: revuelto },
    { id: "3", image: urus },
  ];

  return (
    <div className="slider-container">
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Model" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
