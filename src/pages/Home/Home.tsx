import React from 'react'
import Branches from '../branches/Branches'
import Newdoctor from '../creating/Newdoctor'
import { AboutUs } from '../../widgets/AboutUs/AboutUs'
import { OurServices } from '../../widgets/ourServices/OurServices'
import OurClinic from '../../widgets/feedback/OurClinic'
import { OurDoctors } from '../../widgets/ourDoctors/OurDoctors'
import { OurNews } from '../../widgets/ourNews/OurNews'
import Patient from '../create/Patient'
import Banner from '../../widgets/Banner/Banner'
import AddressСontacts from "../../widgets/address-contacts/AddressСontacts"

function Home() {
  return (
    <div>
      {/* <Branches/>
      <Newdoctor/> */}
      <Banner/>
      < AboutUs/>  
      <OurServices /> 
       <OurDoctors /> 
      <OurClinic/>
      <OurNews />
      <AddressСontacts/>
    </div>
  )
}

export default Home
