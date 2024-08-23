"use client"

// import core package
import Image from "next/image";

// import images
import bg from "@/assets/images/banner/bannerBg.png";

// import component
import { Typography } from "@/components/ui/Typography";

// import jotai
import { useSetAtom } from 'jotai'
import { openModalAtom } from '@/app/jotaiStore'

const Banner = () => {
  const setOpenModal = useSetAtom(openModalAtom)

  return (
    <section className="relative overflow-hidden bg-black py-10 sm:py-16 lg:py-24 xl:py-32">
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background image"
          className="h-full w-full object-cover object-right  md:origin-top-left"
          placeholder="blur"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r  from-primary via-primary/80 to-transparent w-[90%] "></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[400px]">
          <Typography
            variant="Medium_H3"
            className={`block leading-tight text-white `}
          >
            Experience our product firsthand!
          </Typography>
          <Typography
            variant="Regular_H5"
            className="mt-4 block max-w-[470px] text-white"
          >
            Revolutionize your hospital operations with our cutting-edge
            management tool - schedule a product demo today for a seamless
            experience!
          </Typography>

          <div className="mt-10 flex gap-4">
            <button
            onClick={() => {
              setOpenModal(true)
            }}
            className="py-[14px] px-6 rounded-lg bg-white text-black text-base md:text-xl font-semibold">
              Connect With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
