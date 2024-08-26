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
    <main
      id="home"
      className="py-20 lg:py-[175px] bg-background border-b-primary border-b-[14px] "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[781px] mx-auto">
          <div>
            <div className="text-center">
              <Typography variant="Bold_H1" className="block">
                Time To Taste{" "}
              </Typography>
              <Typography variant="Bold_H1" className="block text-primary">
                Delicious Food
              </Typography>
              <Typography variant="Medium_H5" className="block text-black/75 mt-6">
                Lorem ipsum dolor sit amet consectetur. Eu sit non duis sed vel
                enim vulputate dictum. Sagittis aliquam et interdum sed ut in eu
                quam lobortis.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
