import React, { useState, ChangeEvent } from "react";
import "./Patient.scss";
import img10 from "../../assets/svg/10.svg";
import img11 from "../../assets/svg/11.svg";

const Patient: React.FC = () => {
    const [appointmentTime, setAppointmentTime] = useState("");
    const [phone, setPhone] = useState("+996");
    const times: string[] = [
        "8:00–9:00", "9:00–10:00", "10:00–11:00",
        "11:00–12:00", "12:00–13:00", "13:00–14:00",
        "14:00–15:00", "15:00–16:00", "16:00–17:00",
        "17:00–18:00"
    ];

    const handleTimeClick = (time: string) => {
        setAppointmentTime(time);
    };

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const cleaned = e.target.value.replace(/[^\d+]/g, "");
        setPhone(cleaned);
    };

    return (
        <div className="patient">
            <div className="patient__header">
                <h2>Создать пациента</h2>
            </div>
            <form className="patient-form">
                <div className="patient-form__row">
                    <div className="patient-form__group">
                        <label>ФИО*</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Фамилия Имя Отчество"
                            required
                        />
                    </div>

                    <div className="patient-form__group">
                        <label>Телефон*</label>
                        <input
                            type="tel"
                            value={phone}
                            required
                            onChange={handlePhoneChange}
                        />
                    </div>
                </div>

                <div className="patient-form__row">
                    <div className="patient-form__group">
                        <label>Дата рождения*</label>
                        <input
                            type="date"
                            name="dob"
                            required
                        />
                    </div>

                    <div className="patient-form__group">
                        <label>Адрес*</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="г. Бишкек, ул. ..."
                            required
                        />
                    </div>
                </div>

                <div className="patient-form__row">
                    <div className="patient-form__group">
                        <label>Пол*</label>
                        <select name="gender" required>
                            <option value="">Выберите пол</option>
                            <option value="female">Женский</option>
                            <option value="male">Мужской</option>
                        </select>
                    </div>

                    <div className="patient-form__group">
                        <label>Запись к врачу*</label>
                        <select name="doctor" required>
                            <option value="">Выберите врача</option>
                            <option value="Алиса Каримова">Алиса Каримова</option>
                            <option value="Кубат Камчыбеков">Кубат Камчыбеков</option>
                            <option value="Айбек Жумакадыров">Айбек Жумакадыров</option>
                            <option value="Баку Каримова">Баку Каримова</option>
                            <option value="Алиса Каримова">Алиса Каримова</option>
                        </select>
                    </div>
                </div>

                <div className="patient-form__row">
                    <div className="patient-form__group">
                        <label>Дата записи*</label>
                        <input
                            type="date"
                            name="appointmentDate"
                            required
                        />
                    </div>

                    <div className="patient-form__group">
                        <label>Время*</label>
                        <input
                            type="text"
                            name="appointmentTime"
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
                        name="complaint"
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
                    <button type="button" className="btn_cancel">
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



