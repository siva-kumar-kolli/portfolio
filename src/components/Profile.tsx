import { socialIcons } from "../constants/SocialMedia";
import Typewriter from "./Typewriter";
import profileImg from "../assets/ProjectImages/myphoto.png";

const Profile = () => {
  const phrases = [
    "a Developer",
    "Software Engineer",
    "Full Stack",
    "a Web Designer",
  ];

  return (
    <div className="md:flex md:justify-between py-16">
      <div className="md:flex md:justify-between w-full max-w-6xl">
        {/* Left Section */}
        <div className="text-white md:w-6/12 flex items-center">
          <div>
            <h1 className="text-3xl text-center font-bold font-serif leading-snug">
              Hello, I'm <br /> Siva Kumar Kolli
            </h1>

            <div className="md:h-14 h-16 text-center">
              <Typewriter phrases={phrases} />
            </div>

            <p className="font-light text-base font-mono mt-6 text-center md:text-left">
              I code beautifully simple things and I love what I do. Just simple
              like that!
            </p>

            <div className="md:flex justify-center md:justify-start space-y-4 md:space-y-0 py-8 md:gap-4">
              <a
  href="/example.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="border-[#13C5FD] border-2 px-10 py-3 mx-auto text-lg font-bold tracking-wider rounded-lg w-full md:w-auto text-center block"
>
  Resume
</a>

              <a
  href="#about"
  className="border-[#13C5FD] border-2 px-6 py-3 mx-auto text-lg font-bold tracking-wider rounded-lg w-full md:w-auto inline-block text-center"
>
  More About Me
</a>

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="border border-zinc-600 shadow-gray-100 md:w-3/12 rounded-2xl px-3 py-4 mt-8 md:mt-0">
  <div className="flex justify-between">
    <h1 className="text-xl font-bold">Siva ®</h1>
    <p className="text-xs text-right leading-snug">
      Frontend & Backend <br />
      Developer
    </p>
  </div>

  <img
    className="rounded-xl w-50 h-60 mx-auto my-4 object-cover"
    src={profileImg}
    alt="Profile"
  />

  <div className="py-2">
    <h1 className="text-center font-bold text-base">Siva Kumar Kolli</h1>
    <h1 className="text-center font-medium text-sm">
      Jr. Software Engineer
    </h1>
  </div>
  <p className="flex justify-center text-gray-300 text-[10px] py-1">
    © 2025 Siva. All Rights Reserved
  </p>

  <ul className="flex justify-evenly py-1">
    {socialIcons?.map((social: any, index: number) => (
      <a
        key={index}
        href={social.path}
        target="_blank"
        className="rounded-full border border-slate-500 p-2 cursor-pointer hover:border-[#13C5FD]"
      >
        {social.icon}
      </a>
    ))}
  </ul>

  <div className="flex justify-center py-2 w-full">
    <a
  href="#contact"
  className="border border-[#13C5FD] w-full py-2 rounded-lg font-bold tracking-widest text-xs inline-block text-center"
>
  Hire Me
</a>

  </div>
</div>
      </div>
    </div>
  );
};

export default Profile;
