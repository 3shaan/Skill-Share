import React from 'react';

const Contact = () => {
    return (
        <div >
            <footer class="flex justify-center px-4 text-gray-800 bg-slate-200 rounded-md shadow-lg">
    <div class="container py-6">
        <h1 class="text-lg font-bold text-center lg:text-2xl">
            Join 31,000+ other and never miss <br/> out on new tips, tutorials, and more.
        </h1>

        <div class="flex justify-center mt-6">
            <div class="bg-white border rounded-md focus-within:ring dark:bg-gray-900 dark:border-gray-700 focus-within:border-blue-400 focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:focus-within:border-blue-300">
                <div class="flex flex-wrap justify-between md:flex-row">
                    <input type="email" class="p-2 m-1 text-sm text-gray-700 bg-transparent appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Enter your email" aria-label="Enter your email"/>
                    <button class="w-full px-3 py-2 m-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded-md dark:hover:bg-gray-600 dark:bg-gray-800 lg:w-auto hover:bg-gray-700">subscribe</button>
                </div>
            </div>
        </div>

        <hr class="h-px mt-6 bg-gray-200 border-none dark:bg-gray-700"/>

        <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
                <a href="." class="text-xl font-bold text-gray-800 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>
            </div>
        </div>
    </div>
</footer>
        </div>
    );
};

export default Contact;