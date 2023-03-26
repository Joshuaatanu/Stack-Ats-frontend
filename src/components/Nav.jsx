import React from "react";
import "../images/logo.svg";

function Nav() {
  return (
    <div>
      <header className="absolute sticky mx-auto p-3 lg:p-0 left-0 top-0 z-50 bg-white/90 w-full backdrop-blur">
        <div className="lg:mx-auto max-w-7xl mx-5 w-auto mt-5">
          <div className="relative flex h-full items-center justify-between my-auto">
            {/* <!-- logo --> */}
            <a href="/">
              <img
                src="/src/images/logo.svg"
                alt="logo"
                className="w-32 lg:w-40"
              />
            </a>
            {/* <!-- Nav Toggle Button --> */}
            <button
              id="menu"
              className="
            lg:hidden
            p-2
            focus-visible:ring-sky-100
            text-slate-700
            hover:text-neutral-600
            transition-colors
            "
              aria-expanded="false"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>

            <div
              role="menubar"
              className="
            hidden
            flex-col
            gap-4
            absolute
            z-40
            right-0
            left-0
            rounded-lg
            top-16
            shadow-sm
            bg-white
            text-left
            p-6
            border
            text-lg
            items-left
            w-auto
            border-sky-200
            lg:flex
            lg:flex-row
            lg:static
            lg:border-none
            lg:space-x-8
            lg:items-center
            lg:bg-transparent
            lg:shadow-none


            "
            >
              <a href="" className="hover:text-slate-400 duration-200">
                Home
              </a>
              <a href="#" className="hover:text-slate-400 duration-200">
                About
              </a>
              <a href="#" className="hover:text-slate-400 duration-200">
                How It Works
              </a>
              <a href="#" className="hover:text-slate-400 duration-200">
                Contact
              </a>

              {/* <!-- get started button --> */}
              <a
                href="/register"
                className="btn px-8 text-white text-center text-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
