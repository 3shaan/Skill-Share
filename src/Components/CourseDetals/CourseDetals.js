import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetalsBanner from '../CourseDetals/CourseDetalsBanner';
import CourseDesc from './CourseDesc';
import CourseInfo from './CourseInfo';

const CourseDetals = () => {
    const detailsData = useLoaderData();
    return (
      <div>
        <div>
          <CourseDetalsBanner detailsData={detailsData}></CourseDetalsBanner>
        </div>
        <div className="border-b border-gray-300">
          <ul className="text-lg flex h-14 items-center w-5/12 justify-around">
            <li className="text-blue-700 font-semibold cursor-pointer">
              About
            </li>
            <li className="hover:underline hover:text-blue-700cursor-pointer">
              Skill
            </li>
            <li className="hover:underline hover:text-blue-700 cursor-pointer">
              Intructor
            </li>
            <li className="hover:underline hover:text-blue-700 cursor-pointer">
              FAQ
            </li>
          </ul>
        </div>
        <div className="flex w-11/12 mx-auto">
          <div className="w-8/12">
            <CourseDesc detailsData={detailsData}></CourseDesc>
          </div>
          <div>
            <CourseInfo></CourseInfo>
          </div>
        </div>
      </div>
    );
};

export default CourseDetals;