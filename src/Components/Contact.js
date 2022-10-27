import React from 'react';

const Contact = () => {
    return (
      <div>
        <footer class="flex justify-center px-4 text-gray-800 bg-slate-200 rounded-md shadow-lg">
          <div class="container py-6">
            <h1 class="text-lg font-bold text-center lg:text-2xl">
              Join 31,000+ other Students and never <br /> miss a Class and
              Assignment.
            </h1>

            <div class="flex justify-center mt-6">
              <div class="bg-white border rounded-md focus-within:ring  focus-within:border-blue-400 focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:focus-within:border-blue-300">
                <div class="flex flex-wrap justify-between md:flex-row">
                  <input
                    type="email"
                    class="p-2 m-1 text-sm text-gray-700 bg-transparent appearance-none focus:outline-none focus:placeholder-transparent"
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                  />
                  <button class="w-full px-3 py-2 m-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-700 rounded-md dark:hover:bg-gray-600  lg:w-auto hover:bg-gray-700">
                    subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Contact;