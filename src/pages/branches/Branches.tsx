import React, { useState } from 'react';
import styles from './Branches.module.scss';
import BranchesDetail from '../BranchesDetail/BranchesDetail.tsx';
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
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
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
                <td>
                  <button className={styles.nameBtn} onClick={() => setSelectedBranch(branch)}>
                    {branch.name}
                  </button>
                </td>
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

      {selectedBranch && (
        <BranchesDetail branch={selectedBranch} onClose={() => setSelectedBranch(null)} />
      )}
    </div>
  );
};

export default Branches;
