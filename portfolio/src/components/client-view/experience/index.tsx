"use client";
import React from "react";

interface ClientExperieanceAndEducationView {
  experienceData: any[];
  educationData: any[];
}

const ClientExperieanceAndEducationView: React.FC<
  ClientExperieanceAndEducationView
> = ({ experienceData, educationData }) => {

  const myExperienceHeadingText = "My Experince";
  const myEducationHeadingText = "My Education";

  return (
    <div
      className="max-w-screen-2xl mt-24 max-sm:mt-12 px-6 mb-6 max-auto ml-30 max-sm:ml-25"
      id="experience"
    >
      <div className="grid grid-flow-col grid-cols-1">
        <div className="flex flex-row max-sm:flex-col max-sm:gap-10 justify-evenly row-start-2">
          <div className="flex flex-col gap-8">
            <div className="ml-12 mb-10 max-sm:mb-0">
              {myExperienceHeadingText
                .split(" ")
                .map((item: string, index: number) => {
                  return (
                    <span
                      key={index}
                      className={`${
                        index === 1 ? "text-green-600" : "text-[#000000]"
                      } text-5xl max-sm:text-3xl font-medium`}
                    >
                      {item}{" "}
                    </span>
                  );
                })}
            </div>
            <div className="flex flex-col gap-10">
              {experienceData?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col border-2 border-green-600 w-100 max-sm:w-70 h-auto rounded-lg p-5"
                  >
                    <p className="font-bold text-[18px]">{item.duration}</p>
                    <p className="font-bold text-[18px]">
                      {item.company}, {item.location}
                    </p>
                    <p className="font-bold text-[18px]">{item.position}</p>
                    <p className="text-[18px]">{item.jobprofile}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="ml-12 mb-10 max-sm:mb-0">
              {myEducationHeadingText
                .split(" ")
                .map((item: string, index: number) => {
                  return (
                    <span
                      key={index}
                      className={`${
                        index === 1 ? "text-green-600" : "text-[#000000]"
                      } text-5xl max-sm:text-3xl font-medium`}
                    >
                      {item}{" "}
                    </span>
                  );
                })}
            </div>
            <div className="flex flex-col gap-10">
              {educationData?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col border-2 border-green-600 w-100 max-sm:w-70 h-auto rounded-lg p-5"
                  >
                    <p className="text-[18px] font-bold">{item.degree}</p>
                    <p className="text-[18px] font-bold">{item.college}</p>
                    <p className="text-[18px] font-bold">{item.year}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientExperieanceAndEducationView;
