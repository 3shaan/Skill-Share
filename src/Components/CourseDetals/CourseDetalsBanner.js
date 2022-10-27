import React from "react";
import { DynamicStar } from "react-dynamic-star";
import { SiCampaignmonitor } from "react-icons/si";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CourseDetalsBanner = ({ detailsData }) => {
  const {id, img, title, price, instuctor_name, rating, desc_title, review } =
    detailsData;
  return (
    <div>
      <section className="bg-gray-100">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[30rem] lg:py-16 lg:flex-row lg:items-center shadow-lg">
          <div className="w-full lg:w-1/2 lg:ml-16">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-wide  lg:text-5xl">
                {title}
              </h1>
              <p className="mt-2 text-gray-700">{desc_title}</p>
              <div className="flex">
                <p>
                  <DynamicStar
                    rating={rating}
                    width={20}
                    height={20}
                  ></DynamicStar>
                </p>
                {review} Ratings
              </div>
            </div>
            <div className="mt-2 text-xl font-semibold text-gray-700">
              <p className=" my-2">Intructed By,</p>
              <div className="flex  items-center gap-3">
                <div className="avatar">
                  <div className="w-10 rounded-full ring-2 ml-5">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/003/241/285/original/business-instructor-and-tutor-vector.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <p className="hover:underline hover:text-blue-700 cursor-pointer">
                  {instuctor_name}
                </p>
              </div>
            </div>

            <div className="w-full mt-8 flex items-center gap-5">
              <Link to={`/course/${id}/checkout`}>
                <button className="btn btn-outline text-blue-700 hover:bg-orange-600">
                  <SiCampaignmonitor className="text-xl mr-2"></SiCampaignmonitor>
                  Enroll Now
                </button>
              </Link>
              <p className="text-xl font-semibold text-gray-700">${price}</p>
            </div>
            <div>
              <p className="text-lg mt-2 ml-2 flex items-center gap-2">
                <BsPeopleFill className="text-xl text-orange-600"></BsPeopleFill>
                14,293 People Already Enroll
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:w-1/2">
            <img
              className=" mx-auto rounded-md lg:w-96 lg:h-96"
              src={img}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetalsBanner;
