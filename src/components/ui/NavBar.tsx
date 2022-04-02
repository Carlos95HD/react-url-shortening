export const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-center md:h-16">
        <h1 className="self-center text-2xl font-semibold whitespace-nowrap">
          Shortly
        </h1>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <div
          className="hidden w-full bg-nav p-8 rounded-md md:p-0 md:bg-transparent md:flex md:justify-between md:grow md:ml-4 md:w-4/5"
          id="mobile-menu"
        >
          {/* NavLinks */}
          <ul className="flex flex-col mt-4 border-b border-gray-500 md:border-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:self-center">
          <li className="self-center">
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-white md:text-gray-500 md:border-0 md:hover:text-gray-900 md:p-0"
              >
                Features
              </a>
            </li>
            <li className="self-center">
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-white md:text-gray-500 md:border-0 md:hover:text-gray-900 md:p-0"
              >
                Pricing
              </a>
            </li>
            <li className="self-center">
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-white md:text-gray-500 md:border-0 md:hover:text-gray-900 md:p-0"
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
                className="block py-2 pr-4 pl-3 text-white md:text-gray-500 md:border-0 md:hover:text-gray-900 md:p-0"
              >
                Login
              </a>
            </li>
            <li>
            <a
                href="/"
                className="btn btn-primary block py-2 pr-4 pl-3 text-white rounded-full w-full md:w-auto md:border-0 md:hover:disabled:"
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
