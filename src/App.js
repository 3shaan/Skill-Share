import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Error404 from "./Components/Error404";
import Course from "./Components/Course";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import MainPage from "./Components/MainPage";
import CourseDetals from "./Components/CourseDetals/CourseDetals";
import CheckOut from "./Components/Checkout/CheckOut";
import PrivateRoute from "./Components/PrivateRoute";
import Blogs from "./Components/Blogs/Blogs";
import FAQ from "./Components/FAQ";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error404 />,
      children: [
        {
          path: "/course",
          element: <Course></Course>,
          loader: () => {
            return fetch(
              "https://assignment-10-server-side-peach.vercel.app/course"
            );
          },
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/",
          element: <MainPage></MainPage>,
        },
        {
          path: "/course/:id",
          element: <CourseDetals></CourseDetals>,
          loader: async ({ params }) => {
            return fetch(
              `https://assignment-10-server-side-peach.vercel.app/course/${params.id}`
            );
          },
        },
        {
          path: "/course/:id/checkout",
          element: (
            <PrivateRoute>
              <CheckOut></CheckOut>
            </PrivateRoute>
          ),
          loader: async ({ params }) => {
            return fetch(
              `https://assignment-10-server-side-peach.vercel.app/course/${params.id}`
            );
          },
        },
        {
          path: "/blogs",
          element: <Blogs />,
          loader: () => {
            return fetch(
              "https://assignment-10-server-side-peach.vercel.app/blogs"
            );
          },
        },
        {
          path: "/faq",
          element: <FAQ />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
