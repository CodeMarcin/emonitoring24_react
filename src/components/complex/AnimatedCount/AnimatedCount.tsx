import { Container } from "../../parts/Container/Container";

import { BsCalendar3 } from "react-icons/bs";
import { BiCctv } from "react-icons/bi";
import { BiHappyAlt } from "react-icons/bi";

import CountUp from "react-countup";

const itemClassName = "h-10 w-10 ";

const COUNT_ITEMS = [
  {
    id: 1,
    icon: <BsCalendar3 className={itemClassName} />,
    end: 12,
    suffix: "Lat na rynku",
  },
  {
    id: 2,
    icon: <BiCctv className={itemClassName} />,
    end: 2000,
    suffix: "Zamontowanych kamer",
  },
  {
    id: 3,
    icon: <BiHappyAlt className={itemClassName} />,
    end: 1000,
    suffix: "Zadowolonych klientów",
  },
];

export const AnimatedCount = () => {
  return (
    <Container additionalClassName="my-16">
      <div className="flex flex-col flex-wrap justify-between gap-6 font-second sm:flex-row">
        {COUNT_ITEMS.map((el) => (
          <div
            key={el.id}
            className="group flex flex-1 flex-col gap-x-4 gap-y-4 rounded-md border-b-2  border-neutral-900 bg-neutral-900 p-5 text-neutral-400 shadow-2xl transition-all  hover:border-primary"
          >
            <div className="flex items-center gap-x-4">
              <div className="w-fit rounded-md bg-neutral-800 p-4 transition-all group-hover:bg-primary group-hover:text-white">{el.icon}</div>

              <p className="text-4xl font-extrabold text-white ">
                {<CountUp end={el.end} />}
                <sup>+</sup>
              </p>
            </div>

            <p className="text-center text-xl font-medium transition-all group-hover:text-primary">{el.suffix}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
