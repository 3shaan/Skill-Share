import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import {GrCertificate, GrUserNew  } from "react-icons/gr";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineSubtitles } from "react-icons/md";

const CourseInfo = () => {
    return (
      <div>
        <ul className="p-5 ml-5">
          <li className="flex items-center gap-5 my-5">
            <div className="ring-1 rounded-full">
              <GrCertificate className="text-2xl m-2 text-gray-500"></GrCertificate>
            </div>
            <div>
              <h1 className="text-2xl font-bold">100% online courses</h1>
              <p className="text-gray-600">
                Start instantly and learn at your own schedule.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-5 my-5">
            <div className="ring-1 rounded-full">
              <BsCalendar3 className="text-2xl m-2 text-gray-500"></BsCalendar3>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Flexible Schedule</h1>
              <p className="text-gray-600">
                Set and maintain flexible deadlines.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-5 my-5">
            <div className="ring-1 rounded-full">
              <GrUserNew className="text-2xl m-2 text-gray-500"></GrUserNew>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Beginner Level</h1>
              <p className="text-gray-600">No prior experience required.</p>
            </div>
          </li>
          <li className="flex items-center gap-5 my-5">
            <div className="ring-1 rounded-full">
              <BiTimeFive className="text-2xl m-2 text-gray-500"></BiTimeFive>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Approximately 7 months to complete
              </h1>
              <p className="text-gray-600">Suggested pace of 6 hours/week</p>
            </div>
          </li>
          <li className="flex items-center gap-5 my-5">
            <div className="ring-1 rounded-full">
              <MdOutlineSubtitles className="text-2xl m-2 text-gray-500"></MdOutlineSubtitles>
            </div>
            <div>
              <h1 className="text-2xl font-bold">English</h1>
              <p className="text-gray-600">Subtitles: English</p>
            </div>
          </li>
        </ul>
      </div>
    );
};

export default CourseInfo;