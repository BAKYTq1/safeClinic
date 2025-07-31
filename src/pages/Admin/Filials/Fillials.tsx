import React, { useState } from 'react'
import HeaDash from '../../../components/HeaDash/HeaDash'
import ServiceList from '../../ServiceList/ServiceList'
import Branches from '../../branches/Branches'

function Fillials() {
    const [title, setTitle] = useState('Список пациентов')
      const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='dashboard'>
      <div>
        <HeaDash children={title} onAddClick={() => setModalOpen(true)} />
         <Branches/>
        {modalOpen && (
         <div className='modal-backdrop' onClick={() => setModalOpen(false)}>
{/* <Newdoctor/> */}
         </div>) }
      </div>
    </div>
  )
}

export default Fillials