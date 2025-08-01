import React from 'react';
import styles from './BranchesDetail.module.scss';

interface Branch {
  name: string;
  address: string;
  director: string;
}

interface Props {
  branch: Branch;
  onClose: () => void;
}

export const BranchesDetail: React.FC<Props> = ({ branch, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>  
          <h1 className={styles.title}>Информация о филиале</h1>
        </div>
        <div className={styles.content}>
          <div>
            <p><strong>Название филиала:</strong> {branch.name}</p>
            <p><strong>Адрес:</strong> {branch.address}</p>
          </div>
          <div>
            <p><strong>Директор:</strong> {branch.director}</p>
            <p><strong>Телефон:</strong> +996 509 456 736</p>
          </div>
        </div>
        <button className={styles.closeBtn} onClick={onClose}>✖ Отмена</button>
      </div>
    </div>
  );
}; 