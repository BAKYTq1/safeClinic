import React from 'react';
import './BranchesDetail.scss';

interface Branch {
  name: string;
  address: string;
  director: string;
}

interface Props {
  branch: Branch;
  onClose: () => void;
}

const BranchesDetail: React.FC<Props> = ({ branch, onClose }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="header">  
          <h1 className='title'>Информация о филиале</h1>
        </div>
        <div className="content">
          <div>
            <p><strong>Название филиала:</strong> {branch.name}</p>
            <p><strong>Адрес:</strong> {branch.address}</p>
          </div>
          <div>
            <p><strong>Директор:</strong> {branch.director}</p>
            <p><strong>Телефон:</strong> +996 509 456 736</p>
          </div>
        </div>
        <button className="closeBtn" onClick={onClose}>✖ Отмена</button>
      </div>
    </div>
  );
};

export default BranchesDetail;
