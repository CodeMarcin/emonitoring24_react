export interface ICarouselDots {
  onClick: () => void;
}

export const CarouselDots = ({ onClick, ...rest }: ICarouselDots) => {
  return (
    <button
      className={`${rest?.active ? "h-2 w-6 rounded-full bg-yellow-500 transition-all" : "h-2 w-2 rounded-full bg-yellow-50 transition-all"} `}
      onClick={() => onClick()}
    ></button>
  );
};
