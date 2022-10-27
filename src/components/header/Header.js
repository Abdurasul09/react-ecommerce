import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((s) => s);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed top-0 left-0 right-0 w-full z-50">
      <NavLink to="/">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight uppercase underline">
            Abad
          </span>
        </div>
      </NavLink>

      {/* menu */}

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
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

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <NavLink
            to="/"
            className="block uppercase font-normal mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block uppercase font-normal mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className="block uppercase font-normal mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className="block uppercase font-normal mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Cart
          </NavLink>
          <NavLink
            to="/wishlist"
            className="block uppercase font-normal mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Wishlist
          </NavLink>
        </div>
        <div className="flex items-center">
          {cart.length === 0 ? (
            <div className="w-[40px] h-[35px]">
              <NavLink
                to="/cart"
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <svg
                  className="h-7 w-7 text-gray-100 hover:text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </NavLink>
            </div>
          ) : (
            <div className="relative w-[40px] h-[35px]">
              <div className="absolute ml-6 mt-[1px] text-[10px] w-3.5 h-3.5 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                {cart.length}
              </div>
              <NavLink
                to="/cart"
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-7 w-7 text-gray-100 hover:text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </NavLink>
            </div>
          )}

          <button
            type="button"
            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none uppercase font-normal"
          >
            <svg
              className="h-7 w-7 text-gray-100 hover:text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
