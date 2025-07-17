import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Layout from "../Layout/Layout.tsx";
import Layoutadmin from "../Layout/admin/Layout.tsx";
import LoginForm from "../components/LoginForm/LoginForm.tsx";

export const myRouter = createBrowserRouter([
    {
    path: '/',
    element: <Layout/>,
    children: [
        {
         path:'/',
         element: <Home/>
        },
    ]
    },
    {
         path: 'admin',
         element: <Layoutadmin/>
    },
    {
         path: 'loginForm',
         element: <LoginForm/>
    }
])