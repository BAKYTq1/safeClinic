import React, { useState } from 'react';
import styles from './EditDoctorProfile.module.scss';

type DoctorProfile = {
  fullName: string;
  phone: string;
  birthDate: string;
  email: string;
  tag: string;
  gender: string;
  experience: string;
  address: string;
  about: string;
};

export function EditDoctorProfile() {
  const initialState: DoctorProfile = {
    fullName: 'Айбек Жумакадыров',
    phone: '+996 500 391 234',
    birthDate: '20.09.1996',
    email: 'jordansteve@gmail.com',
    tag: 'Хирург-ортопед',
    gender: 'Мужской',
    experience: '7 лет',
    address: 'Бишкек Токтогул 76',
    about: '',
  };

  const [formData, setFormData] = useState<DoctorProfile>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setFormData(initialState);
    setCancelled(true);
    setSubmitted(false);
  };

  const handleSave = () => {
    setSubmitted(true);
    setCancelled(false);
    console.log('Данные сохранены:', formData);
  };

  return (
    <div className={styles['edit-doctor-profile']}>
      <div className={styles['header']}>
        <h2>Редактировать профиль</h2>
      </div>

      <div className={styles['profile-photo-section']}>
        <img src="/doctor-placeholder.png" alt="Доктор" className={styles['doctor-photo']} />
        <div className={styles['photo-actions']}>
          <span className={styles['change-photo']}>Изменить фото*</span>
          <span className={styles['delete-photo']}>Удалить фото</span>
        </div>
      </div>

      <form className={styles['profile-form']} onSubmit={e => e.preventDefault()}>
        <div className={styles['form-group']}>
          <label>ФИО*</label>
          <input name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>

        <div className={styles['form-group']}>
          <label>Телефон*</label>
          <input name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className={styles['form-group']}>
          <label>Дата рождения*</label>
          <input name="birthDate" value={formData.birthDate} onChange={handleChange} />
        </div>

        <div className={styles['form-group']}>
          <label>Email*</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className={styles['form-group']}>
          <label>Теги*</label>
          <select name="tag" value={formData.tag} onChange={handleChange}>
            <option>Хирург-ортопед</option>
            <option>Терапевт</option>
            <option>Кардиолог</option>
          </select>
        </div>

        <div className={styles['form-group']}>
          <label>Пол*</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option>Мужской</option>
            <option>Женский</option>
          </select>
        </div>

        <div className={styles['form-group']}>
          <label>Опыт работы*</label>
          <input name="experience" value={formData.experience} onChange={handleChange} />
        </div>

        <div className={styles['form-group']}>
          <label>Адрес*</label>
          <input name="address" value={formData.address} onChange={handleChange} />
        </div>

        <div className={`${styles['form-group']} ${styles['full-width']}`}>
          <label>О себе*</label>
          <textarea
            name="about"
            placeholder="Написать о себе"
            value={formData.about}
            onChange={handleChange}
          />
        </div>
      </form>

      <div className={styles['form-buttons']}>
        <button type="button" className={styles['cancel']} onClick={handleCancel}>
          ✕ Отмена
        </button>
        <button type="button" className={styles['save']} onClick={handleSave}>
          ＋ Сохранить
        </button>
      </div>

      {submitted && <p className={`${styles['status']} ${styles['success']}`}> Профиль сохранён</p>}
      {cancelled && <p className={`${styles['status']} ${styles['cancel']}`}> Изменения отменены</p>}
    </div>
  );
}
