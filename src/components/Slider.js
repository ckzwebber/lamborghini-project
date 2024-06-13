import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../App.css";
import huracan from "../assets/images/huracan.jpg";
import revuelto from "../assets/images/revuelto.jpg";
import urus from "../assets/images/urus.jpg";
import namehuracan from "../assets/images/namehuracan.png";
import namerevuelto from "../assets/images/namerevuelto.png";
import nameurus from "../assets/images/nameurus.png";

export default function Slider() {
  const data = [
    { id: "1", image: huracan, name: namehuracan },
    { id: "2", image: revuelto, name: namerevuelto },
    { id: "3", image: urus, name: nameurus },
  ];

  return (
    <div className="slider-container page">
      <Swiper
        slidesPerView={1}
        navigation
        speed="900"
        loop="true"
        autoplay={{ delay: 5000 }}
        initialSlide={1}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.name} alt="Model" className="slide-title" />
            <img src={item.image} alt="Model" className="slide-item box" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
