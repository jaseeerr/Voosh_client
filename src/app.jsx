import React from "react";
import ReactDom,{createRoot} from "react-dom/client";
import { createBrowserRouter,  RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/header/header";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Body from "./components/body/body";
import Order from "./components/orders/orders"
import { GoogleOAuthProvider } from '@react-oauth/google';




const AppLayout=()=>{



    return(
        <>
      
    <Header/>
       <Outlet/>
     
        </>
    )
}


const appRouter = createBrowserRouter([ 
    {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
        {
            path:"/",
            element:<Body/>
            
        },
        {
            path:"/get-order",
            element:<Order/>
            
        }
    ]
    },
    {
        path:"/add-user",
        element:<Signup/>
    },
    {
        path:"/login-user",
        element:<Login/>
    }
    
])



const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>) 