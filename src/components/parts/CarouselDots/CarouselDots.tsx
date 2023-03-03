export interface ICarouselDots {
  onClick: () => void;
}

export const CarouselDots = ({ onClick, ...rest }: ICarouselDots) => {
  return (
    <button
      className={`${rest?.active ? "h-2 w-6 rounded-full bg-primary transition-all" : "h-2 w-2 rounded-full bg-neutral-300 transition-all"} `}
      onClick={() => onClick()}
    ></button>
  );
};
