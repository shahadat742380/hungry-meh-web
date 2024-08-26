/* eslint-disable react/no-unescaped-entities */

// import core package
import Image from "next/image";

// import component
import BtnPrimary from "@/components/ui/BtnPrimary";

// import images
import rightImg from "@/assets/images/steps/step-right-img.png";
import { Typography } from "@/components/ui/Typography";

const Steps = () => {
  return (
    <section className="py-16 lg:pt-32 lg:pb-24 md:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-[130px] gap-y-10 mt-10 lg:mt-16">
          <div className="relative lg:order-2 order-1">
            <div className="overflow-hidden w-full h-full rounded-[10px]">
              <Image
                className="object-contain w-full h-full !rounded-[10px]"
                src={rightImg}
                alt="Image"
                height={572}
                width={691}
              />
            </div>
          </div>

          <div className="w-full lg:w-[35%] lg:order-1 order-2">
            <div>
              <Typography variant="SemiBold_H3" className="block">
                Lorem ipsum dolor sit amet{" "}
                <span className="text-primary">consectetur.</span>{" "}
              </Typography>
              <Typography
                variant="Regular_H6"
                className="block text-description mt-6"
              >
                Provide your guest with a quick and easy way to pay for meals
                and take-out orders.
              </Typography>
            </div>
            <ul className="mx-auto mt-12 space-y-8">
              <li className="relative flex ">
                <div
                  className="absolute mt-0.5 top-[43px] left-8 w-px border-l-2 border-primary border-dashed  h-full"
                  aria-hidden="true"
                ></div>

                <div className="ml-[13px] relative flex items-center justify-center flex-shrink-0 w-10 h-10 bg-primary rounded-full shadow font-oracle text-[18px] text-white">
                  <span className="mt-1">1</span>
                </div>
                <div className="ml-6">
                  <Typography variant="Regular_H6" className="block mt-2">
                    Scan your QR code
                  </Typography>
                </div>
              </li>
              <li className="relative flex ">
                <div
                  className="absolute mt-0.5 top-[43px] left-8 w-px border-l-2 border-primary border-dashed  h-full"
                  aria-hidden="true"
                ></div>

                <div className="ml-[13px] relative flex items-center justify-center flex-shrink-0 w-10 h-10 bg-primary rounded-full shadow font-oracle text-[18px] text-white">
                  <span className="mt-1">2</span>
                </div>
                <div className="ml-6">
                  <Typography variant="Regular_H6" className="block mt-2">
                    Check the bill ( and split it if needed)
                  </Typography>
                </div>
              </li>
              <li className="relative flex ">
                <div
                  className="absolute mt-0.5 top-[43px] left-8 w-px border-l-2 border-primary border-dashed  h-full"
                  aria-hidden="true"
                ></div>

                <div className="ml-[13px] relative flex items-center justify-center flex-shrink-0 w-10 h-10 bg-primary rounded-full shadow font-oracle text-[18px] text-white">
                  <span className="mt-1">3</span>
                </div>
                <div className="ml-6">
                  <Typography variant="Regular_H6" className="block mt-2">
                    Leave a tip
                  </Typography>
                </div>
              </li>
              <li className="relative flex ">
                <div
                  className="absolute mt-0.5 top-[43px] left-8 w-px   h-full"
                  aria-hidden="true"
                ></div>

                <div className="ml-[13px] relative flex items-center justify-center flex-shrink-0 w-10 h-10 bg-primary rounded-full shadow font-oracle text-[18px] text-white">
                  <span className="mt-1">4</span>
                </div>
                <div className="ml-6">
                  <Typography variant="Regular_H6" className="block mt-2">
                    You'are done!
                  </Typography>
                </div>
              </li>
            </ul>

            <div className="mt-12">
              <BtnPrimary
                content={"Started for Free demo"}
                className="font-semibold md:text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
