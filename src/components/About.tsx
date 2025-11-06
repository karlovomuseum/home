import React from 'react'
/** @source about6 */
const About = () => {
  return (
    <section id="about" className="py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
          <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
            <div className="pr-6">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">
                Нашата история
              </h1>
              <p className="mb-9 lg:text-xl">
                Карловският музей е основан с мисията да съхрани и представи богатото културно 
                наследство на нашия регион. От древни тракийски артефакти до съвременни експонати, 
                ние разказваме историята на Карлово и неговите хора.
              </p>
              <p className="text-muted-foreground">
                Нашата колекция включва уникални предмети от различни исторически периоди - 
                от тракийската епоха, през османското владичество, до българското възраждане 
                и съвременността. Всеки експонат разказва своя история и допринася за 
                разбирането на нашето минало и настояще.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <img
                src="https://images.pexels.com/photos/1738955/pexels-photo-1738955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Българска традиционна носия"
                className="aspect-[0.7] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/15358970/pexels-photo-15358970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Български фолклорен фестивал"
                  className="aspect-[1.1] rounded-lg object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/29202402/pexels-photo-29202402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Традиционна българска архитектура"
                  className="aspect-[0.7] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <img
                src="https://images.pexels.com/photos/33686887/pexels-photo-33686887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Традиционна българска кухня"
                className="aspect-[0.9] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/15359001/pexels-photo-15359001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Кукерски фестивал в България"
                  className="aspect-[0.8] rounded-lg object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/33686882/pexels-photo-33686882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Българско традиционно жилище"
                  className="aspect-[0.9] rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="px-8">
              <h1 className="mb-8 text-2xl font-semibold lg:mb-6">
                Нашето пространство
              </h1>
              <p className="mb-9 lg:text-xl">
                Музеят се помещава в исторически реставрирана сграда от XIX век, 
                която сама по себе си е част от културното наследство на града. 
                Просторните зали и интерактивните експозиции създават уникално преживяване.
              </p>
              <p className="text-muted-foreground">
                Всяка зала е специално проектирана да представи различни аспекти от 
                местната история и култура. От археологически находки до етнографски 
                колекции, всеки посетител може да открие нещо интересно и поучително.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
