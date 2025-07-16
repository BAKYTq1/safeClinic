import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home/Home.tsx";
import Layout from "../Layout/Layout.tsx";
import Layoutadmin from "../Layout/admin/Layout.tsx";
import List from "../pages/list/List.tsx";

export const myRouter = createBrowserRouter([
    {
    path: '/',
    element: <Layout/>,
    children: [
        {
         path:'/',
         element: <Home/>
        },
         {
         path:'list',
         element: <List/>
        },
    ]
    },
    {
         path: 'admin',
         element: <Layoutadmin/>
    }
])