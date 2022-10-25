import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Course = () => {
    const courseData = useLoaderData();
    console.log(courseData)
    return (
      <div className="w-11/12 mx-auto">
        <h1 className="text-4xl text-center mt-2 mb-5">Our All Course</h1>
        <div className="flex justify-between">
          <div>
            <ul>
              {courseData.map((data) => {
                return (
                  <li
                    key={data.id}
                    className="text-2xl flex gap-2 items-center my-5"
                  >
                    <FaArrowRight></FaArrowRight>
                    <span className="hover:bg-blue-700 hover:rounded-md hover:text-white px-1">
                      {data.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-7/12">
            <div className="grid grid-cols-2 gap-5">
              {courseData.map((data) => (
                <CourseCard key={data.id} courseData={data}></CourseCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Course;