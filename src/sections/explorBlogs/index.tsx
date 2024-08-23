import { Typography } from "@/components/ui/Typography";
import React from "react";

import leftImg from "@/assets/images/exploreBlog/leftImg.png";

import img1 from "@/assets/images/exploreBlog/blog1.png";
import img2 from "@/assets/images/exploreBlog/blog2.png";
import img3 from "@/assets/images/exploreBlog/blog3.png";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";

const ExploreBlogs = () => {
  const blogData = [
    {
      img: img1,
      title: "Unlocking the Secrets of Better Health: Your Guide to Health.",
    },
    {
      img: img2,
      title:
        "10 Essential Tips for Maintaining Your Health - A Healthcare Blog",
    },
    {
      img: img3,
      title:
        "The Ultimate Guide to Wellness: Your Go-To Healthcare Blog Expert.",
    },
  ];

  return (
    <section id="blog" className="bg-sky_light py-10 md:py-16 lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Typography variant="Medium_H3" className="block text-black">
            Explore Our Blog
          </Typography>
          <Typography
            variant="Regular_H6"
            className="block text-dark_gray mt-3"
          >
            Look no further! Our Blogs will keep you up-to-date!
          </Typography>
        </div>
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          {/* Left blog */}
          <div>
            <div className="group">
              <div className="overflow-hidden w-full rounded-xl">
                <Image
                  src={leftImg}
                  alt="image"
                  width={596}
                  height={447}
                  className="w-full object-cover scale-100 group-hover:scale-105 duration-500"
                />
              </div>
              <div className="mt-6">
                <Typography variant="Medium_H4" className="block text-black">
                  Discover expert insights and practical tips on holistic
                  healthcare in our innovation.
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className=" text-primary mt-4 flex gap-2 items-center cursor-pointer"
                >
                  Read More{" "}
                  <FaArrowRight className="group-hover:ml-1 duration-500" />
                </Typography>
              </div>
            </div>
          </div>
          {/* right blogs */}
          <div className="space-y-8">
            {blogData.map((data, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 gap-8 items-start group w-full"
              >
                <div className=" col-span-2 overflow-hidden rounded-lg h-[204px] ">
                  <Image
                    src={data.img}
                    alt="blog image"
                    height={204}
                    width={272}
                    className=" object-cover scale-100 group-hover:scale-105 duration-500 h-full w-full"
                  />
                </div>
                <div className="col-span-3">
                  <Typography variant="Medium_H4" className="block text-black">
                    {data.title}
                  </Typography>
                  <Typography
                    variant="Regular_H6"
                    className=" text-primary mt-4 flex gap-2 items-center cursor-pointer"
                  >
                    Read More{" "}
                    <FaArrowRight className="group-hover:ml-1 duration-500" />
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-16  ">
          <Typography
            variant="Medium_H6"
            className="text-primary block cursor-pointer border-b-2 border-b-primary max-w-[150px] pb-2 mx-auto text-center"
          >
            Read all Blogs
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default ExploreBlogs;
