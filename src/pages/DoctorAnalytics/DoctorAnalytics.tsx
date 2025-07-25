import React from 'react';
import { AiOutlineRise } from 'react-icons/ai';
import { MdOutlineStarRate } from 'react-icons/md'; 
import Analytics1 from '../../assets/svg/Analytics1.svg';
import Analytics2 from '../../assets/svg/Analytics2.svg';
import Analytics3 from '../../assets/svg/Analytics3.svg';
import Analytics4 from '../../assets/svg/Analytics4.svg';
import Analytics5 from '../../assets/svg/Analytics5.svg';
import './DoctorAnalytics.scss';

const days: string[] = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
const visits: number[] = [90, 60, 75, 70, 50, 85, 20];
const revenue: number[] = [85, 60, 70, 75, 65, 80, 25];

const DoctorAnalytics: React.FC = () => {
  return (
    <div className="doctor-analytics">
      <div className="summary-section">
        <div className="summary-card">
          <div className="summary-top">
            <div className="summary-title">$205,890</div>
            <img src={Analytics1} alt="Analytics1" className="summary-img" />
          </div>
          <div className="summary-sub">Общий объем</div>
          <div className="summary-bottom">
            <div className="icon"><AiOutlineRise /></div>
            <div className="summary-change up">На 1.3% больше, чем на прошлой неделе</div>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-top">
            <div className="summary-title">183098</div>
            <img src={Analytics2} alt="Analytics2" className="summary-img" />
          </div>
          <div className="summary-sub">Всего клиентов</div>
          <div className="summary-bottom">
            <div className="icon"><AiOutlineRise /></div>
            <div className="summary-change up">На 1.3% больше, чем на прошлой неделе</div>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-top">
            <div className="summary-top-left">
              <h3 className="card3-title">Рейтинги</h3>
              <p className="card3-year">2024 год</p>
              <div className="summary-title">8.14k</div>
            </div>
            <img src={Analytics3} alt="Analytics3" className="summary-img summary-3" />
          </div>
          <div className="summary-sub3">Отзыв</div>
          <div className="summary-bottom">
            <div className="icon-3"><MdOutlineStarRate /></div>
            <div className="summary-change down">4.5+15.6% по сравнению с предыдущим периодом</div>
          </div>
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <div className="chart-icon blue"> 
            <img src={Analytics4} alt="Analytics4" className='chart-icon1' />
          </div>
          <div className="chart-info">
            <div className="chart-title">Посещения по дням</div>
            <div className="chart-value">1,992</div>
          </div>
        </div>
        <div className="chart-bars">
          {visits.map((value: number, index: number) => (
            <div className="chart-bar" key={index}>
              <div className="bar-bg">
                <div className="bar-fill blue" style={{ height: `${value}%` }} />
              </div>
              <div className="bar-day">{days[index]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <div className="chart-icon pink"> 
            <img src={Analytics5} alt="Analytics5" className='chart-icon2' />
          </div>
          <div className="chart-info">
            <div className="chart-title1">Прибыль</div>
            <div className="chart-value">$638.9k</div>
          </div>
        </div>
        <div className="chart-bars">
          {revenue.map((value: number, index: number) => (
            <div className="chart-bar" key={index}>
              <div className="bar-bg">
                <div className="bar-fill pink" style={{ height: `${value}%` }} />
              </div>
              <div className="bar-day">{days[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorAnalytics;
