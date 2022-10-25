import React from "react";
import { DynamicStar } from "react-dynamic-star";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ courseData }) => {
  const {id, img, title, price, instuctor_name, rating, desc_title } = courseData;
  return (
    <div className="ml-5 group">
      <div className="card w-80 bg-base-100 shadow-xl relative  overflow-hidden">
        <div className="p-3 group-hover:opacity-20 transition-opacity duration-700">
          <figure>
            <img className="h-56 w-80" src={img} alt="Shoes" />
          </figure>
          <h2 className="card-title">{title}</h2>
          <p className="my-2">
            By
            <span className="text-white bg-blue-700 rounded-lg text-sm px-1 ml-2">
              {instuctor_name}
            </span>
          </p>
          <p className="my-2 ">{desc_title}</p>
          <div className="flex justify-between text-lg">
            <p>
              <DynamicStar rating={rating} width={20} height={20}></DynamicStar>{" "}
            </p>
            <p>${price}</p>
          </div>
        </div>
        <Link
          to={`/course/${id}`}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"
        >
          <button className="w-full bg-blue-700 p-1 rounded-xl text-white text-lg">
            See Details
          </button>
        </Link>
        <div className="text-xl absolute top-4 right-4 text-orange-600 hidden group-hover:block transition-transform  duration-700">
          <FaRegHeart></FaRegHeart>
          <FaCartPlus className="mt-2"></FaCartPlus>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
