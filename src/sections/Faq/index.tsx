"use client";

// import core package
import { useState } from "react";

// import components
import { Typography } from "@/components/ui/Typography";

//  import icons
import { FaRegWindowMinimize } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IcoMinus, IcoPlus } from "@/assets/svg";

interface FaqProps {
  bgColor?: string;
}

const Faq: React.FC<FaqProps> = ({ bgColor }) => {
  const [faq, setFaq] = useState([
    {
      question: "What will I learn in the Color for Creatives course?",
      answer:
        "Explore color theory fundamentals, practical applications, and techniques to create effective color palettes tailored for design projects.",
      open: false,
    },
    {
      question: "Who is this course designed for?",
      answer:
        "Ideal for designers, artists, and anyone looking to enhance their understanding and use of color in professional and personal projects.",
      open: false,
    },
    {
      question: "How can I access the course materials?",
      answer:
        "Upon registration, you'll receive access to all course materials including videos, PDFs, and additional resources through our online platform.",
      open: false,
    },
    {
      question:
        "What support is available if I have questions during the course?",
      answer:
        "Learners can access our dedicated support team through email, forums, and scheduled live Q&A sessions for ongoing assistance.",
      open: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <section className=" overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div className="px-4 py-20 md:pt-[120px] md:pb-20 mx-auto sm:px-6 lg:px-8 max-w-7xl  ">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-[1px] bg-primary"></div>
            <Typography variant="Medium_H4" className="text-primary block ">
              Lorem ipsum
            </Typography>
            <div className="w-10 h-[1px] bg-primary"></div>
          </div>
          <Typography variant="Medium_H3" className={` text-title block mt-2`}>
            Frequently asked questions
          </Typography>
          <Typography
            variant="Regular_H6"
            className="text-description block mt-3 mx-auto max-w-[700px]"
          >
            Everything you need to know about the product and billing.
          </Typography>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faq.map((item, index) => (
            <div key={index}>
              <div
                className={`${
                  item.open ? "block border-b border-primary" : "border-b"
                } transition-all duration-300 bg-white  cursor-pointer hover:bg-gray-50 `}
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5"
                  onClick={() => toggleFaq(index)}
                >
                  <span
                    className={`flex text-lg font-semibold text-black  !text-start`}
                  >
                    {" "}
                    {item.question}{" "}
                  </span>

                  {!item.open ? <IcoPlus /> : <IcoMinus />}
                </button>

                <div
                  className={`${
                    item.open ? "block " : "hidden"
                  }  pb-8   text-dark_gray `}
                >
                  <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
