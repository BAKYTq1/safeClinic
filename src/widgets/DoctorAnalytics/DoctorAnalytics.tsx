import React from 'react';
// import { AiOutlineRise } from 'react-icons/ai';
// import { MdOutlineStarRate } from 'react-icons/md'; 
import Analytics1 from '../../assets/svg/Analytics1.svg';
import Analytics2 from '../../assets/svg/Analytics2.svg';
import Analytics3 from '../../assets/svg/Analytics3.svg';
import Analytics4 from '../../assets/svg/Analytics4.svg';
import Analytics5 from '../../assets/svg/Analytics5.svg';
import styles from './DoctorAnalytics.module.scss';

const days: string[] = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
const visits: number[] = [90, 60, 75, 70, 50, 85, 20];
const revenue: number[] = [85, 60, 70, 75, 65, 80, 25];

const DoctorAnalytics: React.FC = () => {
  return (
    <div className={styles["doctor-analytics"]}>
      <div className={styles["summary-section"]}>
        <div className={styles["summary-card"]}>
          <div className={styles["summary-top"]}>
            <div className={styles["summary-title"]}>$205,890</div>
            {/* <img src={Analytics1} alt="Analytics1" className="summary-img" /> */}
          </div>
          <div className={styles["summary-sub"]}>Общий объем</div>
          <div className={styles["summary-bottom"]}>
            {/* <div className="icon"><AiOutlineRise /></div> */}
            <div className={styles["summary-change up"]}>На 1.3% больше, чем на прошлой неделе</div>
          </div>
        </div>

        <div className={styles["summary-card"]}>
          <div className={styles["summary-top"]}>
            <div className={styles["summary-title"]}>183098</div>
            <img src={Analytics2} alt="Analytics2" className={styles["summary-img"]} />
          </div>
          <div className="summary-sub">Всего клиентов</div>
          <div className="summary-bottom">
            {/* <div className="icon"><AiOutlineRise /></div> */}
            <div className="summary-change up">На 1.3% больше, чем на прошлой неделе</div>
          </div>
        </div>

        <div className={styles["summary-card"]}>
          <div className={styles["summary-top"]}>
            <div className={styles["summary-top-left"]}>
              <h3 className={styles["card3-title"]}>Рейтинги</h3>
              <p className={styles["card3-year"]}>2024 год</p>
              <div className={styles["summary-title"]}>8.14k</div>
            </div>
            <img
              src={Analytics3}
              alt="Analytics3"
              className={`${styles["summary-img"]} ${styles["summary-3"]}`}
            />
          </div>
          <div className="summary-sub3">Отзыв</div>
          <div className="summary-bottom">
            {/* <div className="icon-3"><MdOutlineStarRate /></div> */}
            <div className="summary-change down">4.5+15.6% по сравнению с предыдущим периодом</div>
          </div>
        </div>
      </div>

      <div className={styles["chart-card"]}>
        <div className={styles["chart-header"]}>
          <div className={`${styles["chart-icon"]} ${styles["blue"]}`}>
            <img src={Analytics4} alt="Analytics4" className={styles["chart-icon1"]} />
          </div>
          <div className={styles["chart-info"]}>
            <div className={styles["chart-title"]}>Посещения по дням</div>
            <div className={styles["chart-value"]}>1,992</div>
          </div>
        </div>
        <div className={styles["chart-bars"]}>
          {visits.map((value, index) => (
            <div className={styles["chart-bar"]} key={index}>
              <div className={styles["bar-bg"]}>
                <div
                  className={`${styles["bar-fill"]} ${styles["blue"]}`}
                  style={{ height: `${value}%` }}
                />
              </div>
              <div className={styles["bar-day"]}>{days[index]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles["chart-card"]}>
        <div className={styles["chart-header"]}>
          <div className={`${styles["chart-icon"]} ${styles["pink"]}`}>
            <img src={Analytics5} alt="Analytics5" className={styles["chart-icon2"]} />
          </div>
          <div className={styles["chart-info"]}>
            <div className={styles["chart-title1"]}>Прибыль</div>
            <div className={styles["chart-value"]}>$638.9k</div>
          </div>
        </div>
        <div className={styles["chart-bars"]}>
          {revenue.map((value, index) => (
            <div className={styles["chart-bar"]} key={index}>
              <div className={styles["bar-bg"]}>
                <div
                  className={`${styles["bar-fill"]} ${styles["pink"]}`}
                  style={{ height: `${value}%` }}
                />
              </div>
              <div className={styles["bar-day"]}>{days[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorAnalytics;
