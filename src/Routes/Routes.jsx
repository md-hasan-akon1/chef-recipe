import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CardDetails from "../Pages/CardDetails/CardDetails";
import Error from "../Sheard/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivetRout from "../Sheard/PrivetRout/PrivetRout";
import Blog from "../Pages/Blog/Blog";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://assignment-10-server-md-hasan-akon1.vercel.app/homeCard'),
            },
            {
                path:'/:id',
                element:<PrivetRout><CardDetails></CardDetails></PrivetRout>,
                loader:({params})=>fetch(`https://assignment-10-server-md-hasan-akon1.vercel.app/${params.id}`)
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>

            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
           
        ]
    }
])
export default router