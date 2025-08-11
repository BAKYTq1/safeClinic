import React from 'react';
import styles from './Banner.module.scss';
import imageb from '../../assets/svg/imageb.png';

const Banner: React.FC = () => {
  return (
    // <div className='container-admin'>
    <div className={styles.banner}>
      <img src={imageb} alt="banner" className={styles.imageb} />
      <div className={styles.content}>
        <h1 className={styles.title}>safe.clinic</h1>
        <div className={styles.text}>
          Мы делаем вашу улыбку здоровой и красивой
           с удовольствием.
        </div>
        <button className={styles.button}>Записаться</button>
      </div>
    </div>
    // </div>
  );
};

export default Banner;
