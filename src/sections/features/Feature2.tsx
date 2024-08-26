// import core package
import Image from "next/image";

// import images
import img from "@/assets/images/feature/feature2.png";

// import icons
import { IcoCheck } from "@/assets/svg";

// import components
import BtnPrimary from "@/components/ui/BtnPrimary";
import { Typography } from "@/components/ui/Typography";

const Feature2 = () => {
  return (
    <section className="py-16 lg:pt-32 lg:pb-24 md:py-20">
      <div className="max-w-[1153px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-[113px] gap-y-10">
          <div className="flex items-center">
            <div>
              <Image
                src={img}
                alt="image"
                height={595}
                width={294}
                className="object-cover"
              />
            </div>
            <div className="py-4 pr-[15px] pl-[33px]  bg-primary rounded-r-[10px] space-y-2">
              <div className="flex gap-3 w-[245px]">
                <IcoCheck />
                <Typography variant="Regular_H6" className="text-white block">
                  Easy access & <br />
                  readibility
                </Typography>
              </div>

              <div className="flex gap-3 w-[245px]">
                <IcoCheck />
                <Typography variant="Regular_H6" className="text-white block">
                  Eliminate wait time
                </Typography>
              </div>

              <div className="flex gap-3 w-[245px]">
                <IcoCheck />
                <Typography variant="Regular_H6" className="text-white block">
                  Contactless <br />
                  experience
                </Typography>
              </div>

              <div className="flex gap-3 w-[245px]">
                <IcoCheck />
                <Typography variant="Regular_H6" className="text-white block">
                  Instant translation to <br />
                  90 languages
                </Typography>
              </div>
            </div>
          </div>

          <div className="md:max-w-[420px]">
            <div>
              <Typography variant="Medium_H5" className="text-primary block">
                Our Features
              </Typography>
              <Typography
                variant="SemiBold_H3"
                className="text-black mt-2 block"
              >
                Lorem ipsum dolor sit amet consectetur. Mi ullamcorper.
              </Typography>
              <Typography
                variant="Regular_H6"
                className="text-description mt-6 block"
              >
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat
              </Typography>
            </div>
            <div className="mt-8">
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

export default Feature2;
