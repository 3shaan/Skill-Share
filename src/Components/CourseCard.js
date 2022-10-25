import React from "react";
import { DynamicStar } from "react-dynamic-star";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";

const CourseCard = ({ courseData }) => {
  return (
    <div className="ml-5">
      <div className="card w-80 bg-base-100 shadow-xl relative group">
        <figure>
          <img className="h-56 w-80" src={courseData.img} alt="Shoes" />
        </figure>
        <div className="p-3">
          <h2 className="card-title">{courseData.title}</h2>
          <p className="my-2">
            By
            <span className="text-white bg-blue-700 rounded-lg text-sm px-1 ml-2">
              {courseData.author}
            </span>
          </p>
          <p className="my-2 ">{ courseData.desc}</p>
          <div className="flex justify-between text-lg">
            <p><DynamicStar rating={courseData.rating} width={20} height={20}></DynamicStar> </p>
            <p>${ courseData.price}</p>
          </div>
        </div>
        <div className="">
          <button className="w-full bg-blue-700 py-1 text-white text-lg">
            See Details
          </button>
        </div>
        <div className="text-xl absolute top-4 right-4 text-orange-600 hidden group-hover:block duration-1000">
          <FaRegHeart></FaRegHeart>
          <FaCartPlus className="mt-2"></FaCartPlus>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
