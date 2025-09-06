import React from "react";
import { skillSet } from "../constants/Technologies";

const TechStack = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-center w-full">
        <div className="">
          <div className="flex justify-center">
            <h1 className="inline-block leading-10 text-center font-bold text-4xl after:block after:border-b-4 after:border-pink-600">
              My Tech Stack
            </h1>
          </div>
          <h1 className="text-center font-normal text-lg py-4">
            Technologies i've been working with recently
          </h1>
        </div>
      </div>
      <div className="py-6">
  <div className="grid md:grid-cols-8 grid-cols-4 gap-3 md:gap-4">
    {skillSet?.map((skill) => (
      <div
        key={skill.id}
        className="flex items-center justify-center bg-gray-100 rounded-md py-2 px-0 hover:scale-105 transition"
      >
        <img
          className="rounded-xl md:h-[70px] h-[70px] w-[100px] px-1 py-1"
          src={skill.img}
          alt={skill.title}
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default TechStack;
