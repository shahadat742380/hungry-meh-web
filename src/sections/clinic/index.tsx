// import core package
import Image from "next/image";
import React from "react";

// import ui
import { Typography } from "@/components/ui/Typography";

// import images
import rightImg from "@/assets/images/clinic/rightImg.png";

interface CardData {
  title: string;
  des: string;
}

const Client = () => {
  const cardData: CardData[] = [
    {
      title: "Must-Try Doctor's Solution!",
      des: "Unlock The Secret Weapon: A Product That Saves Time, Resources & Money!",
    },
    {
      title: "Boost Your Efficiency",
      des: "Discover how this revolutionary product can transform your life, saving you time.",
    },
    {
      title: "Maximize growth Efficiency",
      des: "Discover the our product designed to cut costs, optimize efficiency, and growth.",
    },
  ];

  return (
    <section className="lg:clinicBg bg-no-repeat bg-contain  bg-right  bg-primary py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <Typography
          variant="Medium_H3"
          className="block text-white max-w-[600px]"
        >
          Discover how this product can revolutionize your clinic!
        </Typography>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-20">
          <div className="col-span-2 space-y-10 order-2 md:order-1">
            {cardData.map((data, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="w-10 h-10 px-[14px] rounded bg-white flex justify-center items-center mt-2">
                  <Typography variant="Medium_H5" className="block text-black">
                    {idx + 1}
                  </Typography>
                </div>
                <div className="text-white">
                  <Typography variant="Medium_H4" className="block">
                    {data?.title}
                  </Typography>
                  <Typography variant="Regular_H6" className="block mt-2">
                    {data?.des}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-3 order-1 md:order-2">
            <Image
              src={rightImg}
              alt="image"
              width={740}
              height={440}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
