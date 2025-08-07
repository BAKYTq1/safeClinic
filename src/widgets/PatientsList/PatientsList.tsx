import React, { useState } from 'react';
import styles from './PatientsList.module.scss';
import { MdDelete } from "react-icons/md"; 
import { FiEdit3 } from "react-icons/fi"; 
import PatientInformation from '../../pages/patientinformation/Patientinformation';

type Patient = {
  name: string;
  phone: string;
  address: string;
  date: string;
};

const patients: Patient[] = Array(9).fill({
  name: 'Кудуретов Асан',
  phone: '+996 501 393 178',
  address: 'Бишкек Кустанай 13',
  date: '29.03.24',
});

const PatientsList: React.FC = () => {
      const [info, setinfo] = useState(false)
  return (
    <div className={styles['patients-list-wrapper']}>
      <div className={styles['patients-list-container']}>
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th className={styles['patient-number']}>Телефон</th>
              <th className={styles['p-addres']}>Адрес</th>
              <th className={styles['p-date']}>Дата посещения</th>
              <th className={styles['p-icon']}>Действия</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td onClick={() => setinfo(true)}>{patient.name}</td>
                <td>
                  <a href="">{patient.phone}</a>
                </td>
                <td className={styles['patient-address']}>{patient.address}</td>
                <td className={styles['patient-date']}>{patient.date}</td>
                <td>
                  <button className={`${styles['icon-button']} ${styles['delete']}`} title="Удалить">
                    <MdDelete size={18} />
                  </button>
                  <button className={`${styles['icon-button']} ${styles['edit']}`} title="Редактировать">
                    <FiEdit3 size={18} />
                  </button>
                </td>
              </tr>
            ))}
                 {info && (
  <div className='modal-backdrop' onClick={() => setinfo(false)}>
    <div onClick={(e) => e.stopPropagation()}>
      <PatientInformation  onClose={() => setinfo(false)}/>
    </div>
  </div>
)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsList;
