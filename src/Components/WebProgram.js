import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { authContect } from "../Context/Context";
import CourseCard from "./CourseCard";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const WebProgram = () => {
  const { courseData } = useContext(authContect);
  const NextArrow = ({ className, style, onClick }) => {
    return (
      <div
        className="top-1/2 absolute right-4 bg-blue-700 p-3 rounded-full z-30"
        onClick={onClick}
      >
        <FaArrowRight></FaArrowRight>
      </div>
    );
  };
  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <div
        className="top-1/2 absolute left-6 bg-blue-700 p-3 rounded-full z-30"
        onClick={onClick}
      >
        <FaArrowLeft></FaArrowLeft>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-11/12 mx-auto my-10 relative">
      <h1 className="text-3xl font-semibold text-center">
        Our Web Technology Courses
      </h1>
      <hr className="w-5/12 mx-auto my-1 border bg-gray-700" />
      <Slider {...settings} className="mt-3">
        {courseData?.map((data) => {
          return (
            <div>
              <CourseCard courseData={data}></CourseCard>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default WebProgram;
