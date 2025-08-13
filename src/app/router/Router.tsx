import { createBrowserRouter } from "react-router-dom";

// Layouts
import Layout from "../Layout/Layout.tsx";
import LayoutAdmin from "../Layout/admin/Layout.tsx";
import DoctorsLayout from "../Layout/Doctors/DoctorsLayout.tsx";

// Pages - Client
import Home from "../../pages/Home/Home.tsx";
import List from "../../pages/list/List.tsx";
import Newdoctor from "../../pages/creating/Newdoctor.tsx";
import Doctors from "../../pages/section/Doctors.tsx";
import { ServiceList } from "../../pages/ServiceList/ServiceList.tsx";
import { SignUpClient } from "../../pages/SignUpClient/SignUpClient.tsx";
import { PatientCalendar } from "../../pages/PatientCalendar/PatientCalendar.tsx";
import LoginForm from "../../widgets/LoginForm/LoginForm.tsx";

// Pages - Admin
import Doctorss from "../../pages/Admin/Doctors/Doctorss.tsx";
import Patients from "../../pages/Admin/Patients/Patients.tsx";
import Servisecc from "../../pages/Admin/Servisec/Servicess.tsx";
import Fillials from "../../pages/Admin/Filials/Fillials.tsx";

// Pages - Doctor Panel
import Calendar from "../../pages/paneldoctors/Calendar.tsx";
import CreatePage from "../../widgets/Createabranch/CreatePage.tsx";

// Widgets
import DoctorAnalytics from "../../widgets/DoctorAnalytics/DoctorAnalytics.tsx";
import Director from "../Layout/Director/Director.tsx";
import Klient from "../Layout/Klient/Klient.tsx";
import { ClientPayments } from "../../pages/clientPayments/ClientPayments.tsx";
import { ClientBookings } from "../../pages/clientBookings/ClientBookings.tsx";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "list", element: <List /> },
      { path: "newdoctor", element: <Newdoctor /> },
      { path: "doctors", element: <Doctors /> },
      { path: "serviceList", element: <ServiceList /> },
    ],
  },
  {
    path: "admin",
    element: <LayoutAdmin />,
    children: [
      { path: "admin", element: <DoctorAnalytics /> },
      { path: "doctors", element: <Doctorss /> },
      { path: "patientsList", element: <Patients /> },
      { path: "branches", element: <Fillials /> },
      { path: "services", element: <Servisecc /> },
    ],
  },
  {
    path: "doctor",
    element: <DoctorsLayout />,
    children: [
      { path: "calendar", element: <Calendar /> },
      { path: "analytics", element: <DoctorAnalytics /> },
      { path: "patientsList", element: <Patients /> },
    ],
  },
  {
    path: "director",
    element: <Director/>,
    children: [
         { path: "analytics", element: <DoctorAnalytics /> },
         { path: "patientsList", element: <Patients /> },
         { path: "branches", element: <Fillials /> },
    ]
  },
  {
    path: "klient",
    element: <Klient/>,
    children: [
        {
            path: "clientPayments",
            element: <ClientPayments/>
        },
        {
            path: "сlientBookings",
            element: <ClientBookings/>
        }
    ]
  },
  { path: "signupUser", element: <SignUpClient /> },
  { path: "loginForm", element: <LoginForm /> },
  { path: "patientCalendar", element: <PatientCalendar /> },
]);
    