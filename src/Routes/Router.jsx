import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home';
import Signup from '../pages/Signup/Signup';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>, 
        children: [
            {
                path: "/signup",
                element: <Signup></Signup>
            }
        ]
    },
])