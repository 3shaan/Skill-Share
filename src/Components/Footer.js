import React from 'react';
import { ImFacebook, ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";

const Footer = () => {
    return (
      <div>
        <footer className="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
          <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
            <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                  <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                    Institution
                  </h2>
                  <ul>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Courses</a>
                    </li>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Teacher</a>
                    </li>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Students</a>
                    </li>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Asiignment</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                  <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                    Contacts
                  </h2>
                  <ul>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Github</a>
                    </li>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Facebook</a>
                    </li>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Twitter</a>
                    </li>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">LinkedIn</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                  <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                    Our Services
                  </h2>
                  <ul>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Bangladesh</a>
                    </li>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">India</a>
                    </li>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">United State</a>
                    </li>
                    <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">China</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
              <a href="#">
                <ImFacebook></ImFacebook>
              </a>
              <a href="#">
              <ImTwitter></ImTwitter>
              </a>
              <a href="#">
             <ImGithub/>
              </a>
              <a href="#">
               <ImLinkedin/>
              </a>
             
            </div>
            <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
              Created by Eshan Benjamin
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;