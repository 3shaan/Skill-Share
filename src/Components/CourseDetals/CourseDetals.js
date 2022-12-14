import React from 'react';
import { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import CourseDetalsBanner from '../CourseDetals/CourseDetalsBanner';
import CourseDesc from './CourseDesc';

const CourseDetals = () => {
  const detailsData = useLoaderData();
  const downloadRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => downloadRef.current,
    documentTitle: `${detailsData.title}`,
    onAfterPrint:()=>alert('print succesfull')
  })
  

    return (
      <div>
        <div>
          <CourseDetalsBanner detailsData={detailsData}></CourseDetalsBanner>
        </div>
        <div ref={downloadRef}>
          <div className="border-b border-gray-300">
            <ul className="grid grid-cols-3 text-lg lg:flex lg:h-14 items-center lg:w-7/12 lg:justify-around  mx-auto lg:gap-20 px-4">
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
              <li className="hover:underline hover:text-blue-700 cursor-pointer w-full col-span-2 mt-2">
                <button
                  onClick={handlePrint}
                  className="bg-blue-600  rounded-lg text-white lg:px-2 hover:bg-blue-500"
                >
                  Download Course Description
                </button>
              </li>
            </ul>
          </div>
          <div className="flex w-11/12 mx-auto">
            <div>
              <CourseDesc detailsData={detailsData}></CourseDesc>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetals;