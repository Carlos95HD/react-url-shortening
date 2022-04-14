import { useState } from "react";

export const NavBar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <nav className="border-gray-200 fixed top-0 z-50 w-full md:z-0 md:container md:mx-auto md:py-2.5 md:relative">
      <div className="flex flex-wrap items-center justify-between mx-auto text-center md:h-16">
        <div className="bg-white py-2 px-6 flex w-full justify-between md:w-auto md:p-0">
          <h1 className="self-center text-2xl font-semibold whitespace-nowrap">
            Shortly
          </h1>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none "
            onClick={() => setOpenNav(!openNav)}
          >
            <span className="sr-only">Open main menu</span>
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            openNav ? "h-96 bg-nav p-8" : "h-0 overflow-hidden"
          } w-full transition-all ease-out duration-500 mx-6 md:transition-none rounded-md md:p-0 md:bg-transparent md:flex md:justify-between md:grow md:ml-4 md:w-4/5 md:overflow-visible md:h-0`}
        >
          {/* NavLinks */}
          <ul className="flex flex-col mt-4 border-b border-gray-500 md:border-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:self-center">
            <li className="self-center">
              <a
                href="/"
                className="block py-2 pr-4 pl-3 md:border-0 md:hover:text-gray-900 md:p-0"
              >
                Features
              </a>
            </li>
            <li className="self-center">
              <a
                href="/"
                className="block py-2 pr-4 pl-3 md:border-0 md:hover:text-gray-900 md:p-0"
              >
                Pricing
              </a>
            </li>
            <li className="self-center">
              <a
                href="/"
                className="block py-2 pr-4 pl-3 md:border-0 md:hover:text-gray-900 md:p-0"
              >
                Resources
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:self-center">
            <li className="self-center">
              <a
                href="/"
                className="block py-2 pr-4 pl-3 md:border-0 md:hover:text-gray-900 md:p-0"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/"
                className="btn btn-primary block py-2 px-4 text-white rounded-full w-full md:w-auto md:border-0 md:hover:disabled:"
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
