import React, { useState } from "react";
import { navItems } from "../constants/NavItemsList";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [showModal, setShowModal] = useState(false);

  const handleActiveLink = (nav: any) => {
    setActive(nav);
    setShowModal(false);
  };

  const handleShowmodal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap bg-gray-800 py-4 px-6 fixed w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {"<"}Siva{"/>"} <br />
          </h1>
        </div>

        <div className="block lg:hidden relative">
          <button
            onClick={handleShowmodal}
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {navItems?.map((nav: any) => (
              <li className="mr-10">
                <a
                  onClick={() => handleActiveLink(nav.title)}
                  key={nav.id}
                  className={`${
                    nav.title === active
                      ? " text-pink-700 no-underline"
                      : "cursor-pointer"
                  }`}
                  href={nav.path}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* modal for small screen */}

      {showModal && (
        <>
          <div className="invisible absolute left-0 -mt-[2px] flex flex-col group-focus-within:visible group-active:visible">
            <div className="ml-2 -mb-[1px] inline-block overflow-hidden">
              {/* <!-- triangle ↓ --> */}
              <div className="h-3 w-3 origin-bottom-left rotate-45 transform border border-red-500 bg-red-100"></div>
            </div>

            {/* <!-- menu ↓ --> */}
            <div className="flex min-w-max flex-col rounded-md border border-red-500 bg-red-100 px-2 py-1">
              <div className="cursor-pointer hover:underline">
                Do amazing stuff
              </div>
              <div className="cursor-pointer hover:underline">Go back</div>
            </div>
          </div>
          {/* <div className="absolute top-12 z-50 right-6 border-solid border-t-red-800 border-t-8 border-x-transparent border-x-8 border-y-8 border-y-transparent border-b-4 w-10"></div> */}
          <div className="bg-slate-900 shadow-xl rounded-lg  z-50 w-6/12 right-6 top-16 fixed overflow-y-auto overflow-x-hidden p-4">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {navItems?.map((nav: any) => (
                <li className=" text-white my-6">
                  <a
                    onClick={() => handleActiveLink(nav.title)}
                    key={nav.id}
                    className={`${
                      nav.title === active
                        ? "inline-block text-pink-700 no-underline text-xl font-bold"
                        : "cursor-pointer text-lg font-semibold"
                    }`}
                    href={nav.path}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
