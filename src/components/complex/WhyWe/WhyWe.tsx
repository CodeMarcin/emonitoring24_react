import { Container } from "../../parts/Container/Container";

import { SlSettings } from "react-icons/sl";
import { SlPeople } from "react-icons/sl";
import { MdOutlineHighQuality } from "react-icons/md";
import { BiTimer } from "react-icons/bi";

const itemClassName = "h-10 w-10 ";

const WHY_WE_ITEMS = [
  {
    id: 1,
    icon: <SlSettings className={itemClassName} />,
    title: "Szeroki wachlarz usług",
    description:
      "Jesteśmy prężnie działającą firmą w takich obszarach jak instalacje elektryczne, monitoring wizyjny, alarmy, domofony, automatyka do bram, kontrola dostępu czy systemy przeciwpożarowe.",
  },
  {
    id: 2,
    icon: <SlPeople className={itemClassName} />,
    title: "Wykwalifikowana kadra",
    description:
      "Jesteśmy wykwalifikowanymi osobami, które posiadają nie tylko niezbędne umiejętności, ale i doświadczenie w swoim fachu dzięki czemu możemu zapewnić swoim klientom kompleksowe usługi w zakresie projektowania, montażu oraz serwisu.",
  },
  {
    id: 3,
    icon: <MdOutlineHighQuality className={itemClassName} />,
    title: "Wysokiej jakości materiały",
    description:
      "Wszystkie realizowane przez nas pracę oparte są na wysokiej jakości materiałach oraz sprzęcie, co zapewnia nie tylko bezpieczeństwo, ale również długotrwałą i niezawodną pracę instalacji.",
  },
  {
    id: 4,
    icon: <BiTimer className={itemClassName} />,
    title: "Szybki czas realizacji",
    description:
      "Działający w firmie zespół składa się z doświadczonych specjalistów, którzy potrafią szybko i skutecznie rozwiązywać wszelkie problemy związane z instalacjami elektrycznymi czy też monitoringiem.",
  },
];

export const WhyWe = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute right-10 top-1/2 -z-10 -translate-y-1/2 rotate-12 opacity-10">
          <img src="/img/logo_600.png" />
        </div>
        <Container additionalClassName="my-16">
          <div className="flex w-full flex-col gap-y-10">
            <p className="text-center font-second text-5xl font-bold text-white">
              Dlaczego <span className="text-primary">My</span>?
            </p>
            <p className="text-center text-lg leading-8 text-neutral-400">
              Posiadamy bogatą ofertę w której znajdują się <b>usługi elektryczne</b>, <b>montaż monitoringu wizyjnego</b>, <b>alarmów</b>, <b>domofonów</b>,
              <b> automatyki do bram</b> czy <b>systemów przeciwpożarowych</b>.
            </p>
            <div className="flex flex-col flex-wrap justify-evenly gap-6 sm:flex-row ">
              {WHY_WE_ITEMS.map((el) => (
                <div
                  key={el.id}
                  className="group flex  flex-col gap-y-6 rounded-md border-b-2 border-neutral-900 bg-neutral-900 p-5 text-neutral-400 shadow-2xl transition-all  hover:border-primary flex-auto sm:w-1/3 w-full  "
                >
                  <div className="w-fit rounded-md bg-neutral-800 p-4 transition-all group-hover:bg-primary group-hover:text-white">{el.icon}</div>
                  <p className="text-2xl font-semibold transition-all group-hover:text-white">{el.title}</p>
                  <p className="leading-8 ">{el.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
