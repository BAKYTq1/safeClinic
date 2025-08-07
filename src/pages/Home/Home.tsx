import React from 'react'
import Branches from '../branches/Branches'
import Newdoctor from '../creating/Newdoctor'
import { AboutUs } from '../../widgets/AboutUs/AboutUs'
import { OurServices } from '../../widgets/ourServices/OurServices'
import OurClinic from '../../widgets/feedback/OurClinic'
import { OurDoctors } from '../../widgets/ourDoctors/OurDoctors'
import { OurNews } from '../../widgets/ourNews/OurNews'
import Patient from '../create/Patient'
import Patients from '../Admin/Patients/Patients'
import PatientsList from '../../widgets/PatientsList/PatientsList'
import { PatientCalendar } from '../PatientCalendar/PatientCalendar'
import { EditDoctorProfile } from '../editDoctorProfile/EditDoctorProfile'
import Banner from '../../widgets/Banner/Banner'
import Consultation from '../../widgets/consultation/Consultation'
import AddressСontacts from "../../widgets/address-contacts/AddressСontacts"

function Home() {
  return (
    <div>
      {/* <Branches/>
      <Newdoctor/> */}
      {/* <Patient/>
      <Patients/> */}
      < AboutUs/>  
      {/* <EditDoctorProfile/> */}
      <OurServices />
      <OurClinic/>
      <Banner/>
      < AboutUs/>  
      <OurServices /> 
       <OurDoctors /> 
      <OurClinic/>
      <OurNews />
      <Consultation />
      <AddressСontacts/>
    </div>
  )
}

export default Home
