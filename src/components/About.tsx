import React from "react";
import { skills } from "../constants/Skills";

const About = () => {
  return (
    <div className="md:mx-2 mx-4 w-full">
      <div className="flex justify-center">
        <h1 className="font-bold text-center text-4xl leading-loose inline-block after:block after:border-b-4 after:border-pink-600">
          About Me
        </h1>
      </div>
      <div className="flex justify-center py-6">
        <h1 className="text-center text-slate-300 text-xl md:w-6/12">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h1>
      </div>

      <div className="md:flex md:justify-around md:space-x-10 py-10">
        <div className="w-full">
          <h1 className="text-3xl font-bold pb-10 ">Get to know me!</h1>
          <div className=" text-lg text-gray-300">
            <p className="py-2">
              I'm a FullStack Web Developer building the Front-end | Back-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <p className="py-4">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>

          <button className="py-4 font-mono">
            Let's talk{" "}
            <a
              href="#contact"
              className="hover:translate-x-8  transform duration-300 text-2xl"
            >
              {"->"}
            </a>
          </button>
        </div>

        <div className="w-full">
          <h1 className="text-3xl font-bold pb-10 ">My Skills</h1>
          <div className=" flex flex-wrap">
            {skills?.map((skill) => (
              <h1
                key={skill.id}
                className="m-2 inline-block bg-slate-800 px-4 py-6 rounded-lg"
              >
                {skill.title}
              </h1>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 py-10 pb-10">
  <div className="lg:col-span-7">
    <h1 className="text-center font-bold font-serif text-2xl my-4">
      Experience
    </h1>
    <div className="relative text-white border-s-4 border-gray-200 space-y-4">
      <div className="ms-5">
        <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white"></span>
        <div className="bg-neutral-800 p-4 hover:shadow-lg hover:shadow-neutral-600 transition duration-500 cursor-pointer">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-sm leading-tight">Jr. Software Engineer</h3>
            <span className="text-[10px] text-gray-400">July 2024 - Present</span>
          </div>
          <p className="text-xs">Lonrix Private Limited, Vizianagaram</p>
          <p className="text-xs">
            Developed and maintained dynamic, responsive web apps using ASP.NET Razor Pages, Web API & Web Forms.
          </p>
        </div>
        <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white"></span>
      </div>

      
    </div>

    <h1 className="text-center font-bold font-serif text-2xl my-4">
      Internship | Achievements
    </h1>
    <div className="relative text-white border-s-4 border-gray-200 space-y-4">
      <div className="ms-5">
        <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white"></span>
        <div className="bg-neutral-800 p-3 hover:shadow-lg hover:shadow-neutral-600 transition duration-500 cursor-pointer">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-sm leading-tight">Certification in Dotnet FullStack</h3>
            <span className="text-[10px] text-gray-400">Sept 2023 - Aug 2024</span>
          </div>
          <p className="text-xs">Magneq Software, Hyderabad</p>
          <p className="text-xs">
            .NET Developer with hands-on experience in C#, ASP.NET Core, MVC, API & modern web practices.
          </p>
        </div>
      </div>

      <div className="ms-5">
        <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white"></span>
        <div className="bg-neutral-800 p-3 hover:shadow-lg hover:shadow-neutral-600 transition duration-500 cursor-pointer">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-sm leading-tight">Aspiring MERN FullStack</h3>
            <span className="text-[10px] text-gray-400">June 2023 - Ongoing</span>
          </div>
          <p className="text-xs">NXTWave Disruptive Technologies, Hyderabad</p>
          <p className="text-xs">
            Hands-on full stack program (MERN) with industry-oriented, reverse-engineered curriculum.
          </p>
        </div>
      </div>

      <div className="ms-5">
        <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white"></span>
        <div className="bg-neutral-800 p-3 hover:shadow-lg hover:shadow-neutral-600 transition duration-500 cursor-pointer">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-sm leading-tight">Full Stack Web Developer</h3>
            <span className="text-[10px] text-gray-400">Sept 2022 - May 2023</span>
          </div>
          <p className="text-xs">OnetruWeb Software, Bangalore</p>
          <p className="text-xs">
            Worked with PHP, Laravel, MySQL, WordPress & modern frontend frameworks.
          </p>
        </div>
        <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white"></span>
      </div>
    </div>
  </div>

  <div className="lg:col-span-3">
    <h1 className="text-center font-bold font-serif text-2xl my-4">
      Education
    </h1>
    <div className="relative text-white border-s-4 border-gray-200 space-y-4">
      <div className="ms-5">
        <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white"></span>
        <div className="bg-neutral-800 p-4 hover:shadow-lg transition duration-500 cursor-pointer">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-sm leading-tight">MCA</h3>
            <span className="text-[10px] text-gray-400">Jan 2024 - Expected Nov 2025</span>
          </div>
          <p className="text-xs">Andhra University</p>
        </div>
      </div>

      <div className="ms-5">
        <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white"></span>
        <div className="bg-neutral-800 p-3 hover:shadow-lg transition duration-500 cursor-pointer">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-sm leading-tight">BSc</h3>
            <span className="text-[10px] text-gray-400">Dec 2021</span>
          </div>
          <p className="text-xs">Andhra University — 72%</p>
        </div>
      </div>

      <div className="ms-5">
        <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white"></span>
        <div className="bg-neutral-800 p-3 hover:shadow-lg transition duration-500 cursor-pointer">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-sm leading-tight">Intermediate</h3>
            <span className="text-[10px] text-gray-400">April 2017</span>
          </div>
          <p className="text-xs">AP Model School — 78%</p>
        </div>
      </div>

      <div className="ms-5">
        <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white"></span>
        <div className="bg-neutral-800 p-3 hover:shadow-lg transition duration-500 cursor-pointer">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-sm leading-tight">SSC</h3>
            <span className="text-[10px] text-gray-400">March 2015</span>
          </div>
          <p className="text-xs">Z.P. High School — 77%</p>
        </div>
        <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white"></span>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
