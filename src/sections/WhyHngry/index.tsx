// import core package
import React, { ReactNode } from "react";

// import image
import phoneImg from "@/assets/images/ourDoctor/phoneImg.png";

// import component
import { Typography } from "@/components/ui/Typography";

// import icons
import {
  IcoBanner,
  IcoDot,
  IcoFood,
  IcoHome,
  IcoLoad,
  IcoQr,
} from "@/assets/svg";

interface CardData {
  img: ReactNode;
  title: string;
  des: string;
}

const WhyHungry = () => {
  const cardData: CardData[] = [
    {
      img: <IcoBanner />,
      title: "Lorem ipsum",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor ",
    },
    {
      img: <IcoDot />,
      title: "Lorem ipsum",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor ",
    },
    {
      img: <IcoQr />,
      title: "Lorem ipsum",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor ",
    },
    {
      img: <IcoFood />,
      title: "Lorem ipsum",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor ",
    },
    {
      img: <IcoLoad />,
      title: "Lorem ipsum",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor ",
    },
    {
      img: <IcoHome />,
      title: "Lorem ipsum",
      des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor ",
    },
  ];

  return (
    <section id="doctors" className="py-16 md:py-20 lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-[514px] mx-auto text-center ">
          <Typography variant="SemiBold_H3" className="text-title block">
            Why Hungry Meh
          </Typography>
          <Typography variant="Regular_H6" className="text-gray_ block mt-4">
            Lorem Ipsum is simply dummy text of the printing <br />
            Lorem Ipsum is simply dummy
          </Typography>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-8 md:mt-14">
            {cardData.map((data, idx) => (
              <div key={idx} className="py-[30px] px-[26px] bg-background hover:shadow-lg  duration-300">
                <div>
                  {data.img}
                </div>
                <Typography
                  variant="Medium_H4"
                  className="text-title block mt-8"
                >
                  {data?.title}
                </Typography>
                <Typography
                  variant="Regular_H5"
                  className="text-description mt-3 block"
                >
                  {data?.des}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHungry;
