import { Container } from "../../parts/Container/Container";
import { TwoColumnDiv } from "../../parts/TwoColumnDiv/TwoColumnDiv";

const LEFT_ELEMENT = (
  <div className="flex flex-col font-second text-white">
    <p className="text-6xl font-bold leading-snug tracking-tighter">Zaufaj specjalistom</p>
  </div>
);
const RIGHT_ELEMENT = (
  <div>
    <img className="rounded-3xl" src="http://127.0.0.1:5173/test.png" />
  </div>
);

export const TopBanner = () => {
  return (
    <Container additionalClassName="my-56">
      <TwoColumnDiv leftElement={LEFT_ELEMENT} rightElement={RIGHT_ELEMENT} />
    </Container>
  );
};
