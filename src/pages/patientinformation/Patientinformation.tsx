import React from 'react';
import './PatientInformation.scss';

interface PatientInfoProps {
  onClose: () => void;
}

const PatientInformation: React.FC<PatientInfoProps> = ({ onClose }) => {
  return (


    


    <div className="modal-overlay">
      <div className="modal-window">
        <div className="modal-header">
          <h2>Информация о пациенте</h2>
        </div>
        <div className="modal-content">
          <div className="modal-column">
            <p><strong>ФИО:</strong> Кудуретов Асан</p>
            <p><strong>Телефон:</strong> +996 501 393 173</p>
            <p><strong>Запись к врачу:</strong> Кубат Камчыбеков</p>
            <p><strong>Дата записи:</strong> 20.09.2024</p>
            <p><strong>Время:</strong> 10:00–11:00</p>
          </div>
          <div className="modal-column">
            <p><strong>Адрес:</strong> Бишкек Кустанай 13</p>
            <p><strong>Пол:</strong> Мужской</p>
            <p><strong>Дата рождения:</strong> 20.09.1996</p>
            <p><strong>Жалобы:</strong> Боль в правом боку со спины под ребра</p>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>✖ Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;
