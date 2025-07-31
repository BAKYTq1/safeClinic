import { AboutUs } from '../../components/aboutUs/AboutUs'
import { OurDoctors } from '../../components/ourDoctors/OurDoctors'
import { OurNews } from '../../components/ourNews/OurNews'
import { OurServices } from '../../components/ourServices/OurServices'
import OurClinic from "../../components/feedback/OurClinic.tsx"

function Home() {
  return (
    <div>
      < AboutUs />  
      <OurServices />
      <OurClinic/>
      <OurServices /> 
      <OurDoctors /> 
      <OurNews />
    </div>
  )
}

export default Home
