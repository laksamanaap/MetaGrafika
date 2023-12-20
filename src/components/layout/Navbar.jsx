import React, { useState } from "react";
import metaLogo from "../../img/meta_logo.svg";
import calendar from "../../img/calendar.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="header" className="sticky top-0 z-10 bg-white-theme py-4">
      <div className="container px-4 lg:px-20">
        <div className="flex items-center justify-between gap-5">
          <div className="justify-start">
            <a href="#hero">
              <img src={metaLogo} alt="Meta" width="48" height="48" />
            </a>
          </div>
          <div className="hidden justify-center font-semibold sm:flex">
            <ul className="flex list-none">
              <li className="mx-1 text-secondary transition duration-300 hover:text-accent lg:mx-3">
                <a href="#hero">Home</a>
              </li>
              <li className="mx-1 text-secondary transition duration-300 hover:text-accent lg:mx-3">
                <a href="#cta">Our 3D</a>
              </li>
              <li className="mx-1 text-secondary transition duration-300 hover:text-accent lg:mx-3">
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <div className="grow sm:grow-0">
            <button className="ml-auto block">
              <a href="#link">
                <div className="flex flex-row gap-4 rounded-lg border-[1.5px] border-b-[3px] border-secondary px-4 py-2 font-semibold transition duration-300 hover:bg-accent/10 active:border-b">
                  <img src={calendar} alt="Calendar" width="24" height="24" />
                  <p className="ps-1 text-primary">Event</p>
                </div>
              </a>
            </button>
          </div>
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"}`}>
          <ul className="my-2 flex flex-col items-start gap-5">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#our">Our 3D</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
