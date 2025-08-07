import React, { useState } from 'react'
import HeaDash from '../../../widgets/HeaDash/HeaDash'
import PatientsList from '../../../widgets/PatientsList/PatientsList'
import { ServiceList } from '../../ServiceList/ServiceList'
import Patient from '../../create/Patient'

function Servisecc() {
    const [title, setTitle] = useState('Услуги')
      const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='dashboard'>
      <div>
        <HeaDash children={title} onAddClick={() => setModalOpen(true)} />
         <ServiceList/>
       {modalOpen && (
  <div className='modal-backdrop' onClick={() => setModalOpen(false)}>
    <div onClick={(e) => e.stopPropagation()}>
      <Patient onClick={() => setModalOpen(false)}/>
    </div>
  </div>
)}

      </div>
    </div>
  )
}

export default Servisecc
