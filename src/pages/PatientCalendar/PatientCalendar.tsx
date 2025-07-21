import React, { useState } from 'react';
import './PatientCalendar.scss';

const months = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

const PatientCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [confirmedDay, setConfirmedDay] = useState<number | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const startIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const today = new Date();

  const changeMonth = (offset: number) => {
    const newDate = new Date(year, month + offset);
    setCurrentDate(newDate);
    setSelectedDay(null);
    setConfirmedDay(null);
  };

  const handleConfirm = () => {
    if (selectedDay) {
      setConfirmedDay(selectedDay);
    }
  };

  const renderCalendarDays = () => {
    const daysArray = Array(startIndex).fill(null).concat(
      [...Array(daysInMonth).keys()].map(i => i + 1)
    );

    return daysArray.map((day, index) => {
      if (day === null) {
        return <div key={index} className="emptyDay" />;
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
          className={`day ${isToday ? 'today' : ''} ${isClicked ? 'clicked' : ''} ${isConfirmed ? 'confirmed' : ''}`}
          onClick={() => setSelectedDay(day)}
        >
          {day}
        </div>
      );
    });
  };

  return (
    <div className="calendarContainer">
      <div className="header">
        <span>{year}</span>
        <h3>
  {
    selectedDay
      ? new Date(year, month, selectedDay).toLocaleDateString('ru-RU', { weekday: 'short' })
      : new Date().toLocaleDateString('ru-RU', { weekday: 'short' })
  }, {months[month].slice(0, 3)} {selectedDay || today.getDate()}
</h3>
      </div>

      <div className="monthNav">
        <button onClick={() => changeMonth(-1)}>‹</button>
        <span>{months[month]} {year}</span>
        <button onClick={() => changeMonth(1)}>›</button>
      </div>

      <div className="weekdays">
        {days.map((day, i) => (
          <div key={i}>{day}</div>
        ))}
      </div>

      <div className="daysGrid">{renderCalendarDays()}</div>

      <div className="footer">
        <button className="cancel" onClick={() => setSelectedDay(null)}>ОТМЕНА</button>
        <button className="ok" onClick={handleConfirm}>OK</button>
      </div>
    </div>
  );
};

export default PatientCalendar;
