import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root';
import Error404 from './Components/Error404';
import Course from './Components/Course';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement:<Error404/>,
      children: [
        {
          path: '/course',
          element:<Course></Course>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
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
