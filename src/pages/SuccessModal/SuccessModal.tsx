import React from 'react';
import styles from './SuccessModal.module.scss';

interface SuccessModalProps {
  message: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.message}>{message}</p>
        <button className={styles.button} onClick={onClose}>Ок</button>
      </div>
    </div>
  );
};

export default SuccessModal;
