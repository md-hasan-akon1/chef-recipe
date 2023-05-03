import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CardDetails from "../Pages/CardDetails/CardDetails";
import Login from "../Sheard/Login/Login";
import Error from "../Sheard/Error/Error";

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
                element:<CardDetails></CardDetails>,
                loader:({params})=>fetch(`https://assignment-10-server-md-hasan-akon1.vercel.app/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>

            }
        ]
    }
])
export default router