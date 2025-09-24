import React from "react";
import "./PatientInformation.scss";


interface Patient {
  id: number;
  full_name: string;
  gender: string;
  phone: string;
  birth_date: string;
  address: string;
  complaints: string;
}

interface Props {
  patient: Patient;
  onClose: () => void;

}


const PatientInformation: React.FC<Props> = ({patient,  onClose}) => {

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Информация о пациенте</h2>
        </div>
        <div className="modal-content">
          <div className="modal-column">
            <p><strong>ФИО:</strong> {patient.full_name}</p>
            <p><strong>Телефон:</strong> {patient.phone}</p>
            <p><strong>Запись к врачу:</strong> —</p>
            <p><strong>Дата записи:</strong> -</p>
            <p><strong>Время:</strong> —</p>
          </div>
          <div className="modal-column">
            <p><strong>Адрес:</strong> {patient.address}</p>
            <p><strong>Пол:</strong> {patient.gender === "male" ? "Мужской" : "Женский"}</p>
            <p><strong>Дата рождения:</strong> {patient.birth_date}</p>
            <p><strong>Жалобы:</strong> {patient.complaints}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>✖ Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;
