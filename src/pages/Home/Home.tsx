import React from 'react'
import Branches from '../branches/Branches'
import Newdoctor from '../creating/Newdoctor'
import { AboutUs } from '../../widgets/AboutUs/AboutUs'
import { OurServices } from '../../widgets/ourServices/OurServices'
import OurClinic from '../../widgets/feedback/OurClinic'
import { OurDoctors } from '../../widgets/ourDoctors/OurDoctors'
import { OurNews } from '../../widgets/ourNews/OurNews'
import Patient from '../create/Patient'

function Home() {
  return (
    <div>
      {/* <Branches/>
      <Newdoctor/> */}
      < AboutUs/>  
      <OurServices />
      <OurClinic/>
      <OurServices /> 
      <OurDoctors /> 
      <OurNews />
    </div>
  )
}

export default Home
