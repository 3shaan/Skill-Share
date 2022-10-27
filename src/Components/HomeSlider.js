import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { authContext } from "../Context/Context";
import CourseCard from "./CourseCard";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HomeSlider = () => {
  const { courseData } = useContext(authContext);
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
    responsive: [
      {
        breakpoint: 2004,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1039,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="w-11/12 mx-auto my-10 relative">
        <h1 className="text-3xl font-semibold text-center">
          Our Web Technology Courses
        </h1>
        <hr className="w-5/12 mx-auto my-1 border bg-gray-700" />
        <Slider {...settings} className="mt-3">
          {courseData?.map((data) => {
            return (
              <div className="my-3" key={data.id}>
                <CourseCard courseData={data}></CourseCard>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
