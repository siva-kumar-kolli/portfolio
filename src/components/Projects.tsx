import React from "react";
import { projectsList } from "../constants/Projects";

const Projects = () => {
  return (
    <div className="">
      <div className="flex justify-center ">
        <h1 className="inline-block text-4xl leading-loose font-bold after:block after:border-b-4 after:border-orange-700">
          Projects
        </h1>
      </div>
      <div className="py-10">
        <p className="text-center text-lg font-semibold">
          Project i have worked recently
        </p>
      </div>

      <div className=" grid md:grid-cols-4 gap-6">
        {projectsList.map((project) => (
          // <div key={project.id} classNameName="relative w-4/12  group/item ">
          //   <img
          //     src={project.img}
          //     alt="projects"
          //     classNameName="p-4 group-hover/item:invisible transition-all duration-500 animate-bounce"
          //   />

          //   <div classNameName="absolute top-0 left-0 p-4 group/edit invisible group-hover/item:visible transition-all duration-500 group-hover/item:bg-red-800 group-hover/item:w-4/12">
          //     <div classNameName="w-full">
          //       <h1>{project.title}</h1>
          //     </div>
          //   </div>
          // </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="w-80 min-h-60 ">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125 group-hover:rounded-2xl"
                src={project.img}
                alt="project-items"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[55%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                {project.title}
              </h1>
              <p className="mb-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {project.about}
              </p>
              <button className="rounded-full bg-pink-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                <a href={project.path} target="_blank">
                  Live Link
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
