import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import huracan from "../assets/images/huracan.jpg";
import revuelto from "../assets/images/revuelto.jpg";
import urus from "../assets/images/urus.jpg";
import namehuracan from "../assets/images/namehuracan.png";
import namerevuelto from "../assets/images/namerevuelto.png";
import nameurus from "../assets/images/nameurus.png";

export default function Slider() {
  const data = [
    {
      id: "1",
      image: huracan,
      name: namehuracan,
      desc: "POWER: 610 CV 449 kW - MAX. SPEED: 260 km/h - 0-100: 3.4s",
    },
    {
      id: "2",
      image: revuelto,
      name: namerevuelto,
      desc: "POWER: 1015 CV - MAX. SPEED: 350 km/h - 0-100: 2.5s",
    },
    {
      id: "3",
      image: urus,
      name: nameurus,
      desc: "POWER: 800 CV 588 kW - MAX. SPEED: 312 km/h - 0-100: 3.4s",
    },
  ];

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <Swiper
          slidesPerView={1}
          navigation
          speed={900}
          loop={true}
          autoplay={{ delay: 5000 }}
          initialSlide={1}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.name} alt="Model" className="slide-title" />
              <div className="desc">
                <p>{item.desc}</p>
              </div>
              <img src={item.image} alt="Model" className="slide-item box" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
