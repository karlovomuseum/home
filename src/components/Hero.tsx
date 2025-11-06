/** @source hero215 */
import { ArrowRight } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="py-32">
      <div className="relative container min-h-[100vh]">
        <div className="absolute bottom-45 z-10 lg:max-w-xl">
          <div className="absolute top-0 z-1 size-full bg-background blur-2xl" />
          <h1 className="relative z-20 text-left font-playfair text-5xl tracking-tighter lg:text-6xl">
            Открийте историята на Карлово
          </h1>
          <p className="relative z-20 mt-8 text-muted-foreground">
            Потопете се в богатото културно наследство на нашия град. Разгледайте уникални експонати, 
            исторически артефакти и научете повече за традициите, които са формирали Карлово през вековете.
          </p>
        </div>
        <div className="absolute bottom-20 z-10 max-w-xl lg:right-25 lg:bottom-45">
          <Button className="group mt-10 flex w-fit items-center justify-center gap-2 rounded-full border px-4 py-1 tracking-tight" asChild>
            <a href="#contact">
              Свържете се с нас
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:rotate-0" />
            </a>
          </Button>
        </div>
        <div className="absolute -top-20 right-0 w-[27rem] max-w-xl">
          <img
            src="https://images.pexels.com/photos/9652495/pexels-photo-9652495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="animate-fade-in rounded-2xl object-cover"
            alt="Исторически замък в България"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
