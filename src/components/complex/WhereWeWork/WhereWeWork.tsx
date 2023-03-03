import { AnimatedImageBlock } from "../../parts/AnimatedImageBlock/AnimatedImageBlock";
import { Container } from "../../parts/Container/Container";
import { TwoColumnDiv } from "../../parts/TwoColumnDiv/TwoColumnDiv";

const ELEMENT__LEFT = (
  <div className="flex flex-col gap-y-6">
    <p className="font-second text-4xl font-bold leading-normal text-white">
      Gdzie <span className="text-primary">pracujemy</span>
    </p>
    <p className="leading-8 text-neutral-400">
      Swoim zasięgiem obejmujemy takie miasta jak: <b>Ostrołęka</b>, <b>Myszyniec</b>, <b>Olsztyn</b>, <b>Łomża</b>, <b>Warszawa</b> oraz <b>wszystkie pobliskie </b>
      mniejsze miejscowości.
    </p>
    <p className="leading-8 text-neutral-400">
      Istnieje również możliwość wykonaniu usług poza podanym terenem. Wystarczy skontaktować się z nami, aby ustalić szczegóły.
    </p>
    <button className="w-fit rounded-md border-[1px] border-neutral-400 px-8 py-2 font-second text-lg font-medium text-white transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary ">
      Kontakt
    </button>
  </div>
);

export const WhereWeWork = () => {
  return (
    <Container additionalClassName="my-16">
      <TwoColumnDiv leftElement={ELEMENT__LEFT} rightElement={<AnimatedImageBlock image="/img/map.png" />} />
    </Container>
  );
};
