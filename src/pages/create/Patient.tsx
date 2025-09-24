
// src/pages/create/Patient.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Patient.scss";
import img10 from "../../assets/svg/10.svg";
import img11 from "../../assets/svg/11.svg";
import { useCreatePatientStore } from "../../app/store/createPatient/CreatePatientStore"

interface Click {
  onClick?: () => void;
}

const Patient: React.FC<Click> = ({ onClick }) => {
  const addPatient = useCreatePatientStore(state => state.addPatient);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("+996");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [doctor, setDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [complaint, setComplaint] = useState("");

  const times: string[] = [
    "8:00–9:00","9:00–10:00","10:00–11:00","11:00–12:00",
    "12:00–13:00","13:00–14:00","14:00–15:00","15:00–16:00",
    "16:00–17:00","17:00–18:00"
  ];

  const handleTimeClick = (time: string) => setAppointmentTime(time);
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value.replace(/[^\d+]/g, ""));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!fullName || !phone || !birthDate || !address || !gender) {
      alert("Заполните все обязательные поля!");
      return;
    }

    await addPatient({
      full_name: fullName,
      phone,
      birth_date: birthDate,
      address,
      gender: gender as "male" | "female",
      complaints: complaint
    });

    alert("Пациент успешно создан!");
    onClick?.();
  };

  return (
    <div className="patient">
      <div className="patient__header">
        <h2>Создать пациента</h2>
      </div>
      <form className="patient-form" onSubmit={handleSubmit}>
        <div className="patient-form__row">
          <div className="patient-form__group">
            <label>ФИО*</label>
            <input
              type="text"
              placeholder="Фамилия Имя Отчество"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="patient-form__group">
            <label>Телефон*</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
        </div>

        <div className="patient-form__row">
          <div className="patient-form__group">
            <label>Дата рождения*</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </div>
          <div className="patient-form__group">
            <label>Адрес*</label>
            <input
              type="text"
              placeholder="г. Бишкек, ул. ..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="patient-form__row">
          <div className="patient-form__group">
            <label>Пол*</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Выберите пол</option>
              <option value="female">Женский</option>
              <option value="male">Мужской</option>
            </select>
          </div>

          <div className="patient-form__group"> 
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

        <div className="patient-form__row">
          <div className="patient-form__group">
            <label>Дата записи*</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </div>
          <div className="patient-form__group">
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

        <div className="patient-form__group">
          <label>Жалобы*</label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Опишите жалобу"
          />
        </div>

        <div className="time-selection">
          <label>Выберите свободное время:</label>
          <div className="time-selection__list">
            {times.map((time) => (
              <button
                key={time}
                type="button"
                className={`time-selection__btn ${appointmentTime === time ? "active" : ""}`}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn_cancel" onClick={onClick}>
            <img src={img10} alt="отмена" />
            <p>Отмена</p>
          </button>

          <button type="submit" className="btn_save">
            <img src={img11} alt="сохранить" />
            <p>Сохранить</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Patient;
