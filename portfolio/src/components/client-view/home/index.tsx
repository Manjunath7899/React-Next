"use client";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import AnimationWrapper from "../animationWrapper";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Image from "next/image";
import profileImage from "../../../assets/profile.jpeg";

interface ClientHomeViewProps {
  data: any[];
}

function varients() {
  return {
    offscreen: {
      y: 150,
      opactity: 0,
    },
    onscreen: ({ duration = 0.2 } = {}) => ({
      y: 0,
      opactity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const socialIcons: any[] = [
  {
    id: "facebook",
    icon: <FaFacebookF color="#1877F2" className="w-[40px] h-[40px]" />,
  },
  {
    id: "linkedId",
    icon: <FaLinkedinIn color="#0077B5" className="w-[40px] h-[40px]" />,
  },
  {
    id: "instagram",
    icon: <FaInstagram color="#E1306C" className="w-[40px] h-[40px]" />,
  },
  {
    id: "github",
    icon: <FaGithub color="#181717" className="w-[40px] h-[40px]" />,
  },
];

const ClientHomeView: React.FC<ClientHomeViewProps> = ({ data }) => {
  const setVarients: any = useCallback(() => varients(), []);
  const containerRef = useRef(null);

  return (
    <div className="max-w-screen xl mt-24 px-8 xl:px-36 max-auto" id="home">
      <AnimationWrapper>
        <motion.div
          variants={setVarients}
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ml-16"
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <motion.h1
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 20,
                duration: 0.3,
              }}
              className="mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium leading-normal"
            >
              {data && data.length
                ? data[0]?.heading
                    .split(" ")
                    .map((item: any, index: number) => (
                      <span
                        key={index}
                        className={`${
                          index === 1 || index === 3
                            ? "text-green-600"
                            : "text-[#000]"
                        }`}
                      >
                        {item}{" "}
                      </span>
                    ))
                : null}
            </motion.h1>
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 20,
                duration: 0.3,
              }}
              className="text-[#000] mt-4 mb-8 font-bold text-[20px]"
            >
              {data && data.length ? data[0]?.summary : null}
            </motion.p>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 20,
                duration: 0.3,
              }}
              className="flex gap-10 cursor-pointer"
            >
              {socialIcons &&
                socialIcons.length > 0 &&
                socialIcons.map((item) => {
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 80,
                        duration: 4,
                      }}
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      whileTap={{
                        scale: 0.8,
                        rotate: -360,
                        borderRadius: "100%",
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  );
                })}
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              damping: 20,
              duration: 0.3,
            }}
            ref={containerRef}
            className="flex w-full justify-center"
          >
            <motion.div
              drag
              dragConstraints={containerRef}
              className="w-[400px] h-[400px] bg-green-600 relative"
            >
              <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#000] absolute z-0">
                <Image
                  src={profileImage}
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
};

export default ClientHomeView;
