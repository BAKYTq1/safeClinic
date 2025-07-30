import { AboutUs } from '../../components/aboutUs/AboutUs'
import { OurServices } from '../../components/ourServices/OurServices'
import OurClinic from "../../components/feedback/OurClinic.tsx"

function Home() {
  return (
    <div>
      < AboutUs />  
      <OurServices />
      <OurClinic/>
    </div>
  )
}

export default Home
