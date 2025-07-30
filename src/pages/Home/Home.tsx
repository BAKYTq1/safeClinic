import { AboutUs } from '../../components/aboutUs/AboutUs'
import { OurDoctors } from '../../components/ourDoctors/OurDoctors'
import { OurServices } from '../../components/ourServices/OurServices'

function Home() {
  return (
    <div>
      < AboutUs />  
      <OurServices /> 
      <OurDoctors />
    </div>
  )
}

export default Home
