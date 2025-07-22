import React from 'react';
import './ServiseModal.scss';

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

const ServiceModal: React.FC<Props> = ({ service, onClose }) => {
  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <div className="service-modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">ИНФАРМАТЦИЯ ОБ УСЛУГЕ</h3>
        <div className="modal-content">
          <div className="modal-header">
            <img src={service.image} alt={service.name} className="modal-image" />
            <p className="modal-name">{service.name}</p>
          </div>
          <div className="modal-body">
            <div className="modal-left">
              <p><strong>Описание услуги:</strong> {service.description.replace('...', '')}</p>
            </div>
            <div className="modal-right">
              <p className='modal-price'><strong>Цена: </strong> {service.price.replace(' с', '')}</p>
              <p className='modal-category'><strong>Категория: </strong> Хирургия</p>
            </div>
          </div>
        </div>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>✖ Отмена</button>
          <button className="save-btn">＋ Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
