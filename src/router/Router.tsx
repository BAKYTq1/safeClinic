import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home/Home.tsx";
import Layout from "../Layout/Layout.tsx";
import Layoutadmin from "../Layout/admin/Layout.tsx";
import List from "../pages/list/List.tsx";
import Newdoctor from "../pages/creating/Newdoctor.tsx";
import Branches from "../pages/branches/Branches.tsx";
import PatientInfoPage from "../pages/patientinformation/PatientInfoPage.tsx";

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
          {
         path:'newdoctor',
         element: <Newdoctor/>
        },
    ]
    },
    {
         path: 'admin',
         element: <Layoutadmin/>
    },
    {
        path: 'branches',
        element: <Branches/>
    },
    {
        path: 'PatientInfoPage',
        element: <PatientInfoPage/>
    }
])