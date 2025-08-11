import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Layout from "../app/Layout/Layout.tsx"
import Layoutadmin from "../app/Layout/admin/Layout.tsx";
import LoginForm from "../widgets/LoginForm/LoginForm.tsx";
import List from "../pages/list/List.tsx";
import Newdoctor from "../pages/creating/Newdoctor.tsx";
import { SignUpClient } from "../pages/SignUpClient/SignUpClient.tsx"
import PatientsList from "../widgets/PatientsList/PatientsList.tsx";
import Doctors from "../pages/section/Doctors.tsx";
import Branches from "../pages/branches/Branches.tsx";
import PatientInfoPage from "../pages/patientinformation/PatientInfoPage.tsx";
import { PatientCalendar } from "../pages/PatientCalendar/PatientCalendar.tsx"
import DoctorInfoPage from "../pages/aboutdoctor/DoctorInfoPage.tsx";
import Top from "../pages/top/Top.tsx";
import Patient from "../pages/create/Patient.tsx"; 
import { ServiceList }  from "../pages/serviceList/ServiceList.tsx";
import DoctorAnalytics from "../widgets/DoctorAnalytics/DoctorAnalytics.tsx";
import { ServiceList }  from "../pages/ServiceList/ServiceList.tsx";
import DoctorAnalytics from "../pages/DoctorAnalytics/DoctorAnalytics.tsx";
import Calendar from "../pages/paneldoctors/Calendar.tsx";
import Sign from "../pages/clients/Sign.tsx"
import Client from "../pages/profile/Client.tsx";
import { ClientBookings } from "../pages/clientBookings/ClientBookings.tsx";
import { ClientPayments } from "../pages/clientPayments/ClientPayments.tsx";
import ClientProfile from "../pages/edit/ClientProfile.tsx"
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
            { path: 'sign', element: <Sign/> },
            { path: 'client', element: <Client /> },
            { path: 'clientprofile', element: <ClientProfile/> },
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
    { path: 'editDoctorProfile', element: <EditDoctorProfile /> }, 
    { path: 'top', element: <Top /> },
    { path: 'DoctorsProfile', element: <DoctorsProfile /> },
    // { path: 'Information', element: <Information /> },
    { path: 'InfoPage', element: <InfoPage /> },

]);
