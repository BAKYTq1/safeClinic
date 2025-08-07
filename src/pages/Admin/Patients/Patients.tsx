import React, { useState } from 'react'
import HeaDash from '../../../widgets/HeaDash/HeaDash'
import PatientsList from '../../../widgets/PatientsList/PatientsList'
import Patient from '../../create/Patient'
import PatientInformation from '../../patientinformation/Patientinformation'

function Patients() {
    const [title, setTitle] = useState('Список пациентов')
      const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='dashboard'>
      <div>
        <HeaDash children={title} onAddClick={() => setModalOpen(true)} />
         <PatientsList/>
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

export default Patients
