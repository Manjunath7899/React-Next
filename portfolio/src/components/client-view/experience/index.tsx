"use client";
import React from "react";

interface ClientExperieanceAndEducationView {
  experienceData: any[];
  educationData: any[];
}

const ClientExperieanceAndEducationView: React.FC<
  ClientExperieanceAndEducationView
> = ({ experienceData, educationData }) => {
  console.log(experienceData, 567890);

  const myExperienceHeadingText = "My Experince";
  const myEducationHeadingText = "My Education";

  return (
    <div
      className="max-w-screen-2xl mt-24 px-6 mb-6 max-auto ml-30"
      id="experience"
    >
      <div className="grid grid-flow-col grid-cols-1">
        <div className="flex flex-row justify-evenly row-start-2">
          <div className="flex flex-col gap-8">
            <div>
              {myExperienceHeadingText
                .split(" ")
                .map((item: string, index: number) => {
                  return (
                    <span
                      className={`${
                        index === 1 ? "text-green-600" : "text-[#000000]"
                      } text-5xl font-medium`}
                    >
                      {item}{" "}
                    </span>
                  );
                })}
            </div>
            <div className="w-100 h-auto border-2 border-green-600 rounded-lg">
              {experienceData?.map((item, index) => {
                return (
                  <div className="flex flex-col gap-1.5 p-5 font-bold text-[18px]">
                    <p className="">{item.duration}</p>
                    <p>
                      {item.company}, {item.location}
                    </p>
                    <p>{item.position}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              {myEducationHeadingText
                .split(" ")
                .map((item: string, index: number) => {
                  return (
                    <span
                      className={`${
                        index === 1 ? "text-green-600" : "text-[#000000]"
                      } text-5xl font-medium`}
                    >
                      {item}{" "}
                    </span>
                  );
                })}
            </div>
            <div className="w-100 h-auto border-2 border-green-600 rounded-lg">
              {experienceData?.map((item, index) => {
                return (
                  <div className="flex flex-col gap-1.5 p-5 font-bold text-[18px]">
                    <p className="">{item.duration}</p>
                    <p>
                      {item.company}, {item.location}
                    </p>
                    <p>{item.position}</p>
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
