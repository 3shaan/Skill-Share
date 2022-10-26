import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root';
import Error404 from './Components/Error404';
import Course from './Components/Course';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import MainPage from './Components/MainPage';
import CourseDetals from "./Components/CourseDetals/CourseDetals";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement:<Error404/>,
      children: [
        {
          path: '/course',
          element: <Course></Course>,
          loader: () => {
            return fetch("http://localhost:5000/course");
          }
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
        },
        {
          path: '/',
          element:<MainPage></MainPage>
        },
        {
          path: "/course/:id",
          element: <CourseDetals></CourseDetals>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/course/${params.id}`);
          }
        }
      ]
    }
  ])


  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
