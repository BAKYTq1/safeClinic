import React from 'react';
import styles from './DoctorsProfile.module.scss';
import { FaUserEdit } from 'react-icons/fa';

const DoctorsProfile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <img
            src="/avatar.png" // сүрөттү `public` папкага сал
            alt="Айбек Жумакадыров"
            className={styles.avatar}
          />
          <div>
            <h2>Айбек Жумакадыров</h2>
            <p>Хирург-ортопед</p>
          </div>
        </div>
        <div className={styles.totalClients}>
          <span>1838</span>
          <p>Всего клиентов</p>
        </div>
      </div>
<button className={styles.editButton}>
  <FaUserEdit /> Редактировать
</button>

<div className={styles.divider} />

<div className={styles.infoSection}>
  <h3 className={styles.sectionTitle}>Личная информация</h3>
  <div className={styles.infoGrid}>
    <div><strong>ФИО:</strong> Айбек Жумакадыров</div>
    <div><strong>Опыт работы:</strong> 7 лет</div>
    <div><strong>Дата рождения:</strong> 20.09.1996</div>
    <div><strong>Телефон:</strong> +996 500 391 234</div>
    <div><strong>Статус:</strong> Хирург-ортопед</div>
    <div><strong>Email:</strong> jordansteve@gmail.com</div>
    <div className={styles.about}><strong>О себе:</strong> Я — врач-стоматолог. Закончила...</div>
    <div><strong>Пол:</strong> Мужской</div>
    <div><strong>Адрес:</strong> Бишкек Токтогул 76</div>
  </div>
</div>

<div className={styles.divider} />

<div className={styles.scheduleSection}>
  <h3>График работы</h3>
  <p>📅 11–16 Январь 2024</p>
  <div className={styles.scheduleGrid}>
    {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'].map((day) => (
      <div key={day} className={styles.scheduleItem}>
        <span>{day}</span>
        <span className={styles.time}>09:00</span>
        <span className={styles.status}>19:00</span>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default DoctorsProfile;
