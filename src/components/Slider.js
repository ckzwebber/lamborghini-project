import { useRef, useEffect } from "react";
import huracan from "../assets/images/huracan.jpg";
import revuelto from "../assets/images/revuelto.jpg";
import urus from "../assets/images/urus.jpg";
import namehuracan from "../assets/images/namehuracan.png";
import namerevuelto from "../assets/images/namerevuelto.png";
import nameurus from "../assets/images/nameurus.png";

const data = [
  {
    id: "1",
    image: huracan,
    name: namehuracan,
    label: "Huracán",
    power: "610 CV",
    speed: "260 km/h",
    accel: "3.4s",
  },
  {
    id: "2",
    image: revuelto,
    name: namerevuelto,
    label: "Revuelto",
    power: "1015 CV",
    speed: "350 km/h",
    accel: "2.5s",
  },
  {
    id: "3",
    image: urus,
    name: nameurus,
    label: "Urus",
    power: "800 CV",
    speed: "312 km/h",
    accel: "3.4s",
  },
];

export default function Slider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperRef.current;
    if (!swiperEl) return;

    const params = {
      slidesPerView: 1,
      speed: 800,
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: { delay: 6000, disableOnInteraction: false },
      navigation: true,
      pagination: { clickable: true },
      initialSlide: 0,
      injectStyles: [
        `
        :host {
          --swiper-navigation-color: rgba(255,255,255,0.7);
          --swiper-navigation-size: 16px;
          --swiper-pagination-color: #d4a843;
          --swiper-pagination-bullet-inactive-color: rgba(255,255,255,0.3);
          --swiper-pagination-bullet-size: 8px;
        }
        .swiper-button-prev, .swiper-button-next {
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(6px);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          transition: all 0.3s ease;
        }
        .swiper-button-prev::after, .swiper-button-next::after {
          font-size: 16px;
        }
        .swiper-button-prev:hover, .swiper-button-next:hover {
          background: rgba(212,168,67,0.5);
          --swiper-navigation-color: #fff;
          transform: scale(1.08);
        }
        .swiper-pagination {
          bottom: 16px !important;
        }
        .swiper-pagination-bullet {
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
        }
        `,
      ],
    };

    Object.assign(swiperEl, params);
    swiperEl.initialize();
  }, []);

  return (
    <div className="slider-wrapper">
      <swiper-container ref={swiperRef} init="false">
        {data.map((item) => (
          <swiper-slide key={item.id}>
            <div className="slide-inner">
              <div className="slide-bg">
                <img src={item.image} alt={item.label} />
                <div className="slide-overlay" />
              </div>
              <div className="slide-content">
                <div className="slide-title">
                  <img src={item.name} alt={item.label} />
                </div>
                <div className="slide-specs">
                  <div className="spec">
                    <span className="spec-value">{item.power}</span>
                    <span className="spec-label">Power</span>
                  </div>
                  <div className="spec-divider" />
                  <div className="spec">
                    <span className="spec-value">{item.speed}</span>
                    <span className="spec-label">Max Speed</span>
                  </div>
                  <div className="spec-divider" />
                  <div className="spec">
                    <span className="spec-value">{item.accel}</span>
                    <span className="spec-label">0-100 km/h</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
