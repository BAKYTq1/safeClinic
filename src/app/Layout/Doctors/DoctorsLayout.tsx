import React from 'react'
import { Outlet } from 'react-router-dom'
import List from '../../../pages/list/List'
import Dashboard from '../../../pages/Admin/Doctors/Doctorss'
import Top from '../../../widgets/Top/Top'
import img2 from "../../../assets/svg/ph_calendar-duotone.svg";
import img3 from "../../../assets/svg/2.svg";
import img5 from "../../../assets/svg/4.svg";
import img7 from "../../../assets/svg/6.svg";
import img8 from "../../../assets/svg/7.svg";

const menuItems = [
  { title: "Календарь", icon: img2, link: 'calendar'},
  { title: "Аналитика", icon: img3, link: 'analytics'},
  { title: "Список пациентов", icon: img5, link: 'patientsList' },
  { title: "Уведомление", icon: img7, link: '' },
  { title: "Настройка", icon: img8, link: '' },
];
function DoctorsLayout() {

  return (
    <div className='container-admin' style={{display: 'flex', gap:'30px' }}>
      <List title={menuItems}/>
       <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
        <Top/>
          <Outlet/>
       </div>
    </div>
  )
}

export default DoctorsLayout
