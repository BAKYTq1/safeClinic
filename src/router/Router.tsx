import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home.tsx";
import Layout from "../Layout/Layout.tsx";
import Layoutadmin from "../Layout/admin/Layout.tsx";
import List from "../pages/list/List.tsx";
import Newdoctor from "../pages/creating/Newdoctor.tsx";
import PatientsList from "../components/PatientsList/PatientsList.tsx";
import Doctors from "../pages/section/Doctors.tsx";
import Branches from "../pages/branches/Branches.tsx";
import Patient from "../pages/create/Patient.tsx";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'list',
                element: <List />
            },
            {
                path: 'newdoctor',
                element: <Newdoctor />
            },
            {
                path: 'doctors',
                element: <Doctors />
            },
            {
                path: 'patient',
                element: <Patient />
            },
        ]
    },
    {
        path: 'admin',
        element: <Layoutadmin />

    },
    {
         path: 'patientsList',
         element: <PatientsList/> 
         },  
      {    
        path: 'branches',
        element: <Branches/>
    }
]) 