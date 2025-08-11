import React from 'react';
import styles from './ServiseModal.module.scss';

interface Service {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Props {
  service: Service;
  onClose: () => void;
}

export const ServiceModal: React.FC<Props> = ({ service, onClose }) => {
  return (
    <div className={styles['service-modal-overlay']} onClick={onClose}>
      <div
        className={styles['service-modal']}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className={styles['modal-title']}>ИНФОРМАЦИЯ ОБ УСЛУГЕ</h3>
        <div className={styles['modal-content']}>
          <div className={styles['modal-header']}>
            <img
              src={service.image}
              alt={service.name}
              className={styles['modal-image']}
            />
            <p className={styles['modal-name']}>{service.name}</p>
          </div>
          <div className={styles['modal-body']}>
            <div className={styles['modal-left']}>
              <p>
                <strong>Описание услуги:</strong>{' '}
                {service.description.replace('...', '')}
              </p>
            </div>
            <div className={styles['modal-right']}>
              <p className={styles['modal-price']}>
                <strong>Цена: </strong> {service.price.replace(' с', '')}
              </p>
              <p className={styles['modal-category']}>
                <strong>Категория: </strong> Хирургия
              </p>
            </div>
          </div>
        </div>
        <div className={styles['modal-actions']}>
          <button className={styles['cancel-btn']} onClick={onClose}>
            ✖ Отмена
          </button>
          <button className={styles['save-btn']}>＋ Сохранить</button>
        </div>
      </div>
    </div>
  );
}; 