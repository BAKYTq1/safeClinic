import React, { useEffect, useState } from 'react';
import styles from './AboutUs.module.scss';
import bgImage from '../../assets/svg/safeclinicThisBg.svg';
import icon1 from '../../assets/svg/safeclinicThis1.svg';
import icon2 from '../../assets/svg/safeclinicThis2.svg';
import icon3 from '../../assets/svg/safeclinicThis3.svg';

type Card = {
  icon: string;
  title: string;
  description: string;
  alt: string;
};

const cards: Card[] = [
  {
    icon: icon1,
    title: 'ПОСТОЯННОЕ РАЗВИТИЕ',
    alt: 'Постоянное развитие',
    description:
      'Наши врачи регулярно выезжают за границу на семинары и мастер-классы ведущих специалистов стран СНГ и Европы. Говорят, совершенства не существует, но мы однозначно к нему стремимся!',
  },
  {
    icon: icon2,
    title: 'СОВРЕМЕННЫЕ\nМЕТОДИКИ ЛЕЧЕНИЯ',
    alt: 'Современные методики',
    description:
      'Инновационные технологии гарантируют, что лечебный процесс будет максимально комфортным и безопасным. Какие-либо побочные эффекты здесь полностью отсутствуют.',
  },
  {
    icon: icon3,
    title: 'ГАРАНТИЯ\nКАЧЕСТВА',
    alt: 'Гарантия качества',
    description:
      'Главная задача нашей команды – обеспечить качество лечения, чтобы вы были довольны результатами нашей работы. Вы получаете гарантию на любую услугу в Safe.Clinic.',
  },
];

export const AboutUs: React.FC = () => {
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
    <div
      className={styles.aboutUsSection}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.lineTitle}>
        <div className={styles.dot}></div>
        <div className={styles.line}></div>
        <span className={styles.lineText}>safe.clinic это</span>
        <div className={styles.line}></div>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.icon} alt={card.alt} />
            <h3>
              {card.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>
            {isMobile ? (
              <div style={{ marginTop: '16px', fontSize: '16px', lineHeight: 1.4 }}>
                {card.description}
              </div>
            ) : (
              <p>{card.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
