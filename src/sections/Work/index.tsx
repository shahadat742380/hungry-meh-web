// import core package
import Image from "next/image";
import React, { ReactNode } from "react";

// import image
import middleImg from "@/assets/images/work/mockup.png";

// import ui
import { Typography } from "@/components/ui/Typography";
import {
  IcoCapterra,
  IcoG2,
  IcoGetApp,
  IcoProductHunt,
  IcoQrRound,
  IcoStar,
  IcoTagging,
  IcoTrustPilot,
} from "@/assets/svg";

interface CardData {
  img: ReactNode;
  title: string;
  des: string;
}
interface RatingProps {
  icon: ReactNode;
  rating: string;
}

const Work = () => {
  const cardData: CardData[] = [
    {
      img: <IcoQrRound />,
      title: "QR Code Scanning",
      des: "Lorem ipsum dolor sit amet consectetur. Tristique lacus nec in id quis in sed. Venenatis proin",
    },
    {
      img: <IcoTagging />,
      title: "Quick and Easy Tagging",
      des: "Lorem ipsum dolor sit amet consectetur. Tristique lacus nec in id quis in sed. Venenatis proin ",
    },
    {
      img: <IcoQrRound />,
      title: "QR Code Scanning",
      des: "Lorem ipsum dolor sit amet consectetur. Tristique lacus nec in id quis in sed. Venenatis proin ",
    },
    {
      img: <IcoTagging />,
      title: "Quick and Easy Tagging",
      des: "Lorem ipsum dolor sit amet consectetur. Tristique lacus nec in id quis in sed. Venenatis proin ",
    },
  ];

  const rattingData: RatingProps[] = [
    {
      icon: <IcoGetApp />,
      rating: "4.6/5 Rating",
    },
    {
      icon: <IcoProductHunt />,
      rating: "4.6/5 Rating",
    },
    {
      icon: <IcoG2 />,
      rating: "4.6/5 Rating",
    },
    {
      icon: <IcoCapterra />,
      rating: "4.6/5 Rating",
    },
    {
      icon: <IcoTrustPilot />,
      rating: "4.6/5 Rating",
    },
  ];

  return (
    <section
      id="solution"
      className="py-16 md:py-20 lg:pt-[120px] lg:pb-[160px]"
    >
      <div className="mx-auto max-w-[1185px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[514px] mx-auto text-center ">
          <Typography variant="SemiBold_H3" className="text-title block">
            How its work
          </Typography>
          <Typography variant="Regular_H6" className="text-gray_ block mt-4">
            Lorem Ipsum is simply dummy text of the printing <br />
            Lorem Ipsum is simply dummy
          </Typography>
        </div>

        {/* Card Container */}
        <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-3 items-center gap-10 md:gap-14 lg:gap-16">
          <div className="flex flex-col gap-y-16 md:gap-y-20 lg:gap-y-[150px]">
            {cardData.slice(2).map((data, idx) => (
              <div key={idx} className="max-w-[355px] mx-auto">
                <div className="flex justify-center">{data.img}</div>
                <Typography
                  variant="Medium_H4"
                  className="text-title block mt-4 text-center"
                >
                  {data?.title}
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className="text-description mt-4 block text-center"
                >
                  {data?.des}
                </Typography>
              </div>
            ))}
          </div>

          <div className="h-full">
            <Image
              src={middleImg}
              alt="Image"
              width={315}
              height={644}
              className="w-auto h-full object-cover object-left"
            />
          </div>
          <div className="flex flex-col gap-y-16 md:gap-y-20 lg:gap-y-[150px]">
            {cardData.slice(2).map((data, idx) => (
              <div key={idx}>
                <div className="flex justify-center">{data.img}</div>
                <Typography
                  variant="Medium_H4"
                  className="text-black block mt-4 text-center"
                >
                  {data?.title}
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className="text-black_ mt-4 block text-center"
                >
                  {data?.des}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[800px] mx-auto flex flex-wrap justify-center mt-[60px] ">
          {rattingData.map((data, idx) => (
            <div key={idx} className="px-4 py-3 text-center ">
              <div className="mt-3 flex justify-center">{data.icon}</div>
              <div className="flex gap-2 mt-3">
                {[...Array(5)].map((starIdx) => (
                  <div key={starIdx}>
                    <IcoStar />
                  </div>
                ))}
              </div>
              <Typography
                variant="Regular_H7"
                className="mt-2 md:text-[13px] text-description"
              >
                {data.rating}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
