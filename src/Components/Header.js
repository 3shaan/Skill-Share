import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../Context/Context";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { logOut, user } = useContext(authContext);
  const [isToggle, setToggle] = useState(true)

  const signout = () => {
    logOut()
      .then(() => { })
    .catch(error=>console.log(error))
  }
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
              }  absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-xl rounded-lg lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
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
                <Link
                  to={"/blogs"}
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:underline hover:text-orange-600 "
                >
                  Blogs
                </Link>
                <Link
                  to={"/faq"}
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:underline hover:text-orange-600 "
                >
                  FAQ
                </Link>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                {user?.uid ? (
                  <div
                    className="flex items-center focus:outline-none tooltip tooltip-bottom"
                    data-tip={`${user?.displayName}`}
                    aria-label="toggle profile dropdown"
                  >
                    <div></div>
                    <div className="dropdown dropdown-end">
                      <div className="flex items-center gap-5">
                        <label
                          tabIndex={0}
                          className="btn btn-ghost btn-circle avatar"
                        >
                          <div className="w-10 rounded-full">
                            <img src={user?.photoURL} alt="" />
                          </div>
                        </label>
                        <label className="lg:hidden">{`Hello, ${user?.displayName}`}</label>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hidden lg:block"
                      >
                        <li>
                          <Link className="font-semibold">{`Hello, ${user?.displayName}`}</Link>
                        </li>
                        <li>
                          <Link>Profile</Link>
                        </li>
                        <li>
                          <button onClick={signout}>Log Out</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Link
                      to={"/login"}
                      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:underline hover:text-orange-600 "
                    >
                      Log In
                    </Link>
                    <Link
                      to={"/signup"}
                      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:underline hover:text-orange-600 "
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
              {user?.uid && (
                <button
                  onClick={signout}
                  className="bg-blue-700 py-1 text-lg rounded-lg lg:hidden w-full mt-2"
                >
                  Log out
                </button>
              )}
              <input
                onClick={() => setToggle(!isToggle)}
                type="checkbox"
                className="toggle toggle-primary mx-2"
                checked={isToggle}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
