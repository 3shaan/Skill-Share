import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const Hero = () => {
    return (
      <div>
        <section className="bg-gray-100">
          <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[34rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2 lg:ml-16 lg:mt-16">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-bold tracking-wide  lg:text-5xl">
                  Learn, Practice ,Work Hard
                </h1>
                <p className="mt-2 text-gray-700">
                  Learn, Practice, Work hard this is our motto. IF you want to
                  become an Programmer , Then here we are for you. All you have
                  to do is Practice again and again. We provide best learning
                  mathod and guidline.
                </p>
                <h1 className="mt-3 text-xl font-semibold">
                  Our Courses Have :
                </h1>

                <div className="mt-8 space-y-5">
                  <p className="flex items-center -mx-2 text-gray-700 ">
                    <FaRegCheckCircle className="w-5 h-5 mx-2 text-blue-500"></FaRegCheckCircle>

                    <span className="mx-2">Live Class</span>
                  </p>

                  <p className="flex items-center -mx-2 text-gray-700 ">
                    <FaRegCheckCircle className="w-5 h-5 mx-2 text-blue-500"></FaRegCheckCircle>

                    <span className="mx-2">Best Intructor</span>
                  </p>

                  <p className="flex items-center -mx-2 text-gray-700 ">
                    <FaRegCheckCircle className="w-5 h-5 mx-2 text-blue-500"></FaRegCheckCircle>

                    <span className="mx-2">Always ready for problem solving</span>
                  </p>
                  <p className="flex items-center -mx-2 text-gray-700 ">
                    <FaRegCheckCircle className="w-5 h-5 mx-2 text-blue-500"></FaRegCheckCircle>

                    <span className="mx-2">Job opertunity</span>
                  </p>
                </div>
              </div>

              <div className="w-full mt-8 ">
                <button class="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Buy Course
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full lg:w-1/2">
              <img
                className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                src="https://img.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg?w=1060&t=st=1666691542~exp=1666692142~hmac=7f39699edb4d96823e34af93a2367218d3102457209102a9d2245da0546ee942"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    );
};

export default Hero;