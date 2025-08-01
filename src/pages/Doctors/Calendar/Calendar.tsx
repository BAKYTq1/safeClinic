import React, { useState } from 'react'
import HeaDash from '../../../widgets/HeaDash/HeaDash'
import Month from '../../calendar/Month'

function Calendar() {
    const [title, setTitle] = useState('Список пациентов')
      const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='dashboard'>
      <div>
        <HeaDash children={title} onAddClick={() => setModalOpen(true)} />
          <Month/>
        {modalOpen && (
         <div className='modal-backdrop' onClick={() => setModalOpen(false)}>
{/* <Newdoctor/> */}
         </div>) }
      </div>
    </div>
  )
}

export default Calendar
