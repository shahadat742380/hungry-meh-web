"use client";

// import core package
import Image from "next/image";

// import images
import bg from "@/assets/images/banner/bannerBg.png";

// import component
import { Typography } from "@/components/ui/Typography";

// import jotai
import { useSetAtom } from "jotai";
import { openModalAtom } from "@/app/jotaiStore";
import BtnPrimary from "../ui/BtnPrimary";

const Banner = () => {
  const setOpenModal = useSetAtom(openModalAtom);

  return (
    <section className="relative overflow-hidden bg-black py-10 md:py-16 lg:pt-20 lg:pb-[106px]">
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background image"
          className="h-full w-full object-cover object-center"
          placeholder="blur"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto text-center">
          <Typography
            variant="Medium_H2"
            className={`block leading-tight text-white `}
          >
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Typography
            variant="Regular_H5"
            className="mt-4 block max-w-[470px] mx-auto text-center text-white"
          >
            Clarity gives you the blocks & components you need to create a truly
            professional website.
          </Typography>

          <div className="mt-10 flex justify-center">
            <BtnPrimary
              content={"Contact us"}
              onClick={() => {
                setOpenModal(true);
              }}
              className="bg-white text-black font-medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
