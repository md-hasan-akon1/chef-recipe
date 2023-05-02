import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CardDetails from "../Pages/CardDetails/CardDetails";
import Login from "../Pages/Login/Login";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/homeCard'),
            },
            {
                path:'/:id',
                element:<CardDetails></CardDetails>,
                loader:({params})=>fetch(`http://localhost:5000/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>

            }
        ]
    }
])
export default router