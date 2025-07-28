import React from 'react';
import styles from './InformationModal.module.scss';

interface Props {
  onClose: () => void;
}

const InformationModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Информация</h2>
        <div className={styles.content}>
          <div className={styles.left}>
            <p><strong>ФИО:</strong> Кудуретов Асан</p>
            <p><strong>Телефон:</strong> +996 501 393 173</p>
            <p><strong>Адрес:</strong> Бишкек Кустанай 13</p>
            <p><strong>Жалобы:</strong> Боль в правом боку со спины под ребра</p>
          </div>
          <div className={styles.right}>
            <p><strong>Запись к врачу:</strong> Кубат Камчыбеков</p>
            <p><strong>Дата записи:</strong> 20.09.2024</p>
            <p><strong>Время:</strong> 10:00–11:00</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.edit}>Изменить</button>
          <button className={styles.done} onClick={onClose}>Готово</button>
        </div>
      </div>
    </div>
  );
};

export default InformationModal;
