import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { useLoaderData } from 'react-router-dom';
import CheckOutLeft from './CheckOutLeft';
import CheckOutRight from './CheckOutRight';

const CheckOut = () => {
    const courseData = useLoaderData();
    return (
      <div className="w-11/12 mx-auto">
        <p className="text-3xl mt-3 flex gap-3 items-center">
          Check Out <AiOutlineArrowRight />
        </p>
        <div className="lg:flex ">
          <div className="lg:w-7/12 mx-auto">
            <CheckOutLeft />
          </div>
          <div className="lg:w-3/12 mx-auto mt-10 lg:mt-0">
            <CheckOutRight courseData={courseData}></CheckOutRight>
          </div>
        </div>
      </div>
    );
};

export default CheckOut;