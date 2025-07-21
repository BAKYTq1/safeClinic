import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home.tsx";
import Layout from "../Layout/Layout.tsx";
import Layoutadmin from "../Layout/admin/Layout.tsx";
import LoginForm from "../components/LoginForm/LoginForm.tsx";
import List from "../pages/list/List.tsx";
import Newdoctor from "../pages/creating/Newdoctor.tsx";
import SignUpClient from "../pages/SignUpClient/SignUpClient.tsx";
import PatientsList from "../components/PatientsList/PatientsList.tsx";
import Doctors from "../pages/section/Doctors.tsx";
import Branches from "../pages/branches/Branches.tsx";
import Patient from "../pages/create/Patient.tsx";
import PatientInfoPage from "../pages/patientinformation/PatientInfoPage.tsx";
import PatientCalendar from "../pages/PatientCalendar/PatientCalendar.tsx";
import ServiceList from "../pages/ServiceList/ServiceList.tsx";


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
                path: 'serviceList',
                element: <ServiceList />
            },
        ]
    },
    {
        path: 'admin',
        element: <Layoutadmin />

         path: 'admin',
         element: <Layoutadmin/>
    },
    {
         path: 'signupUser',
         element: <SignUpClient/>
    },
    { 
         path: 'loginForm',
         element: <LoginForm/>
    },
    {
         path: 'patientsList',
         element: <PatientsList/> 
         },  
      {    
        path: 'branches',
        element: <Branches/>

    },
    {
        path: 'PatientInfoPage',
        element: <PatientInfoPage/>
    
    }, 
      {    
        path: 'patientCalendar',
        element: <PatientCalendar/>
    } 

 ])

