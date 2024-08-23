// import core package
import Image from "next/image";
import React from "react";

// import ui
import { Typography } from "@/components/ui/Typography";

// import image
import img from "@/assets/images/hero/heroImg.png";
import BtnPrimary from "@/components/ui/BtnPrimary";

const Hero = () => {
  return (
    <main id="home" className="pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Typography variant="Bold_H1" className="text-black block ">
            Mind & Body. Balanced !
          </Typography>
          <Typography
            variant="Regular_H5"
            className="text-dark_gray block max-w-[764px] mx-auto mt-4"
          >
            Dopamine simplifies your health journey. Manage meds, connect with
            doctors, and track progress - all in one place.
          </Typography>
          <div className="mt-10">
            <BtnPrimary content={"Get Started"} />
          </div>
        </div>
        <div className="mt-16">
          <Image
            height={700}
            width={1280}
            placeholder="blur"
            src={img}
            alt="bannerImg"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
