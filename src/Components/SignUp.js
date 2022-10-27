import React from "react";
import { BsGithub, BsGoogle, BsUpload } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUserAdd } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { authContext } from "../Context/Context";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../FireBase/FireBase.config";
import { useState } from "react";

const auth = getAuth(app);

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { emailSignUp, googleSignIn, githubSignIn } = useContext(authContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // email passwor sign up
  const onsubmit = (data) => {
    const { name, url, email, password } = data;
    emailSignUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {})
          .catch((error) => setError(error));
        navigate("/");
      })
      .catch((error) => setError(error));
  };

  // google sign up

  const gooleSign = () => {
    googleSignIn()
      .then(() => {})
      .catch((error) => setError(error));
  };

  // github sign up

  const githubSign = () => {
    githubSignIn()
      .then(() => {})
      .catch((error) => setError(error));
  };

  return (
    <div className="flex mt-10">
      <div className="lg:w-6/12 hidden lg:block mt-20">
        <img
          src="https://naveenscorp.com/wp-content/uploads/2021/12/staffing.gif"
          alt=""
        />
      </div>
      <div className="lg:w-6/12 mx-auto">
        <div className="lg:w-[500px] p-6 m-auto mx-auto bg-white rounded-md shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit(onsubmit)} className="mt-6">
            <div className="my-2">
              <label>Full Name</label>
              <div className="relative flex items-center">
                <span className="absolute">
                  <AiOutlineUserAdd className="text-lg ml-2 text-gray-600"></AiOutlineUserAdd>
                </span>

                <input
                  onFocus={() => setError("")}
                  name="name"
                  {...register("name", {
                    required: true,
                  })}
                  type="text"
                  className="block w-full py-3 text-black  border rounded-md px-11 border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Full Name"
                />
              </div>
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-700">
                  First name is required*
                </p>
              )}
            </div>
            <div className="my-2">
              <label>Photo URL</label>
              <div className="relative flex items-center">
                <span className="absolute">
                  <BsUpload className="text-lg ml-2 text-gray-600"></BsUpload>
                </span>

                <input
                  onFocus={() => setError("")}
                  name="url"
                  {...register("url")}
                  type="text"
                  className="block w-full py-3 text-black  border rounded-md px-11 border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Photo URL"
                />
              </div>
            </div>
            <div className="my-2">
              <label>Email</label>
              <div className="relative flex items-center">
                <span className="absolute">
                  <AiOutlineMail className="text-lg ml-2 text-gray-600"></AiOutlineMail>
                </span>

                <input
                  onFocus={() => setError("")}
                  name="email"
                  {...register("email", { required: true })}
                  type="Email"
                  className="block w-full py-3 text-black  border rounded-md px-11 border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email"
                />
              </div>
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-700">
                  Email is required*
                </p>
              )}
            </div>
            <div className="my-2">
              <label>Password</label>
              <div className="relative flex items-center">
                <span className="absolute">
                  <RiLockPasswordLine className="text-lg ml-2 text-gray-600"></RiLockPasswordLine>
                </span>

                <input
                  onFocus={() => setError("")}
                  name="password"
                  {...register("password", { required: true })}
                  type="password"
                  className="block w-full py-3 text-black  border rounded-md px-11 border-gray-600 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-700">
                  Password is required*
                </p>
              )}
            </div>
            {error && <p className="text-red-700 text-sm">{error.message}</p>}

            <div className="mt-6">
              <button className="w-full px-4 py-2 rounded-md  focus:outline-none btn text-white bg-blue-700 hover:bg-orange-700">
                Sign Up
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
              className="p-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-orange-600"
            >
              <BsGithub></BsGithub>
            </button>
          </div>

          <p className="mt-8 text-xs text-center text-gray-700">
            Already have an account?
            <Link
              to={"/login"}
              className="font-medium text-gray-700 hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
