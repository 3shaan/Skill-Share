import React from 'react';

const CheckOutRight = ({ courseData }) => {
  const discound = 10;
  const tax = 4;
  const totoalprice = discound + tax + parseFloat(courseData.price);
  return (
    <div className="px-5">
      <h1 className="text-2xl font-semibold ">Summery</h1>
      <div className="flex justify-between text-xl my-2">
        <p>Original Price :</p>
        <p>${ courseData.price}</p>
      </div>
      <div className="flex justify-between text-xl my-2">
        <p>Discount Price :</p>
        <p>${ discound}</p>
      </div>
      <div className="flex justify-between text-xl my-2">
        <p>Tax :</p>
        <p>${ tax}</p>
      </div>
      <hr className="border-b-2 bg-gray-700" />
      <div className="flex justify-between my-3">
        <p className="text-2xl font-bold">Total Price</p>
        <p className="text-2xl font-bold">${ totoalprice}</p>
      </div>
      <p className="text-xs">
        By completing this perchase you agree this{" "}
        <span className="text-blue-700 underline">Terms and Condition.</span>
      </p>
      <div className="my-3">
        <button className="btn w-full bg-blue-700 text-white rounded-lg">
          Confirm Perchase
        </button>
      </div>
      <p className="text-xs text-center">7-Days money Back Guarantee</p>
    </div>
  );
};

export default CheckOutRight;