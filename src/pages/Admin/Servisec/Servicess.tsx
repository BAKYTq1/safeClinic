import React, { useState } from 'react'
import HeaDash from '../../../widgets/HeaDash/HeaDash'
import PatientsList from '../../../widgets/PatientsList/PatientsList'
import { ServiceList } from '../../ServiceList/ServiceList'

function Servisecc() {
    const [title, setTitle] = useState('Список пациентов')
      const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='dashboard'>
      <div>
        <HeaDash children={title} onAddClick={() => setModalOpen(true)} />
         <ServiceList/>
        {modalOpen && (
         <div className='modal-backdrop' onClick={() => setModalOpen(false)}>
{/* <Newdoctor/> */}
         </div>) }
      </div>
    </div>
  )
}

export default Servisecc
