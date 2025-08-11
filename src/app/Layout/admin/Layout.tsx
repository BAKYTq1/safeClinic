import React from 'react'
import { Outlet } from 'react-router-dom'
import List from '../../../pages/list/List'
import Dashboard from '../../../pages/Admin/Doctors/Doctorss'
import Top from '../../../widgets/Top/Top'
import img2 from "../../../assets/svg/1.svg";
import img3 from "../../../assets/svg/2.svg";
import img4 from "../../../assets/svg/3.svg";
import img5 from "../../../assets/svg/4.svg";
import img6 from "../../../assets/svg/5.svg";
import img7 from "../../../assets/svg/6.svg";
import img8 from "../../../assets/svg/7.svg";

const menuItems = [
  { title: "Аналитика", icon: img2, link: 'admin'},
  { title: "Услуги", icon: img3, link: 'services'},
  { title: "Список врачей", icon: img4, link: 'doctors' },
  { title: "Список пациентов", icon: img5, link: 'patientsList' },
  { title: "Филиалы", icon: img6, link: 'branches' },
  { title: "Уведомление", icon: img7, link: '' },
  { title: "Настройка", icon: img8, link: '' },
];

function LayoutAdmin() {

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

export default LayoutAdmin
