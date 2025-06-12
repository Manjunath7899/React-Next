"use client";
import Link from "next/link";
import React from "react";

interface ClientProjectViewProps {
  data: any[];
}

const ClientProjectView: React.FC<ClientProjectViewProps> = ({ data }) => {
  const projectHeadingText = "My Projects";
  return (
    <div
      className="max-w-screen-2xl mt-24 max-sm:mt-12 mb-6 px-6 max-auto ml-30 max-sm:ml-23"
      id="project"
    >
      <div className="w-full grid grid-flow-row grid-row-2">
        <div className="flex max-sm:mr-45 justify-center items-center">
          <h1>
            {projectHeadingText.split(" ").map((item: any, index: number) => {
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
          </h1>
        </div>
        <div className="mt-24 max-sm:mt-10 flex justify-center max-sm:ml-0 mr-39 gap-8 row-start-2 ml-60 flex-wrap">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-lg w-[300px] h-[350px] max-sm:h-[300px] p-5 border-2 border-green-600 relative"
              >
                <p className="text-2xl font-bold">{item.name}</p>
                <p className="text-md ">{item.createdAt.split("T")[0]}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.technologies
                    .split(",")
                    .map((item: any, indexKey: number) => {
                      return (
                        <button
                          key={indexKey}
                          className="border-2 border-green-600 px-4 py-2 rounded-lg text-sm text-center w-[120px]"
                        >
                          {item}
                        </button>
                      );
                    })}
                </div>
                <div className="flex gap-5 item-center absolute bottom-0 ml-10">
                  <Link
                    href={item.website}
                    className="bg-green-600 p-2 text-center"
                  >
                    Website
                  </Link>
                  <Link
                    href={item.github}
                    className="bg-green-600 p-2 text-center"
                  >
                    Github
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientProjectView;
