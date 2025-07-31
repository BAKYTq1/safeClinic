import React from 'react'
import { Outlet } from 'react-router-dom'
import List from '../../../pages/list/List'
import Dashboard from '../../../pages/Admin/Doctors/Doctorss'
import Top from '../../../components/Top/Top'

interface MenuItem {
title: string;
}

const menuItems: MenuItem[] = [
{ title: "Аналитика",},
{ title: "Услуги", },
{ title: "Список врачей",  },
{ title: "Список пациентов",  },
{ title: "Филиалы", },
{ title: "Уведомление"},
{ title: "Настройка"},
];
function LayoutAdmin() {

  return (
    <div className='container-admin' style={{display: 'flex', gap:'30px' }}>
      <List/>
       <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
        <Top/>
          <Outlet/>
       </div>
    </div>
  )
}

export default LayoutAdmin
