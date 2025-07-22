import React, { useState } from 'react';
import './SignUpClien.scss';
// import { MdHealthAndSafety } from 'react-icons/md';

const SignUpClient = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-logo">
          {/* <MdHealthAndSafety className="logo-icon" /> */}
          <h1 className="logo-text">safe.clinic</h1>
        </div>

        <h2 className="form-title">Регистрация</h2>

        <form className="signup-form">
          <label>ФИО*</label>
          <input type="text" placeholder="" required />
          <label>Email*</label>
          <input type="email" placeholder="" required />
          <label>Пароль*</label>
          <input type="password" placeholder="" required />
          <button type="submit" className="submit-btn">Регистрация</button>
          <p className="login-link">Уже есть аккаунт? <a href="#">Войти</a></p>
        </form>
      </div>
    </div>
  );
}; 
export default SignUpClient; 
