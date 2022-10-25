import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../Images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
      <div>
        <nav
          onClick={() => setOpen(!isOpen)}
          className="relative bg-white shadow "
        >
          <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold text-gray-700">
                  <a
                    className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                    href="."
                  >
                    <img className="h-10 rounded-sm" src={logo} alt="" />
                  </a>
                </div>

                <div className="flex lg:hidden">
                  <button
                    onClick={() => setOpen(!isOpen)}
                    type="button"
                    className="  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                  >
                    {isOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>}
                  </button>
                </div>
              </div>

              <div
                className={`${
                  isOpen
                    ? "translate-x-0 opacity-100 "
                    : "opacity-0 -translate-x-full"
                }  absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
              >
                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                  <Link
                    to={"/"}
                    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:underline hover:text-orange-600 "
                  >
                    Home
                  </Link>
                  <Link
                    to={"/course"}
                    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:underline hover:text-orange-600 "
                  >
                    Course
                  </Link>
                  <a
                    href="."
                    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:underline hover:text-orange-600 "
                  >
                    Blogs
                  </a>
                  <a
                    href="."
                    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:underline hover:text-orange-600 "
                  >
                    About Us
                  </a>
                </div>

                <div className="flex items-center mt-4 lg:mt-0">
                  <Link
                    to={'/login'}
                    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:underline hover:text-orange-600 "
                  >
                    Log In
                  </Link>
                  <Link
                    to={'/signup'}
                    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:underline hover:text-orange-600 "
                  >
                    Register
                  </Link>

                  <button
                    type="button"
                    className="flex items-center focus:outline-none"
                    aria-label="toggle profile dropdown"
                  >
                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        className="object-cover w-full h-full"
                        alt="avatar"
                      />
                    </div>

                    <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                      Khatab wedaa
                    </h3>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;