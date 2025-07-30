import { AboutUs } from '../../components/aboutUs/AboutUs'
import { OurDoctors } from '../../components/ourDoctors/OurDoctors'
import { OurNews } from '../../components/ourNews/OurNews'
import { OurServices } from '../../components/ourServices/OurServices'

function Home() {
  return (
    <div>
      < AboutUs />  
      <OurServices /> 
      <OurDoctors /> 
      <OurNews />
    </div>
  )
}

export default Home
