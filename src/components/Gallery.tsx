/** @source gallery22 */
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

const Gallery = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/33686469/pexels-photo-33686469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Колекция от исторически парфюми и козметика",
      name: "Исторически артефакти",
      role: "Колекция от XIX век",
      icon: <FaXTwitter className="size-5 text-white" />,
      url: "#",
    },
    {
      src: "https://images.pexels.com/photos/34583553/pexels-photo-34583553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Стара аптека",
      name: "Възрожденска аптека",
      role: "Медицинска история",
      icon: <FaXTwitter className="size-5 text-white" />,
      url: "#",
    },
    {
      src: "https://images.pexels.com/photos/34580364/pexels-photo-34580364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Музейни експонати",
      name: "Етнографска колекция",
      role: "Традиционни предмети",
      icon: <FaXTwitter className="size-5 text-white" />,
      url: "#",
    },
    {
      src: "https://images.pexels.com/photos/34516958/pexels-photo-34516958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Исторически експонати",
      name: "Археологически находки",
      role: "Древна история",
      icon: <FaXTwitter className="size-5 text-white" />,
      url: "#",
    },
    {
      src: "https://images.pexels.com/photos/14681329/pexels-photo-14681329.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Древни египетски канопи в музейна обстановка",
      name: "Древни съдове",
      role: "Керамична колекция",
      icon: <FaXTwitter className="size-5 text-white" />,
      url: "#",
    },
    {
      src: "https://images.pexels.com/photos/2844471/pexels-photo-2844471.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Елегантна експозиция на древни римски статуи",
      name: "Скулптурна колекция",
      role: "Художествени произведения",
      icon: <FaXTwitter className="size-5 text-white" />,
      url: "#",
    },
  ];

  const css = `
    .mySwiper22 {
      width: 100%;
      height: 350px;
    }

    .mySwiper22 .swiper-slide {
      border-radius: 0px;
      width: 200px;
      height: 300px;
      opacity: 0.2;
      transition: all 0.3s ease-in-out;
    }

    .mySwiper22 .swiper-slide-active {
      opacity: 1;
    }

    .mySwiper22 .swiper-slide img {
      display: block;
      width: 100%;
    }

    .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }
    .swiper-3d .swiper-slide-shadow-right{
      background: none;
    }
  `;

  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper, setSwiper] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="gallery" className="py-32">
      <style>{css}</style>
      <div className="container mb-16">
        <h2 className="text-center text-4xl font-bold mb-4">Нашите колекции</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Разгледайте някои от най-ценните експонати в нашата колекция
        </p>
      </div>
      <div className="relative container max-w-3xl">
        {/* Left and right mask */}
        <div className="pointer-events-none absolute left-0 z-20 h-full w-42 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 z-20 h-full w-42 bg-gradient-to-l from-white to-transparent" />

        <div className="relative mx-auto flex max-w-3xl justify-center">
          {isLoaded && (
            <Swiper
              onSwiper={setSwiper}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              spaceBetween={100}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 80,
                modifier: 2.5,
              }}
              className="mySwiper22"
              modules={[EffectCoverflow, Autoplay]}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="mt-4 h-full w-full overflow-hidden object-cover shadow-lg"
                    src={image.src}
                    alt={image.alt}
                  />
                  <a
                    href={image.url}
                    className="absolute top-1 -left-2.5 flex size-10 items-center justify-center bg-foreground transition-all duration-300 hover:scale-90 hover:rotate-12"
                  >
                    {image.icon}
                    <span className="sr-only">{image.name}</span>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className="absolute flex h-[450px] w-[230px] flex-col justify-end border p-4">
            <h3 className="mb-2 text-2xl leading-7 font-semibold tracking-tighter">
              {images[activeIndex].name}
            </h3>
            <p className="text-sm">{images[activeIndex].role}</p>
            <div className="absolute right-0 -bottom-12 flex gap-2 md:-right-20 md:bottom-0">
              <button
                className="bg-muted p-2 active:scale-95"
                onClick={(e) => {
                  e.preventDefault();
                  swiper?.slidePrev();
                }}
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                className="bg-muted p-2 active:scale-95"
                onClick={(e) => {
                  e.preventDefault();
                  swiper?.slideNext();
                }}
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
