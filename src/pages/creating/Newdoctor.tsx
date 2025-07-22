import React, { useState, ChangeEvent } from 'react';
import "./Newdoctor.scss";
import img9 from "../../assets/svg/9.svg";
import img10 from "../../assets/svg/10.svg";
import img11 from "../../assets/svg/11.svg";

const Newdoctor: React.FC = () => { 
  const [phone, setPhone] = useState<string>("");

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = e.target.value.replace(/[^\d+]/g, "");
    setPhone(onlyNumbers);
  };
  
  return (
    <div className='newdoctor'>
      <div className='title'>
        <h2>Создать нового врача</h2>
      </div>

      <div className='img'>
        <img src={img9} alt="аватар врача" />
        <p>Добавить фото*</p>
      </div>

      <form className="doctor-form">
        <div className='inputs'>
          <div>
            <label>ФИО*</label>
            <input
              type="text"
              name="fio"
              placeholder="Фамилия Имя Отчество"
              required
            />
          </div>

          <div>
            <label>Email*</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              required
            />
          </div>
        </div>

        <div className='inputs'>
          <div>
            <label>Дата рождения* </label>
            <input
              type="date"
              name="dob"
              className='date'
              required
            />
          </div>

          <div>
            <label>Адрес*</label>
            <input
              type="text"
              name="address"
              placeholder="г. Бишкек, ул. ... "
              required
            />
          </div>
        </div>

        <div className='inputs'>
          <div className='tags'>
            <label>Теги*</label>
            <select name="tags" required>
              <option value="хирург-имплантолог">Хирург-имплантолог</option>
              <option value="стоматолог">Стоматолог</option>
              <option value="рентгенолог">Рентгенолог</option>
              <option value="педиатр">Педиатр</option>
              <option value="педиатр">Терапевт</option>
              <option value="ортопед">Хирург-ортопед</option>
              <option value="хирург">Хирург</option>
            </select>
          </div>

          <div>
            <label>Телефон*</label>
            <input
              type="tel"
              name="phone"
              placeholder="+996..."
              value={phone}
              onChange={handlePhoneChange}
              inputMode="numeric"
              required
            />
          </div>
        </div>

        <div className='gender'>
          <label>Пол*</label>
          <select name="gender" required>
            <option value="female">Женский</option>
            <option value="male">Мужской</option>
          </select>
        </div>

        <div className='buttons'>
          <button type="button" className='cancel'>
            <img src={img10} alt="отмена" />
            <p>Отмена</p>
          </button>
          <button type="submit" className='save'>
            <img src={img11} alt="сохранить" />
            <p>Сохранить</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newdoctor;
