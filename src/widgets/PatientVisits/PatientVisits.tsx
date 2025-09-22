
import React, { useState } from "react";
import styles from "./PatientVisits.module.scss";

interface PatientVisitsProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDate: (date: string) => void;
  currentDate?: string;
}

const months = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

const PatientVisits: React.FC<PatientVisitsProps> = ({
  isOpen,
  onClose,
  onSelectDate,
  currentDate,
}) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(
    currentDate ? new Date(currentDate) : today
  );
  const [viewDate, setViewDate] = useState<Date>(today);

  if (!isOpen) return null;

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay(); 
  const offset = startDay === 0 ? 6 : startDay - 1;

 const handleOk = () => {
  const year = selectedDate.getFullYear();
  const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0"); // месяц от 0 до 11
  const day = selectedDate.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  onSelectDate(formattedDate);
  onClose();
};


  const handlePrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span>{year}</span>
          <h3>
            {days[selectedDate.getDay() === 0 ? 6 : selectedDate.getDay() - 1]},
            {" "}
            {months[selectedDate.getMonth()]} {selectedDate.getDate()}
          </h3>
        </div>

        <div className={styles.nav}>
          <button onClick={handlePrevMonth}>{"<"}</button>
          <span>{months[month]} {year}</span>
          <button onClick={handleNextMonth}>{">"}</button>
        </div>

        <div className={styles.calendar}>
          {days.map((d) => (
            <div key={d} className={styles.dayName}>{d}</div>
          ))}
          {Array(offset).fill(null).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {Array(daysInMonth).fill(null).map((_, i) => {
            const date = new Date(year, month, i + 1);
            const isSelected =
              date.toDateString() === selectedDate.toDateString();
            return (
              <div
                key={i}
                className={`${styles.day} ${isSelected ? styles.selected : ""}`}
                onClick={() => setSelectedDate(date)}
              >
                {i + 1}
              </div>
            );
          })}
        </div>

        <div className={styles.actions}>
          <button onClick={onClose} className={styles.cancel}>ОТМЕНА</button>
          <button onClick={handleOk} className={styles.ok}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default PatientVisits;
