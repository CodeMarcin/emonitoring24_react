import { AnimatedCount } from "./components/complex/AnimatedCount/AnimatedCount";
import { Naac } from "./components/complex/Naac/Naac";
import { TopBanner } from "./components/complex/TopBanner/TopBanner";
import { TrustedUs } from "./components/complex/TrustedUs/TrustedUs";
import { WhyWe } from "./components/complex/WhyWe/WhyWe";

export const App = () => {
  return (
    <>
      <TopBanner />
      <TrustedUs />
      <WhyWe />
      <Naac />
      <AnimatedCount />
    </>
  );
};
