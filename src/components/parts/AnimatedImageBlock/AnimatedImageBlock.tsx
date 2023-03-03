export interface IAnimatedImageBlock {
  image: string;
}

export const AnimatedImageBlock = ({ image }: IAnimatedImageBlock) => {
  return (
    <div className=" relative flex h-full w-full justify-center sm:justify-start">
      <img className="absolute right-8 bottom-12 -z-10" src="/img/animated_image_block/background.png" />
      <img className="absolute right-8 top-12 -z-10" src="/img/animated_image_block/polygon_107.png" />
      <img className="absolute w-[150px] sm:w-auto left-1/2 bottom-0 -translate-x-1/2 " src="/img/animated_image_block/polygon_163.png" />
      <img className="absolute right-0 bottom-1/3 -z-10" src="/img/animated_image_block/polygon_dark_57.png" />
      <img src={image} />
    </div>
  );
};
