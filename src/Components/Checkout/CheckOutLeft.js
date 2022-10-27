import React from "react";

const CheckOutLeft = () => {
  return (
    <div>
      <div className="mt-5 shadow-lg p-4 rounded-lg">
        <p className="text-2xl">Billing Adress</p>
        <div className="flex justify-between gap-5 my-5">
          <div className="w-full">
            <div className="flex justify-between">
              <p>Country</p>
              <p>required</p>
            </div>
            <div>
              <div className="relative flex items-center">
                <select className=" h-12 w-96 rounded-md border-2">
                  <option disabled selected>
                    Select a Country
                  </option>
                  <option>Bangladesh</option>
                  <option>United State</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>India</option>
                  <option>China</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <p>Zip Code</p>
              <p>required</p>
            </div>
            <div>
              <input
                type="text"
                className="block w-full py-3 text-black  border rounded-md px-11 border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Zip Code"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold">Paymanet Mathod</p>
          <div className="flex justify-between gap-5">
            <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-full">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-checkbox-1"
                class="py-4 lg:ml-10 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <img
                  className="h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png"
                  alt=""
                />
              </label>
            </div>
            <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-full">
              <input
                id="bordered-checkbox-2"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-checkbox-2"
                class="py-4 lg:ml-10 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <img
                  className="h-12"
                  src="https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo-700x287.png"
                  alt=""
                />
              </label>
            </div>
          </div>
        </div>
        <div className="my-5">
          <p className="text-2xl font-semibold">Or Via Visa Card</p>
          <div></div>
          <div>
            <label class="block text-sm font-medium my-2" for="card-nr">
              Name on Card <span class="text-red-500">*</span>
            </label>
            <input
              id="card-nr"
              class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
              type="text"
              placeholder="Eshan Benjamin"
            />
          </div>
          <div>
            <label class="block text-sm font-medium my-2" for="card-nr">
              Card Number <span class="text-red-500">*</span>
            </label>
            <input
              id="card-nr"
              class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
              type="text"
              placeholder="1234 1234 1234 1234"
            />
          </div>
          <div>
            <div class="flex space-x-4 my-3">
              <div class="flex-1">
                <label class="block text-sm font-medium my-2" for="card-expiry">
                  Expiry Date <span class="text-red-500">*</span>
                </label>
                <input
                  id="card-expiry"
                  class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                  type="text"
                  placeholder="MM/YY"
                />
              </div>
              <div class="flex-1">
                <label class="block text-sm font-medium my-2" for="card-cvc">
                  CVC <span class="text-red-500">*</span>
                </label>
                <input
                  id="card-cvc"
                  class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                  type="text"
                  placeholder="CVC"
                />
              </div>
                      </div>
                      <div>
                          <input type="checkbox" name="check-1" id="" />
                          <label htmlFor="check-1" className="ml-2">Securly save this Card for my later perchase.</label>
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutLeft;
