import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGithub, BsGoogle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { authContext } from '../Context/Context';
import ForgotPassword from './ForgotPassword';
import { useState } from 'react';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser, googleSignIn, githubSignIn } = useContext(authContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [isOpen, setOpen] = useState(false);
  const [formError, setFormError] = useState(null);

  const onsubmit = (data, e) => {
    e.preventDefault();
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        navigate(from, { replace: true });
        
      })
      .catch((error) => setFormError(error));
  };

  // google sign in

  const gooleSign = () => {
    googleSignIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => setFormError(error));
  };

  // github sign in

  const githubSign = () => {
    githubSignIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => setFormError(error));
  };

  
  
  return (
    <div className="flex lg:mt-10">
      <div className="hidden lg:block mt-10 pl-20">
        <img
          src="https://aacharyacomputer.in/login/website_images/gif_login.gif"
          alt=""
        />
      </div>
      <div className="lg:w-6/12 mx-auto">
        <div className="lg:w-[500px] p-6 m-auto mx-auto bg-white rounded-md shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Log In
          </h1>

          <form onSubmit={handleSubmit(onsubmit)} className="mt-6">
            <div className="my-2">
              <label>Email</label>
              <div className="relative flex items-center">
                <span className="absolute">
                  <AiOutlineMail className="text-lg ml-2 text-gray-600"></AiOutlineMail>
                </span>

                <input
                  {...register("email", { required: true })}
                  onFocus={() => setFormError("")}
                  name="email"
                  type="email"
                  className="block w-full py-3 text-black  border rounded-md px-11 border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email"
                />
              </div>
            </div>
            {errors.email?.type === "required" && (
              <p role="alert" className="text-red-700">
                Email is required*
              </p>
            )}
            <div className="my-2">
              <label>Password</label>
              <div className="relative flex items-center">
                <span className="absolute">
                  <RiLockPasswordLine className="text-lg ml-2 text-gray-600"></RiLockPasswordLine>
                </span>

                <input
                  {...register("password", { required: true })}
                  onFocus={() => setFormError("")}
                  name="password"
                  type="password"
                  className="block w-full py-3 text-black  border rounded-md px-11 border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>
              <p
                onClick={() => setOpen(true)}
                className="text-xs text-right hover:underline hover:text-blue-700 cursor-pointer"
              >
                forgate password?
              </p>

              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-700">
                  Password is required*
                </p>
              )}
            </div>
            {formError && (
              <p className="text-red-700 text-xs">{formError.message}</p>
            )}

            <div className="mt-6">
              <button className="w-full px-4 py-2 rounded-md  focus:outline-none btn text-white bg-blue-700 hover:bg-orange-700">
                Log In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <a
              href="."
              className="text-xs text-center text-gray-500 uppercase  hover:underline"
            >
              or Sign Up with Social Media
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>

          <div className="flex items-center mt-6 -mx-2">
            <button
              onClick={gooleSign}
              type="button"
              className=" flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-orange-600 focus:bg-orange-600 focus:outline-none"
            >
              <BsGoogle></BsGoogle>

              <span className="hidden mx-2 sm:inline">Sign Up with Google</span>
            </button>

            <button
              onClick={githubSign}
              href="."
              className="p-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-orange-600"
            >
              <BsGithub></BsGithub>
            </button>
          </div>

          <p className="mt-8 text-xs text-center text-gray-700">
            Don't have an account?
            <Link
              to={"/signup"}
              className="font-medium text-gray-700 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <ForgotPassword open={isOpen} setOpen={setOpen}></ForgotPassword>
    </div>
  );
};

export default Login;