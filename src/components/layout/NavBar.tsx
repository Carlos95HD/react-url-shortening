import { useState } from "react";
import { Logo } from "./Logo";

export const NavBar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <nav className="border-gray-200 fixed top-0 z-50 w-full md:z-0 md:container md:mx-auto md:py-2.5 md:relative">
      <div className="flex flex-wrap items-center justify-between mx-auto text-center md:flex-nowrap md:h-16">
        <div className="bg-white pb-2 pt-4 px-6 flex w-full justify-between md:w-auto md:p-0">
          <a href="/#" className="self-center whitespace-nowrap">
            <Logo fill={"#232127"} />
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none "
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            openNav ? "h-[23rem] bg-nav p-8" : "h-0 overflow-hidden"
          } flex flex-col text-lg font-semibold text-white place-content-center w-full md:text-gray-400 transition-all ease-out duration-500 mx-6 md:flex-row md:transition-none rounded-md md:p-0 md:bg-transparent md:flex md:justify-between md:grow md:ml-4 md:w-4/5 md:overflow-visible md:h-0`}
        >
          {/* NavLinks */}
          <ul className="flex flex-col md:border-0 md:ml-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:self-center">
            <li className="self-center">
              <a
                href="/#"
                className="block py-2 pr-4 pl-3 md:border-0 hover:text-gray-300 md:text-gray-violet md:hover:text-violet-dark md:p-0"
              >
                Features
              </a>
            </li>
            <li className="self-center my-4">
              <a
                href="/#"
                className="block py-2 pr-4 pl-3 md:border-0 hover:text-gray-300 md:text-gray-violet md:hover:text-violet-dark md:p-0"
              >
                Pricing
              </a>
            </li>
            <li className="self-center mb-4 md:mb-0">
              <a
                href="/#"
                className="block py-2 pr-4 pl-3 md:border-0 hover:text-gray-300 md:text-gray-violet md:hover:text-violet-dark md:p-0"
              >
                Resources
              </a>
            </li>
          </ul>

          <div className="border-b border-gray-500 w-full sm:w-60 self-center md:hidden"></div>

          {/* Buttons */}
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:self-center md:w-[8.2rem]">
            <li className="self-center mb-4 md:mb-0">
              <a
                href="/#"
                className="block py-2 pr-4 pl-3 md:border-0 hover:text-gray-300 md:text-gray-violet md:hover:text-violet-dark md:p-0"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/#"
                className="btn btn-primary block py-2 px-4 rounded-full w-full sm:w-60 md:w-auto md:border-0 md:hover:disabled"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
