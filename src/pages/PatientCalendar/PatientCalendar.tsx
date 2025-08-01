import React, { useState } from 'react';
import styles from './PatientCalendar.module.scss';

const months: string[] = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const days: string[] = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

export const PatientCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [confirmedDay, setConfirmedDay] = useState<number | null>(null);

  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth();
  const daysInMonth: number = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth: number = new Date(year, month, 1).getDay();
  const startIndex: number = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const today: Date = new Date();

  const changeMonth = (offset: number): void => {
    const newDate = new Date(year, month + offset);
    setCurrentDate(newDate);
    setSelectedDay(null);
    setConfirmedDay(null);
  };

  const handleConfirm = (): void => {
    if (selectedDay !== null) {
      setConfirmedDay(selectedDay);
    }
  };

  const renderCalendarDays = (): React.ReactNode[] => {
    const daysArray = Array(startIndex).fill(null).concat(
      Array.from({ length: daysInMonth }, (_, i) => i + 1)
    );

    return daysArray.map((day, index) => {
      if (day === null) {
        return <div key={index} className={styles.emptyDay} />;
      }

      const isToday =
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();

      const isConfirmed = day === confirmedDay;
      const isClicked = day === selectedDay;

      return (
        <div
          key={index}
          className={`${styles.day} ${isToday ? styles.today : ''} ${isClicked ? styles.clicked : ''} ${isConfirmed ? styles.confirmed : ''}`}
          onClick={() => setSelectedDay(day)}
        >
          {day}
        </div>
      );
    });
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <span>{year}</span>
        <h3>
          {
            selectedDay
              ? new Date(year, month, selectedDay).toLocaleDateString('ru-RU', { weekday: 'short' })
              : today.toLocaleDateString('ru-RU', { weekday: 'short' })
          }, {months[month].slice(0, 3)} {selectedDay || today.getDate()}
        </h3>
      </div>

      <div className={styles.monthNav}>
        <button onClick={() => changeMonth(-1)}>‹</button>
        <span>{months[month]} {year}</span>
        <button onClick={() => changeMonth(1)}>›</button>
      </div>

      <div className={styles.weekdays}>
        {days.map((day, i) => (
          <div key={i}>{day}</div>
        ))}
      </div>

      <div className={styles.daysGrid}>{renderCalendarDays()}</div>

      <div className={styles.footer}>
        <button className={styles.cancel} onClick={() => setSelectedDay(null)}>ОТМЕНА</button>
        <button className={styles.ok} onClick={handleConfirm}>OK</button>
      </div>
    </div>
  );
};
