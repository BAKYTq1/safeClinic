import React from 'react';
import styles from './CreateABranch.module.scss';

interface Props {
  onClose: () => void;
}

const CreateABranch: React.FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Создать новый филиал</h2>

        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Название филиала*</label>
              <input type="text" />
            </div>
            <div className={styles.field}>
              <label>Директор*</label>
              <select>
                <option value="">Выберите</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Адрес*</label>
              <input type="text" />
            </div>
            <div className={styles.field}>
              <label>Телефон*</label>
              <input type="text" />
            </div>
          </div>

           <div className={styles.buttons}>
            <button type="button" className={styles.cancel} onClick={onClose}>
              <span className={styles.icon}>✖</span> Отмена
            </button>
            <button type="submit" className={styles.save}>
              <span className={styles.icon}>＋</span> Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateABranch;
