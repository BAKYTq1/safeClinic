import React, { useEffect, useRef, useState } from 'react';
import styles from './LoginForm.module.scss'; 
// import { MdHealthAndSafety } from "react-icons/md"; 
// import { MdOutlineBadge, MdEmail, MdLock, MdVisibility, MdVisibilityOff, MdKeyboardArrowDown } from "react-icons/md";

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
    <div className={styles["login-container"]}>
      <div className={styles["login-box"]}>
        <div className={styles["login-logo"]}>
          <div className={styles["logo-icon"]}> 
            {/* <MdHealthAndSafety /> */}
          </div>
          <h1>safe.clinic</h1>
        </div>
        <h2>Вход на веб приложение</h2>
        <p>Все условия для вашей безопасности</p>

        <form className={styles["login-form"]}>
          <div className={styles["form-group"]}>
            <label>Теги*</label>
            <div className={styles["input-icon"]} ref={wrapperRef}>
              <div className={styles["left-icon-wrapper"]}>
                {/* <MdOutlineBadge className={styles["left-icon"]} /> */}
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
              {/* <MdKeyboardArrowDown
                className={`${styles["right-icon"]} ${isTagOpen ? styles["rotate"] : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsTagOpen((prev) => !prev);
                  selectRef.current?.focus();
                }}
              /> */}
            </div>
          </div>

          <div className={styles["form-group"]}>
            <label>Логин*</label>
            <div className={styles["input-icon"]}>
              <div className={styles["left-icon-wrapper"]}>
                {/* <MdEmail className={styles["left-icon"]} /> */}
              </div>
              <input type="text" placeholder="Укажите логин" />
            </div>
          </div>

          <div className={styles["form-group"]}>
            <label>Пароль*</label>
            <div className={styles["input-icon"]}>
              <div className={styles["left-icon-wrapper"]}>
                {/* <MdLock className={styles["left-icon"]} /> */}
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Пароль"
              />
              {/* {showPassword ? (
                <MdVisibility
                  className={styles["right-icon"]}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <MdVisibilityOff
                  className={styles["right-icon"]}
                  onClick={togglePasswordVisibility}
                />
              )} */}
            </div>
          </div>

          <button type="submit" className={styles["button"]}>
            ВОЙТИ НА САЙТ
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
