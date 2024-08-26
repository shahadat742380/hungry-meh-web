// import core package
import React from "react";
import Image from "next/image";

// import images
import image from "@/assets/images/about/Logo.png";

// import ui
import { Typography } from "@/components/ui/Typography";
import BtnPrimary from "@/components/ui/BtnPrimary";

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="py-16 lg:pt-32 lg:pb-24 md:py-20 "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-2 items-center">
        <div className="flex justify-center">
          <Image
            src={image}
            height={290}
            width={249}
            alt="about image"
            className="object-cover"
          />
        </div>
        <div>
          <Typography variant="Medium_H4" className="text-primary block">
            About us
          </Typography>
          <Typography variant="SemiBold_H3" className="text-black_ mt-2 block">
            Lorem ipsum dolor sit amet consectetur. Mi ullamcorper.
          </Typography>
          <Typography variant="Regular_H6" className="block mt-6 text-gray_">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat{" "}
          </Typography>

          <ul className="mt-6 space-y-4 list-disc ml-5">
            <li>
              <Typography variant="Regular_H5" className="text-black_ block">
                Lorem ipsum dolor sit amet consectetur. Nibh id in.
              </Typography>
            </li>
            <li>
              <Typography variant="Regular_H5" className="text-black_ block">
                TLorem ipsum dolor sit amet consectetur. Aliquam orci.
              </Typography>
            </li>
            <li>
              <Typography variant="Regular_H5" className="text-black_ block">
                Lorem ipsum dolor sit amet consectetur. Sagittis magna.
              </Typography>
            </li>
          </ul>
          <div className="mt-10">
            <BtnPrimary className="font-semibold md:text-xl" content="Started for Free demo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
