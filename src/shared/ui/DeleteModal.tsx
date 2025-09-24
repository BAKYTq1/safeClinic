import React from 'react';
import './style.scss';

interface DeleteModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

function DeleteModal({ onConfirm, onCancel }: DeleteModalProps) {
  return (
    <div className='delete-modal'>
      <div className='item-delete-modal'>
        <p>Вы действительно хотите удалить?</p>
        <div className='buttons'>
          <button className='cancel' onClick={onCancel}>Нет</button>
          <button className='confirm' onClick={onConfirm}>Да</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
