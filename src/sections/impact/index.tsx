// import core package
import React from "react";
import Image, { StaticImageData } from "next/image";

// import ui
import { Typography } from "@/components/ui/Typography";

// import icons
import icon1 from "@/assets/icons/impact/63.svg";
import icon2 from "@/assets/icons/impact/59.svg";
import icon3 from "@/assets/icons/impact/74.svg";
import icon4 from "@/assets/icons/impact/44.svg";

interface CardData {
  icon: StaticImageData;
  title: string;
  des: string;
}

const Impact = () => {
  
  const cardData: CardData[] = [
    {
      icon: icon1,
      title: "63%",
      des: "Revolutionizing healthcare delivery with intuitive and efficient.",
    },
    {
      icon: icon2,
      title: "59%",
      des: "Revolutionize patient care with advanced SaaS technology.",
    },
    {
      icon: icon3,
      title: "74%",
      des: "A groundbreaking software transforming healthcare experiences.",
    },
    {
      icon: icon4,
      title: "44%",
      des: "Unleashing Positive Change: Revolutionizing Healthcare with patient.",
    },
  ];

  return (
    <section className="py-10 md:py-16 lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <Typography variant="Medium_H3" className="block">
            Impact Created
          </Typography>
          <Typography variant="Regular_H5" className="block mt-3">
            We help keep your business stay healthy inside out!
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-40 gap-x-10 lg:gap-10 mt-[240px]">
          {cardData.map((data, idx) => (
            <div
              key={idx}
              className={` ${idx === 1 || idx === 3 ? "lg:mt-[140px]" : ""} h-full`}
            >
              <div className="h-full md:h-auto bg-sky_light px-6 pb-8 pt-[100px] rounded-2xl relative">
                <div className="flex justify-center absolute -top-[140px] left-0 w-full">
                  <Image src={data.icon} alt="image" />
                </div>
                <div className="text-center flex flex-col h-auto">
                  <Typography variant="Medium_H2" className="block text-black flex-1">
                    {data.title}
                  </Typography>
                  <Typography
                    variant="Regular_H5"
                    className="block text-black_ mt-3"
                  >
                    {data.des}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
