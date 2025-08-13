import React from "react";
import styles from "./ProfileModal.module.scss";
import { FiLogOut } from "react-icons/fi";
import { FaUser, FaClipboardList, FaCreditCard, FaCog } from "react-icons/fa";
import headerImg from "../../assets/svg/header.svg"

interface ProfileModalProps {
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.profileHeader}>
          <img
            src={headerImg}
            alt="Профиль"
            className={styles.avatar}
          />
          <h3>Айзирек Алтынбек</h3>
          <p>aizirek@gmail.com</p>
        </div>

        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <FaUser /> Личный кабинет
          </div>
          <div className={styles.menuItem}>
            <FaClipboardList /> Мои записи
          </div>
          <div className={styles.menuItem}>
            <FaCreditCard /> Мои оплаты
          </div>
          <div className={styles.menuItem}>
            <FaCog /> Настройка
          </div>
        </div>

        <div className={styles.logout}>
            <div className={styles.logoutButton}>

          <FiLogOut /> Выход
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
