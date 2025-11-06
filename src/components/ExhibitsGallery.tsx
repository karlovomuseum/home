/** @source gallery19 */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import { Button } from "@/components/ui/button";

const ExhibitsGallery = () => {
  const [domLoaded, setDomLoaded] = React.useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const images = [
    {
      src: "https://images.pexels.com/photos/236482/pexels-photo-236482.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Динозаврови фосили в музей",
      name: "Палеонтологична колекция",
      description: "Открийте древните тайни на живота преди милиони години.",
      link: "#contact",
    },
    {
      src: "https://images.pexels.com/photos/63852/museum-breastplate-armor-knight-63852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Средновековна рицарска броня",
      name: "Военна история",
      description: "Разгледайте колекцията от средновековни оръжия и доспехи.",
      link: "#contact",
    },
    {
      src: "https://images.pexels.com/photos/27848384/pexels-photo-27848384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Величествена архитектурна сграда",
      name: "Архитектурно наследство",
      description: "Проследете развитието на българската архитектура.",
      link: "#contact",
    },
    {
      src: "https://images.pexels.com/photos/27537371/pexels-photo-27537371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Елегантна аркада със сенки и арки в София",
      name: "Градска архитектура",
      description: "Красотата на българските градове през вековете.",
      link: "#contact",
    },
  ];

  const css = `
    .mySwiper19 {
      width: 260px;
      height: 340px;
    }

    .mySwiper19 .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
    }

    .mySwiper19 .swiper-pagination {
      bottom: -40px !important;
    }

    .mySwiper19 .swiper-pagination-bullet-active {
      background-color: var(--primary);
    }
  `;
  return (
    <section className="py-32 bg-muted/30">
      <style>{css}</style>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Специални експозиции</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Открийте нашите тематични колекции и временни изложби
          </p>
        </div>
        <div className="flex flex-col items-center gap-10">
          {domLoaded && (
            <AnimatePresence mode="popLayout">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full"
              >
                <Swiper
                  effect="cards"
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  grabCursor={true}
                  modules={[EffectCards, Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                  className="mySwiper19"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className="h-full w-full overflow-hidden rounded-3xl object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                      <div className="absolute h-full w-full bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute flex h-full w-full flex-col justify-end p-4">
                        <h3 className="text-2xl font-bold text-white">
                          {image.name.split(" ")[0]}
                          <span className="font-playfair italic">
                            {" "}
                            {image.name.split(" ").slice(1).join(" ")}
                          </span>
                        </h3>
                        <p className="text-left text-xs text-white/50">
                          {image.description}
                        </p>
                        <Button
                          variant="secondary"
                          className="mt-4 w-fit rounded-full text-xs"
                          asChild
                        >
                          <a href={image.link}>
                            Научете повече{" "}
                            <ArrowRight size={14} className="-rotate-45" />
                          </a>
                        </Button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExhibitsGallery;
