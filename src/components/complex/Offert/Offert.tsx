import { Container } from "../../parts/Container/Container";

import { TbDeviceCctv } from "react-icons/tb";
import { GiElectric, GiGate } from "react-icons/gi";
import { RiAlarmWarningLine, RiPhoneCameraLine } from "react-icons/ri";
import { BiLockOpenAlt } from "react-icons/bi";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

const itemClassName = "h-10 w-10 ";

const OFFERT_ITEMS = [
  {
    id: 1,
    icon: <TbDeviceCctv className={itemClassName} />,
    title: "Monitoring wizyjny",
    description:
      "Monitoring wizyjny stał się nieodłącznym elementem dzisiejszego społeczeństwa. W dzisiejszych czasach, kiedy przestępczość wzrasta, a zagrożenia dla bezpieczeństwa stale rosną, coraz więcej osób i firm decyduje się na zainstalowanie monitoringu w swoim domu lub biurze.",
  },
  {
    id: 2,
    icon: <GiElectric className={itemClassName} />,
    title: "Instalacje elektryczne",
    description:
      "Specjalizujemy się w projektowaniu, montażu oraz konserwacji instalacji elektrycznych w domach, mieszkaniach oraz budynkach komercyjnych. Dzięki naszym usługom możesz mieć pewność, że Twoje instalacje będą w najlepszym stanie, a co za tym idzie - zapewnią bezpieczeństwo oraz efektywność energetyczną.",
  },
  {
    id: 3,
    icon: <RiAlarmWarningLine className={itemClassName} />,
    title: "Alarmy",
    description:
      "Alarmy to niezbędne narzędzia w dzisiejszych czasach, które służą do ochrony domu i firmy przed kradzieżą, włamaniem i innymi zagrożeniami. Posiadanie alarmów niesie ze sobą wiele korzyści, zarówno z punktu widzenia bezpieczeństwa, jak i psychicznego spokoju właścicieli.",
  },
  {
    id: 4,
    icon: <RiPhoneCameraLine className={itemClassName} />,
    title: "Domofony",
    description:
      "Posiadanie domofonu niesie ze sobą wiele korzyści, zarówno z punktu widzenia bezpieczeństwa, jak i wygody korzystania z niego. Dzięki domofonom można uniknąć niepożądanych sytuacji, kontrolować dostęp do budynku oraz cieszyć się spokojem ducha.",
  },
  {
    id: 5,
    icon: <GiGate className={itemClassName} />,
    title: "Automatyka do bram",
    description:
      "Automatyka do bram to rozwiązanie, które zyskuje coraz większą popularność wśród właścicieli domów i firm. Pozwala ona na sterowanie bramą za pomocą pilota lub aplikacji mobilnej, co niesie ze sobą wiele korzyści.",
  },
  {
    id: 6,
    icon: <BiLockOpenAlt className={itemClassName} />,
    title: "Kontrola dostępu",
    description:
      "Kontrola dostępu zwiększa bezpieczeństwo. Dzięki temu, że tylko wybrane osoby mają dostęp do określonego miejsca, można uniknąć niepożądanych sytuacji, takich jak kradzieże, włamania, czy wandalizm. Jest to szczególnie ważne dla firm, które przechowują wartościowe informacje lub produkty.",
  },
  {
    id: 7,
    icon: <MdOutlineLocalFireDepartment className={itemClassName} />,
    title: "Systemy p. poż.",
    description:
      "Posiadanie systemu przeciwpożarowego jest jednym z kluczowych elementów zapewnienia bezpieczeństwa w każdym budynku, niezależnie od jego przeznaczenia - czy to jest dom, biurowiec, czy magazyn. System ten pozwala na szybkie wykrycie i lokalizację pożaru oraz umożliwia podjęcie odpowiednich działań ratunkowych, co może uratować życie i mienie.",
  },
];

export const Offert = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-10 top-1/2 -z-10 -translate-y-1/2 rotate-12 -scale-x-100 opacity-10">
        <img src="/img/logo_600.png" />
      </div>
      <Container additionalClassName="my-16">
        <div className="flex w-full flex-col gap-y-10">
          <p className="text-center font-second text-5xl font-bold text-white">
            Czym się <span className="text-primary">zajmujemy</span>
          </p>
          <p className="text-center text-lg leading-8 text-neutral-400">Sprawdź naszą bogatą oferte</p>
          <div className="just flex flex-col flex-wrap justify-center gap-6 sm:flex-row">
            {OFFERT_ITEMS.map((el) => (
              <div
                key={el.id}
                className="group flex  w-full flex-auto flex-col gap-y-6 rounded-md border-b-2 border-neutral-900 bg-neutral-900 p-5 text-neutral-400  shadow-2xl transition-all hover:border-primary sm:w-1/3"
              >
                <div className="w-fit rounded-md bg-neutral-800 p-4 transition-all group-hover:bg-primary group-hover:text-white">{el.icon}</div>
                <p className="text-2xl font-semibold transition-all group-hover:text-white">{el.title}</p>
                <p className="leading-8 ">{el.description}</p>
                <a href="#" className="w-fit text-primary">
                  Zobacz realizacje
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
