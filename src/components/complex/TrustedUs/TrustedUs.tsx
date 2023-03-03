import { Container } from "../../parts/Container/Container";
import { CarouselDots } from "../../parts/CarouselDots/CarouselDots";
import Carousel from "react-multi-carousel";

const CAROUSEL_ITEMS = [
  { id: 1, src: "/img/dworek_marysienka.png", title: "Dworek Marysieńka" },
  { id: 2, src: "/img/diamentowa.png", title: "Restauracja Diamentowa" },
  { id: 3, src: "/img/zgok_olsztyn.png", title: "ZGOK Olsztyn" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 9999, min: 1280 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1279, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

export const TrustedUs = () => {
  return (
    <Container>
      <div className="flex w-full flex-col items-center text-center font-second text-xl font-bold text-white">
        <p>
          Zaufaj nam jak ponad <span className="text-yellow-500">500+</span> innych firm i osób prywatnych
        </p>
        <Carousel
          autoPlay
          arrows={false}
          draggable={false}
          responsive={responsive}
          infinite
          showDots
          autoPlaySpeed={4000}
          transitionDuration={500}
          customDot={<CarouselDots onClick={() => {}} />}
          dotListClass="flex w-full h-10 gap-x-4"
          containerClass="flex items-center w-full h-full"
          sliderClass="h-64"
          itemClass="flex items-center justify-center"
        >
          {CAROUSEL_ITEMS.map((el) => (
            <img key={el.id} className="h-fit brightness-0 invert" src={el.src} title={el.title} />
          ))}
        </Carousel>
        <div className="flex w-full flex-col items-center justify-around gap-y-10 sm:flex-row"></div>
      </div>
    </Container>
  );
};
