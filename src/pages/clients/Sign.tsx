import React, { useState, ChangeEvent } from "react";
import "./Sign.scss";
import img31 from "../../assets/svg/31.svg"

const Sign: React.FC = () => {
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
        <div className="sign">
            <div className="sign__header">
                <div> <img src={img31} alt="" />
                    <p>safe.clinic</p>
                </div>
                <h2>Записаться</h2>
            </div>
            <form className="sign-form">
                <div className="sign-form__row">
                    <div className="sign-form__group">
                        <label>ФИО*</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Фамилия Имя Отчество"
                            required
                        />
                    </div>
                    <div className="sign-form__group">
                        <label>Телефон*</label>
                        <input
                            type="tel"
                            value={phone}
                            required
                            onChange={handlePhoneChange}
                        />
                    </div>
                </div>

                <div className="sign-form__row">
                    <div className="sign-form__group">
                        <label>Запись к врачу*</label>
                        <select name="doctor" required>
                            <option value="">Выберите врача</option>
                            <option value="Алиса Каримова">Алиса Каримова</option>
                            <option value="Кубат Камчыбеков">Кубат Камчыбеков</option>
                            <option value="Айбек Жумакадыров">Айбек Жумакадыров</option>
                            <option value="Баку Каримова">Баку Каримова</option>
                        </select>
                    </div>

                    <div className="sign-form__group">
                        <label>Адрес*</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="г. Бишкек, ул. ..."
                            required
                        />
                    </div>
                </div>

                <div className="sign-form__row">
                    <div className="sign-form__group">
                        <label>Дата записи*</label>
                        <input
                            type="date"
                            name="appointmentDate"
                            required
                        />
                    </div>

                    <div className="sign-form__group">
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

                <div className="sign-form__group">
                    <label>Жалоба*</label>
                    <textarea
                        name="complaint"
                        placeholder="Написать жалобу"
                        required
                    />
                </div>

                <div className="time-selection">

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

                <button className="btn">Записаться</button>

                <div className="sign-form__footer">
                    <p>Нет учётной записи? </p>
                    <p style={{color: "rgb(84, 84, 228)", cursor:"pointer"}}>Зарегистрироваться</p>
                </div>
            </form>
        </div>
    );
};

export default Sign;
