import React from 'react';
import styles from './Branches.module.scss';
// import { FaTrash, FaPen } from 'react-icons/fa';

interface Branch {
  name: string;
  address: string;
  director: string;
}

const branches: Branch[] = [
  { name: 'Safe.clinc', address: 'Бишкек Кустанай 13', director: 'Алиса Каримова' },
  { name: 'Nur.clinc', address: 'Бишкек Кустанай 13', director: 'Алиса Каримова' },
  { name: 'Nurs.clinc', address: 'Бишкек Кустанай 13', director: 'Алиса Каримова' },
  { name: 'Medic.clinc', address: 'Бишкек Кустанай 13', director: 'Алиса Каримова' },
  { name: 'Prime.clinc', address: 'Бишкек Кустанай 13', director: 'Алиса Каримова' },
  { name: 'Green.clinc', address: 'Бишкек Кустанай 13', director: 'Алиса Каримова' },
  { name: 'Bishkek medical.clinc', address: 'Бишкек Кустанай 13', director: 'Алиса Каримова' },
  { name: 'On.clinc', address: 'Бишкек Кустанай 13', director: 'Алиса Каримова' },
  { name: 'Medi.clinc', address: 'Бишкек Кустанай 13', director: 'Алиса Каримова' },
  { name: 'Azmed.clinc', address: 'Бишкек Кустанай 13', director: 'Алиса Каримова' },
];

const Branches: React.FC = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Адрес</th>
            <th>Директор</th>
            <th>Действии</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch, index) => (
            <tr key={index}>
              <td>{branch.name}</td>
              <td>{branch.address}</td>
              <td>{branch.director}</td>
              <td className={styles.actions}>
                {/* <button className={styles.delete}><FaTrash /></button>
                <button className={styles.edit}><FaPen /></button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Branches;
