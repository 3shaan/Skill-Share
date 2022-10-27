import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import CourseInfo from "./CourseInfo";

const CourseDesc = ({ detailsData }) => {
  const { skill } = detailsData;
  return (
    <div>
      <div className="flex justify-between">
        <div className="border border-gray-500 rounded-sm my-8 p-4 w-6/12 ">
          <h1 className="text-xl mb-3">What You will Learn:</h1>
          <div className="grid grid-cols-2 gap-6">
            {skill.map((data, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center gap-5">
                    <AiOutlineCheckCircle className="text-blue-700"></AiOutlineCheckCircle>
                    <p>{data}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-5/12">
          <CourseInfo></CourseInfo>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-3xl py-3 border-b-2">Course Description</h1>
        <p className="text-lg sp">{detailsData.desc}</p>
      </div>
    </div>
  );
};

export default CourseDesc;
