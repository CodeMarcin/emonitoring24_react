import { Container } from "../../parts/Container/Container";
import { TwoColumnDiv } from "../../parts/TwoColumnDiv/TwoColumnDiv";
import { AnimatedImageBlock } from "../../parts/AnimatedImageBlock/AnimatedImageBlock";

const ELEMENT__RIGHT = (
  <div className="flex flex-col gap-y-6">
    <p className="font-second text-4xl font-bold leading-normal text-white">
      Autoryzowany przedstawiciel firmy <span className="text-primary">FAAC</span>
    </p>
    <p className="leading-8 text-neutral-400">
      Jesteśmy jednymi z autoryzowanych przedstawicieli firmy <b>FAAC</b> zajmującej się produkcją m. in. wysokiej jakości automatyki do bram.
    </p>
    <p className="leading-8 text-neutral-400">
      Firma posiada certyfikaty jakości ISO 9001:2015 oraz ISO 14001:2015, co świadczy o wysokim poziomie jakości oferowanych produktów.
    </p>
  </div>
);

export const Naac = () => {
  return (
    <Container additionalClassName="mt-16">
      <TwoColumnDiv leftElement={<AnimatedImageBlock image="/img/faac.png" />} rightElement={ELEMENT__RIGHT} />
    </Container>
  );
};
