"use client";

// ** import core package
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

// import ui component
import { Typography } from "../ui/Typography";

// import Logo and icon
import {
  IcoFacebook,
  IcoInstagram,
  IcoLinkedin,
  IcoTwitter,
  Logo,
} from "@/assets/svg";

// import icons

// import config
import { config } from "@/config";

// import jotai
import { useSetAtom } from "jotai";
import { openModalAtom } from "@/app/jotaiStore";

const Footer = () => {
  const location = usePathname();
  const setOpenModal = useSetAtom(openModalAtom);
  const currentYear = new Date().getFullYear();

  const handleNavigation = (section: string) => {
    // Redirect to home page with a hash anchor link
    window.location.href = `/#${section}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="py-8 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  justify-center space-y-10 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
          <div className="shrink-0 max-w-[300px]">
            <Logo />
            <Typography
              variant="Regular_H6"
              className={`block mt-4 text-gray_`}
            >
              From concept to reality, transforms dreams into achievements. Join
              our visionary community and thrive.
            </Typography>
            <div className="mt-4">
              <Typography
                variant="Regular_H6"
                className={`block`}
                link={config.PHONE}
              >
                <span className="text-gray_">Ph. No:</span> +91 95959 95959
              </Typography>
              <Typography
                variant="Regular_H6"
                className={`block `}
                link={config.EMAIL}
              >
                <span className="text-gray_">Email:</span> info@ezyconsult.com
              </Typography>
            </div>
            <div className="flex gap-4 mt-6">
              <Link target="_blank" href={config.TWITTER_URL}>
                <IcoTwitter />
              </Link>
              <Link target="_blank" href={config.FACEBOOK_URL}>
                <IcoFacebook />
              </Link>
              <Link target="_blank" href={config.INSTAGRAM_URL}>
                <IcoInstagram />
              </Link>
              <Link target="_blank" href={config.LINKEDIN_URL}>
                <IcoLinkedin />
              </Link>
            </div>
          </div>

          <div className="flex justify-between md:justify-start gap-10 md:gap-32">
            {/* Links */}
            <nav>
              <Typography
                variant="Medium_H5"
                className=" mb-8 block text-gray_"
              >
                Links
              </Typography>
              <ul className="space-y-4 text-black_">
                <li>
                  <button
                    onClick={() => handleNavigation("home")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("aboutUs")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    About us
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => handleNavigation("services")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("experts")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Experts
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("blog")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Blogs
                  </button>
                </li>
              </ul>
            </nav>

            {/* Other Links */}
            <nav>
              <Typography
                variant="Medium_H5"
                className=" mb-8 block text-gray_"
              >
                Others
              </Typography>
              <ul className="space-y-4 text-black_">
                <li>
                  <button
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Contact us
                  </button>
                </li>
                <li>
                  <Link
                    href="/help-support"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Help & Support
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-conditions"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="shrink-0 ">
            <div className="">
              <div className="max-w-[300px]">
                <Typography variant="Medium_H5" className={`block text-gray_`}>
                  Newsletter
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className={`block text-gray_ text-[13px] md:text-[13px] mt-2`}
                >
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </Typography>
              </div>

              <div className="mt-6">
                <div>
                  <input
                    type="text"
                    className="w-full rounded-lg border py-3 px-4 "
                    placeholder="Enter your email address "
                  />
                </div>
                <button className="bg-primary w-full py-3 rounded-lg text-white mt-4 text-base md:text-xl font-semibold">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t  pt-8 sm:mt-16 lg:mt-20">
          <div className="text-center">
            <Typography variant="Medium_H6" className="text-gray_ block">
              © Copyright {currentYear}, All Rights Reserved by hungrymeh.com
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
