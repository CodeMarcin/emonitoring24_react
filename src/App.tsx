import { AnimatedCount } from "./components/complex/AnimatedCount/AnimatedCount";
import { Faac } from "./components/complex/Faac/Faac";
import { TopBanner } from "./components/complex/TopBanner/TopBanner";
import { TrustedUs } from "./components/complex/TrustedUs/TrustedUs";
import { WhyWe } from "./components/complex/WhyWe/WhyWe";
import { WhereWeWork } from "./components/complex/WhereWeWork/WhereWeWork";

export const App = () => {
  return (
    <>
      <TopBanner />
      <TrustedUs />
      <WhyWe />
      <Faac />
      <AnimatedCount />
      <WhereWeWork />
    </>
  );
};
