import styles from './Footer.module.scss';
import Logo from '../../assets/svg/LOGO.svg'; 
import {FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebookF,} from 'react-icons/fa';
import { IoLogoVk } from "react-icons/io5"; 
import { RiInstagramFill } from "react-icons/ri";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.column}>
            <img src={Logo} alt="Safe Clinic Logo" className={styles.logoImg} />
            <p className={styles.copy}>2024 © Все права защищены</p>
          </div>

          <div className={styles.column}>
            <h3>О нас</h3>
            <ul>
              <li>Наши услуги</li>
              <li>Наши врачи</li>
              <li>Наша клиника</li>
              <li>Контакты</li>
              <li>Филиалы </li>
            </ul>
          </div>

          <div className={`${styles.column} ${styles.information}`}>
            <h3>Информация</h3>
            <ul>
              <li>Отзывы</li>
              <li>Новости</li>
              <li>Бесплатная консультация</li>
            </ul>
          </div>

          <div className={`${styles.column} ${styles.withUs}`}>
            <h3>Связаться с нами</h3>
            <ul className={styles.contactList}>
              <li>
                <FaPhoneAlt className={styles.icon} /> +996 709 690 43 43
              </li>
              <li>
                <FaWhatsapp className={styles.icon} /> +996 705 90 43 43
              </li>
              <li>
                <FaEnvelope className={styles.icon} /> safe.clinic@gmail.com
              </li>
            </ul>
            <h4>Присоединяйтесь к нам</h4>
            <div className={styles.socials}>
              <IoLogoVk  />
              <FaFacebookF />
              <RiInstagramFill />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 


