/* eslint-disable react/no-unescaped-entities */
"use client";
// import core package
import Image from "next/image";

// import third party package and style
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import icon
import { ArrowLeft, ArrowRight } from "react-feather";
import { Typography } from "@/components/ui/Typography";

// import images
import avatar from "@/assets/images/clientReview/avater.png";

// carousel responsive object
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ClientReview = () => {
  const content = [
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Molestie lacus erat aenean erat proin turpis velit volutpat ut. Tincidunt volutpat adipiscing consectetur est. Egestas etiam vitae.",
      name: "SHAMRAIZ GUL",
      location: "BPL, INDIA",
      img: avatar,
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Molestie lacus erat aenean erat proin turpis velit volutpat ut. Tincidunt volutpat adipiscing consectetur est. Egestas etiam vitae.",
      name: "SHAMRAIZ GUL",
      location: "BPL, INDIA",
      img: avatar,
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Molestie lacus erat aenean erat proin turpis velit volutpat ut. Tincidunt volutpat adipiscing consectetur est. Egestas etiam vitae.",
      name: "SHAMRAIZ GUL",
      location: "BPL, INDIA",
      img: avatar,
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Molestie lacus erat aenean erat proin turpis velit volutpat ut. Tincidunt volutpat adipiscing consectetur est. Egestas etiam vitae.",
      name: "SHAMRAIZ GUL",
      location: "BPL, INDIA",
      img: avatar,
    },
  ];

  // @ts-ignore
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button
        onClick={() => onClick()}
        className="absolute bg-primary hidden md:visible left-3 top-0 md:flex items-center justify-center w-[42px] md:w-[50px] h-[42px] md:h-[50px] rounded-[50%] bg-primary-900"
      >
        <ArrowLeft size={20} className="text-white" />
      </button>
    );
  };

  // @ts-ignore
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button
        onClick={() => onClick()}
        className="absolute bg-primary hidden md:visible right-3 top-0 md:flex items-center justify-center w-[42px] md:w-[50px] h-[42px] md:h-[50px] rounded-[50%] bg-primary-900"
      >
        <ArrowRight size={20} className="text-white" />
      </button>
    );
  };

  return (
    <div className="bg-background py-[100px]">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <Typography
          variant="SemiBold_H4"
          className="block text-primary text-center"
        >
          Trusted by over 1000+ clients of the world’s leading companies
        </Typography>

        <div className="mt-14 review">
          <Carousel
            autoPlay={true}
            autoPlaySpeed={2000}
            showDots={true}
            infinite={true}
            className="w-full"
            responsive={responsive}
            // @ts-ignore
            customLeftArrow={<CustomLeftArrow />}
            // @ts-ignore
            customRightArrow={<CustomRightArrow />}
          >
            {content.map((data, i) => (
              <div key={i} className="w-[90%] md:w-[70%]  mx-auto mb-10">
                <Typography
                  variant="Regular_H3"
                  className="md:text-[31px] text-center block text-description"
                >
                  "{data.content}"
                </Typography>

                <div className="flex justify-center items-center mt-12">
                  <Image
                    src={data.img}
                    className="w-[48px] h-[48px] rounded-[50px]"
                    alt="img"
                    height={48}
                    width={48}
                  />
                  <div className="ml-4 font-oracle">
                    <p className="font-semibold text-base text-black_">{data.name}</p>
                    <p className="text-[0.813rem] mt-1 text-gray_">{data.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
