"use client";
import React from "react";
import AnimationWrapper from "../animationWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "../../../assets/about-image.png";

interface ClientAboutViewProps {
  data: any[];
}

const ClientAboutView: React.FC<ClientAboutViewProps> = ({ data }) => {
  const aboutDataInfo = [
    {
      label: "Client",
      value: data[0].noofclients || "0",
    },
    {
      label: "Project",
      value: data[0].noofprojects || "0",
    },
    {
      label: "Experience",
      value: data[0].yearofexperience || "0",
    },
  ];

  const headingText = "Why Hire Me For Your Next Project ?";

  return (
    <div className="max-w-screen mt-24 max-sm:mt-0 mb-6 max-sm:mb-0 px-6 lg:px-40 max-auto" id="about">
      <div className="w-full flex">
        <AnimationWrapper className="rounded-lg w-full grid grid-flow-row grid-cols-1">
          <div className="w-full flex max-sm:flex-col flex-row divide-x-2 divide-green-600 max-sm:divide-y-2 max-sm:divide-x-0 justify-between">
            {aboutDataInfo.map((aboutInfoItem, index) => {
              return (
                <motion.div
                  key={index}
                  className={`${
                    index === 0
                      ? "justify-start max-sm:justify-center"
                      : index === 1
                      ? "justify-center max-sm:justify-center"
                      : "justify-end"
                  } flex-1 flex justify-center items-center px-6 text-center max-sm:justify-center`}
                >
                  <div className="flex flex-col">
                    <motion.p
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        duration: 0.5,
                      }}
                      className="text-[50px] max-sm:text-[35px] text-green-600 font-bold"
                    >
                      {aboutInfoItem.value}+
                    </motion.p>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        duration: 0.5,
                      }}
                      className="text-[50px] max-sm:text-[35px] text-back font-bold"
                    >
                      {aboutInfoItem.label}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimationWrapper>
      </div>
      <AnimationWrapper className="mt-12 max-sm:mt-6 pt-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="leading-[70px] mb-4 max-sm:mb-0 text-3xl lg:text-4xl max-sm:text-2xl xl:text-5xl font-medium">
            {headingText.split(" ").map((item, index) => {
              return (
                <span
                  key={index}
                  className={`${
                    index === item.length - 1 ? "text-green-600" : "text-[#000]"
                  }`}
                >
                  {item}{" "}
                </span>
              );
            })}
          </h1>
          <p className="text-[#000] mt-4 max-sm:mt-0 mb-8 font-bold text-2xl max-sm:text-lg">
            {data[0]?.aboutme}
          </p>
        </div>
      </AnimationWrapper>
      <div className="max-w-screen-lg grid grid-flow-row grid-cols-1 ml-[12%]">
        <AnimationWrapper className="flex max-sm:flex-col justify-center items-center w-full gap-10">
          <motion.div className="h-full w-full p-4 max-sm:hidden">
            <Image
              src={aboutImage}
              alt="About Me"
              width={600}
              height={700}
              quality={100}
              className="object-cover"
            />
          </motion.div>
          <motion.div className="flex justify-center items-center gap-5 max-sm:gap-3 max-sm:mr-20">
            {data[0]?.skills.split(",").map((skillItem: any, index: number) => {
              return (
                <motion.div key={index} className="w-full flex flex-wrap justify-center items-center">
                  <button className="bg-white border-2 rounded-lg border-green-600 px-6 max-sm:px-3 max-sm:py-2 py-3 cursor-pointer font-semibold text-2xl max-sm:text-lg">
                    {skillItem}
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default ClientAboutView;
