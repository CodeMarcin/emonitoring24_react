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
    description: "Lorem ipsum dolor sit amet, dolor sit lorem ipsum solor amet Lorem ipsum dolor sit amet, dolor sit lorem ipsum solor amet",
  },
  {
    id: 2,
    icon: <SlPeople className={itemClassName} />,
    title: "Wykfalifikowana kadra",
    description: "Lorem ipsum dolor sit amet, dolor sit lorem ipsum solor amet",
  },
  {
    id: 3,
    icon: <MdOutlineHighQuality className={itemClassName} />,
    title: "Wysokiej jakości sprzęt",
    description: "Lorem ipsum dolor sit amet, dolor sit lorem ipsum solor amet",
  },
  {
    id: 4,
    icon: <BiTimer className={itemClassName} />,
    title: "Szybki czas realizacji",
    description: "Lorem ipsum dolor sit amet, dolor sit lorem ipsum solor amet",
  },
];

export const WhyWe = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 rotate-12 opacity-10 -z-10">
          <img src="/img/logo_600.png" />
        </div>
        <Container additionalClassName="my-16">
          <div className="flex w-full flex-col gap-y-10">
            <p className="text-center font-second text-5xl font-bold text-white">
              Dlaczego <span className="text-yellow-500">My</span>?
            </p>
            <p className="text-center text-lg text-neutral-400">
              Posiadamy bogatą ofertę w której znajdują się <b>usługi elektryczne</b>, <b>montaż monitoringu wizyjnego</b>, <b>alarmów</b>, <b>domofonów</b>,
              <b>automatyki do bram</b> czy <b>systemów przeciwpożarowych</b>.
            </p>
            <div className="flex flex-col flex-wrap justify-between gap-6 font-second sm:flex-row">
              {WHY_WE_ITEMS.map((el) => (
                <div
                  key={el.id}
                  className="group flex w-full flex-col gap-y-6 rounded-md border-yellow-500 bg-neutral-900 p-5 text-neutral-400 transition-all hover:border-b-2 hover:text-white sm:w-[calc(50%-12px)]"
                >
                  <div className="w-fit rounded-md bg-neutral-800 p-4 group-hover:bg-yellow-500">{el.icon}</div>
                  <p className="text-2xl font-semibold ">{el.title}</p>
                  <p className="">{el.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
