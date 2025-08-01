import styles from './OurServices.module.scss';
import OurServices1 from '../../assets/svg/OurServices1.svg';
import OurServices2 from '../../assets/svg/OurServices2.svg';
import OurServices3 from '../../assets/svg/OurServices3.svg';
import OurServices4 from '../../assets/svg/OurServices4.svg';
import OurServices5 from '../../assets/svg/OurServices5.svg';
import OurServices6 from '../../assets/svg/OurServices6.svg';
import { useEffect, useState } from 'react';

type ServiceCard = {
  img: string;
  title: string;
  description: string;
};

const services: ServiceCard[] = [
  {
    img: OurServices1,
    title: 'Выравнивание зубов без брекета',
    description: 'Если брекеты вам не подходят, можно выровнять зубы без брекетов с помощью кап-элайнеров.',
  },
  {
    img: OurServices2,
    title: 'Ортодонтия',
    description: 'Корректируем неправильный прикус и расположение зубов с помощью брекетов.',
  },
  {
    img: OurServices3,
    title: 'Имплантация протезирование',
    description: 'Устанавливаем импланты и натуральные коронки на пустое место зубного ряда.',
  },
  {
    img: OurServices4,
    title: 'Реставрация',
    description: 'Восстанавливаем анатомическую форму зубов и придаем ей натуральный цвет.',
  },
  {
    img: OurServices5,
    title: 'Хирургия',
    description: 'Удаляем зубы и инородные образования, занимаемся пластикой уздечек губ и языка при рассечении.',
  },
  {
    img: OurServices6,
    title: 'Виниры',
    description: 'Создаем белоснежную улыбку с помощью несъемных накладок.',
  },
];
export function OurServices() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 320 && window.innerHeight <= 798);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.lineTitle}>
          <div className={styles.dot}></div>
          <div className={styles.line}></div>
          <h2 className={styles.lineText}>Наши услуги</h2>
          <div className={styles.line}></div>
          <div className={styles.dot}></div>
        </div>

        <div className={styles.cardsGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <img src={service.img} alt={service.title} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{service.title}</h3>
              {isMobile ? (
                <div style={{ fontSize: '12px', fontWeight: '400', width: '180px', marginTop: '-20px', lineHeight: 1.4 }}>
                  {service.description}
                </div>
              ) : (
                <p className={styles.cardDescription}>{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}