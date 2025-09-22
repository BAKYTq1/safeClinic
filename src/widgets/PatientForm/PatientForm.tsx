import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import img10 from "../../assets/svg/10.svg";
import img11 from "../../assets/svg/11.svg";
import styles from "./PatientForm.module.scss";
import { Patient } from "../../app/store/patientEdit/PatientEdit";


interface PatientFormProps {
  initialData?: Patient;
  onCancel: () => void;
  onSave: (data: Patient) => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ initialData, onCancel, onSave }) => {
  const [form, setForm] = useState<Patient>(
    initialData || {
      id: Date.now(),
      full_name: "",
      gender: "",
      phone: "+996",
      birth_date: "",
      address: "",
      complaints: "",
    }
  );

  const [doctor, setDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const times: string[] = [
    "08:00-09:00","09:00-10:00","10:00-11:00","11:00-12:00",
    "12:00-13:00","13:00-14:00","14:00-15:00","15:00-16:00",
    "16:00-17:00","17:00-18:00"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeClick = (time: string) => setAppointmentTime(time);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.full_name || !form.phone || !form.birth_date || !form.address || !form.gender || !doctor || !appointmentDate || !appointmentTime) {
      alert("Заполните все обязательные поля!");
      return;
    }

    onSave({
      ...form,
      doctor,
      appointmentDate,
      appointmentTime
    });
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d+]/g, "");
    setForm(prev => ({ ...prev, phone: value }));
  };

  return (
    <div className={styles.patient}>
      <div className={styles.header}>
        <h2>{initialData ? "Редактировать пациента" : "Создать пациента"}</h2>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.group}>
            <label>ФИО*</label>
            <input
              type="text"
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder="Фамилия Имя Отчество"
              required
            />
          </div>

          <div className={styles.group}>
            <label>Телефон*</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.group}>
            <label>Дата рождения*</label>
            <input
              type="date"
              name="birth_date"
              value={form.birth_date}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.group}>
            <label>Адрес*</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="г. Бишкек, ул. ..."
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.group}>
            <label>Пол*</label>
            <select name="gender" value={form.gender} onChange={handleChange} required>
              <option value="">Выберите пол</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </div>

          <div className={styles.group}>
            <label>Запись к врачу*</label>
            <select value={doctor} onChange={(e) => setDoctor(e.target.value)} required>
              <option value="">Выберите врача</option>
              <option value="Алиса Каримова">Алиса Каримова</option>
              <option value="Кубат Камчыбеков">Кубат Камчыбеков</option>
              <option value="Айбек Жумакадыров">Айбек Жумакадыров</option>
              <option value="Баку Каримова">Баку Каримова</option>
            </select>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.group}>
            <label>Дата записи*</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </div>

          <div className={styles.group}>
            <label>Время*</label>
            <input
              type="text"
              value={appointmentTime}
              readOnly
              placeholder="Выберите время ниже"
              required
            />
          </div>
        </div>

        <div className={styles.group}>
          <label>Жалобы*</label>
          <textarea
            name="complaints"
            value={form.complaints}
            onChange={handleChange}
            placeholder="Опишите жалобу"
            required
          />
        </div>

        <div className={styles.timeselection}>
          <label>Выберите свободное время:</label>
          <div className={styles.timeselectionlist}>
            {times.map(time => (
              <button
                key={time}
                type="button"
                className={`${styles.timeselectionbtn} ${appointmentTime === time ? "active" : ""}`}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.btnCancel} onClick={onCancel}>
            <img src={img10} alt="отмена" />
            <p>Отмена</p>
          </button>
          <button type="submit" className={styles.btnSave}>
            <img src={img11} alt="сохранить" />
            <p>Сохранить</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
