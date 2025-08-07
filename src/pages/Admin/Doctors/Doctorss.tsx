import React, { useEffect, useState } from 'react'
import HeaDash from '../../../widgets/HeaDash/HeaDash'
import { Outlet, useLocation } from 'react-router-dom'
import './style.scss'
import Newdoctor from '../../creating/Newdoctor';
import Doctors from '../../section/Doctors';

const routeTitles: { [key: string]: string } = {
 '/admin': 'Аналитика',
    '/admin/doctors': 'Список врачей',
    '/admin/patientsList': 'Список пациентов',
    '/admin/branches': 'Филиалы',
    '/admin/settings': 'Настройки',
    '/admin/notifications': 'Уведомления',
    '/admin/services': 'Услуги',
};

function Doctorss() {
  const location = useLocation();
  const [title, setTitle] = useState('Список врачей');
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='dashboard'>
      <div>
        <HeaDash children={title} onAddClick={() => setModalOpen(true)} />
          <Doctors/>
        {modalOpen && (
         <div className='modal-backdrop' onClick={() => setModalOpen(false)}>
<Newdoctor/>
         </div>) }
      </div>
    </div>
  )
}

export default Doctorss
