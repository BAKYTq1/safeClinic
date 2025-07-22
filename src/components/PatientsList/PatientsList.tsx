import React from 'react';
import './PatientsList.scss';
// import { MdDelete } from "react-icons/md"; 
// import { FiEdit3 } from "react-icons/fi";


type Patient = {
  name: string;
  phone: string;
  address: string;
  date: string;
};

const patients: Patient[] = Array(10).fill({
  name: 'Кудуретов Асан',
  phone: '+996 501 393 178',
  address: 'Бишкек Кустанай 13',
  date: '29.03.24',
});

const PatientsList: React.FC = () => {
  return (
    <div className="patients-list-wrapper">
      <div className="patients-list-container">
        <h2>Список пациентов</h2>
        <div className="button-wrapper">
  <button className="add-button">+ Добавить</button>
</div>
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th className='patient-number'>Телефон</th>
              <th className='p-addres'>Адрес</th>
              <th className='p-date'>Дата посещения</th>
              <th className='p-icon'>Действия</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td><a href={`tel:${patient.phone}`}>{patient.phone}</a></td>
                <td className="patient-address">{patient.address}</td>
                <td className='patient-date'>{patient.date}</td>
              {/* <td>
                 <button className="icon-button delete" title="Удалить">
                  <MdDelete size={18} />
                 </button>
                 <button className="icon-button edit" title="Редактировать">
                  <FiEdit3 size={18} />
                 </button>
              </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsList;
