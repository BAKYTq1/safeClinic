import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Layout from "../Layout/Layout.tsx";
import Layoutadmin from "../Layout/admin/Layout.tsx";
import LoginForm from "../components/loginForm/LoginForm.tsx";
import List from "../pages/list/List.tsx";
import Newdoctor from "../pages/creating/Newdoctor.tsx";
import { SignUpClient } from "../pages/signUpClient/SignUpClient.tsx";
import PatientsList from "../components/patientsList/PatientsList.tsx";
import Doctors from "../pages/section/Doctors.tsx";
import Branches from "../pages/branches/Branches.tsx";
import PatientInfoPage from "../pages/patientinformation/PatientInfoPage.tsx";
import { PatientCalendar } from "../pages/patientCalendar/PatientCalendar.tsx";
import DoctorInfoPage from "../pages/aboutdoctor/DoctorInfoPage.tsx";
import Top from "../pages/top/Top.tsx";
import Patient from "../pages/create/Patient.tsx"; 
import { ServiceList }  from "../pages/serviceList/ServiceList.tsx";
import DoctorAnalytics from "../pages/doctorAnalytics/DoctorAnalytics.tsx";
import Calendar from "../pages/paneldoctors/Calendar.tsx";
import { ClientBookings } from "../pages/clientBookings/ClientBookings.tsx";
import { ClientPayments } from "../pages/clientPayments/ClientPayments.tsx";
import DoctorsProfile from "../pages/Doctor'sprofile/Doctorsprofile.tsx";
import { EditDoctorProfile } from "../pages/editDoctorProfile/EditDoctorProfile.tsx";
import InfoPage from "../pages/Information/InfoPage.tsx";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'list', element: <List /> },
            { path: 'newdoctor', element: <Newdoctor /> },
            { path: 'doctors', element: <Doctors /> },
            { path: 'patient', element: <Patient /> },
            { path: 'serviceList', element: <ServiceList /> },
            { path: 'calendar', element: <Calendar /> },
        ]
    },
    { path: 'admin', element: <Layoutadmin /> },
    { path: 'signupUser', element: <SignUpClient /> },
    { path: 'loginForm', element: <LoginForm /> },
    { path: 'patientsList', element: <PatientsList /> },
    { path: 'branches', element: <Branches /> },
    { path: 'PatientInfoPage', element: <PatientInfoPage /> },
    { path: 'patientCalendar', element: <PatientCalendar /> },
    { path: 'doctorInfoPage', element: <DoctorInfoPage /> }, 
    { path: 'doctorAnalytics', element: <DoctorAnalytics /> }, 
    { path: 'clientBookings', element: <ClientBookings /> }, 
    { path: 'clientPayments', element: <ClientPayments /> }, 
    { path: 'clientPayments', element: <ClientPayments /> }, 
    { path: 'editDoctorProfile', element: <EditDoctorProfile /> }, 
    { path: 'top', element: <Top /> },
    { path: 'DoctorsProfile', element: <DoctorsProfile /> },
    // { path: 'Information', element: <Information /> },
    { path: 'InfoPage', element: <InfoPage /> },

]);
