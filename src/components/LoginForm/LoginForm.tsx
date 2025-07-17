import React, { useEffect, useRef, useState } from 'react';
import './LoginForm.scss'; 
import { MdHealthAndSafety } from "react-icons/md"; 
import { MdOutlineBadge, MdEmail, MdLock, MdVisibility, MdVisibilityOff,  MdKeyboardArrowDown,} from "react-icons/md";

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isTagOpen, setIsTagOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const togglePasswordVisibility = (): void => {
    setShowPassword((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsTagOpen(false);
    }
  };

  const handleBlur = (): void => {
    setTimeout(() => setIsTagOpen(false), 150);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <div className="logo-icon"> 
            <MdHealthAndSafety />
          </div>
          <h1>safe.clinic</h1>
        </div>
        <h2>Вход на веб приложение</h2>
        <p>Все условия для вашей безопасности</p>

        <form className="login-form">
          <div className="form-group">
            <label>Теги*</label>
            <div className="input-icon" ref={wrapperRef}>
              <div className="left-icon-wrapper">
                <MdOutlineBadge className="left-icon" />
              </div>
              <select
                ref={selectRef}
                size={1}
                onBlur={handleBlur}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsTagOpen(true);
                }}
              >
                <option>Теги</option>
                <option>Дизайн</option>
                <option>Разработка</option>
                <option>Маркетинг</option>
              </select>
              <MdKeyboardArrowDown
                className={`right-icon ${isTagOpen ? "rotate" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsTagOpen((prev) => !prev);
                  selectRef.current?.focus();
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Логин*</label>
            <div className="input-icon">
              <div className="left-icon-wrapper">
                <MdEmail className="left-icon" />
              </div>
              <input type="text" placeholder="Укажите логин" />
            </div>
          </div>

          <div className="form-group">
            <label>Пароль*</label>
            <div className="input-icon">
              <div className="left-icon-wrapper">
                <MdLock className="left-icon" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Пароль"
              />
              {showPassword ? (
                <MdVisibility
                  className="right-icon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <MdVisibilityOff
                  className="right-icon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>

          <button type="submit">ВОЙТИ НА САЙТ</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
