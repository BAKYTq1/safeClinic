import { createBrowserRouter } from "react-router-dom"
import LoginForm from "../../widgets/LoginForm/LoginForm.tsx";
import List from "../../pages/list/List.tsx";
import Newdoctor from "../../pages/creating/Newdoctor.tsx";
import Doctors from "../../pages/section/Doctors.tsx";
import PatientInfoPage from "../../pages/patientinformation/PatientInfoPage.tsx";
import Home from "../../pages/Home/Home.tsx";
import Layout from "../Layout/Layout.tsx";
import LayoutAdmin from "../Layout/admin/Layout.tsx";
import Doctorss from "../../pages/Admin/Doctors/Doctorss.tsx";
import Patients from "../../pages/Admin/Patients/Patients.tsx";
import Servisecc from "../../pages/Admin/Servisec/Servicess.tsx";
import Fillials from "../../pages/Admin/Filials/Fillials.tsx";
import DoctorsLayout from "../Layout/Doctors/DoctorsLayout.tsx";
import { ServiceList } from "../../pages/ServiceList/ServiceList.tsx";
import { SignUpClient } from "../../pages/SignUpClient/SignUpClient.tsx";
import { PatientCalendar } from "../../pages/PatientCalendar/PatientCalendar.tsx";
import Calendar from "../../pages/paneldoctors/Calendar.tsx";
import DoctorAnalytics from "../../pages/DoctorAnalytics/DoctorAnalytics.tsx";


export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>
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
                path: 'serviceList',
                element: <ServiceList/>
            },
        ]
    },
    {
         path: 'admin',
         element: <LayoutAdmin/>,
         children: [
                 {
                path: 'doctors',
                element: <Doctorss />
            },
               {
         path: 'patientsList',
         element: <Patients/> 
         },  
         {    
        path: 'branches',
        element: <Fillials/>
    },
{
    path: 'services',
    element: <Servisecc/>
},
{
        path: 'analytics',
        element: <DoctorAnalytics/>
    }, 
         ]
    },
    {
  path: 'doctor',
  element: <DoctorsLayout/>,
  children: [
    {
        path: 'calendar',
        element: <Calendar/>
    },
    {
        path: 'analytics',
        element: <DoctorAnalytics/>
    },      {
         path: 'patientsList',
         element: <Patients/> 
         },  
  ]
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
        path: 'PatientInfoPage',
        element: <PatientInfoPage/>
    
    }, 
      {    
        path: 'patientCalendar',
        element: <PatientCalendar/>
    } 

 ])

