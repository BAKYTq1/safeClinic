import React from 'react';
// import { MdHealthAndSafety } from 'react-icons/md';
import styles from './SignUpClien.module.scss';

export const SignUpClient: React.FC = () => {
  return (
    <div className={styles['signup-container']}>
      <div className={styles['signup-box']}>
        <div className={styles['signup-logo']}>
          {/* <MdHealthAndSafety className={styles['logo-icon']} /> */}
          <h1 className={styles['logo-text']}>safe.clinic</h1>
        </div>

        <h2 className={styles['form-title']}>Регистрация</h2>

        <form className={styles['signup-form']}>
          <label>ФИО*</label>
          <input type="text" placeholder="" required />
          <label>Email*</label>
          <input type="email" placeholder="" required />
          <label>Пароль*</label>
          <input type="password" placeholder="" required />
          <button type="submit" className={styles['submit-btn']}>
            Регистрация
          </button>
          <p className={styles['login-link']}>
            Уже есть аккаунт? <a href="#">Войти</a>
          </p>
        </form>
      </div>
    </div>
  );
};

