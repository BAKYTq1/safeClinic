import React from 'react'
import './style.scss'
function DeleteModal() {
  return (
    <div className='delete-modal'>
        <div className='item-delete-modal'>
            <p>Вы действительно хотите удалить? </p>
            <div>
                <button>Нет</button>
                <button>Да</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal
