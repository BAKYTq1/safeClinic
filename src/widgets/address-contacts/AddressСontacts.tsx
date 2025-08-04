import React from 'react';
import styles from './AddressContacts.module.scss';

import adresscontacts1 from "../../assets/svg/addresscontacts1.svg";
import adresscontacts2 from "../../assets/svg/addresscontacts2.svg";
import adresscontacts3 from "../../assets/svg/addresscontacts3.svg";
import adresscontacts4 from "../../assets/svg/addresscontacts4.svg";
import adresscontacts5 from "../../assets/svg/addresscontacts5.svg";

function AddressContacts() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.addresscontacts}>
          <div className={styles.contactSection}>
            <h1>Адрес и контакты</h1>
            <div className={styles.i}>
              <img src={adresscontacts2} alt="" />
            </div>
            <div className={styles.contacts}>
              <div className={styles.address}>
                <img src={adresscontacts3} alt="" />
                <div>
                  <h3>Бишкек Ульянова ул., 3</h3>
                  <p>Вход со двора. Одна минута <br /> хотьбы от автобусной остановки</p>
                </div>
              </div>
              <div className={styles.tel}>
                <img src={adresscontacts4} alt="" />
                <h3>+ 996 (554) 312 314</h3>
              </div>
              <div className={styles.worktimes}>
                <img src={adresscontacts5} alt="" />
                <div>
                  <h3>Время работы</h3>
                  <p>С 8.00 по 20.00 Без выходных</p>
                </div>
              </div>
              <button>Записаться на приём</button>
            </div>
          </div>
          <div className={styles.addressSection}>
            <div className={styles.input}>
              <select id="branch">
                <option value="">Выберите филиал</option>
                <option value="bishkek">Бишкек</option>
                <option value="osh">Ош</option>
                <option value="jalalabad">Жалал-Абад</option>
              </select>
            </div>

            <div className={styles.map}>
              <iframe
                title="Карта с маркером"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6117219891163!2d74.60405387587381!3d42.87408307115562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d60e1e7c67%3A0x373d5f42e51a6ad4!2z0YPQuy4g0JfQsNC60YPQsdGA0LDQstCwLCAzLCDQkdC-0YDQvNC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzIwMDA!5e0!3m2!1sru!2skg!4v1691840014123!5m2!1sru!2skg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <img src={adresscontacts1} alt="" />
        </div>
      </div>
    </div>

  );
}

export default AddressContacts;
