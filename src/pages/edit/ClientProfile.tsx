import React, { useState, ChangeEvent } from 'react';
import "./ClientProfile.scss";
import img10 from "../../assets/svg/10.svg";
import img11 from "../../assets/svg/11.svg";

const ClientProfile: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        dob: '',
        gender: 'female',
        email: '',
        address: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const onlyDigits = e.target.value.replace(/[^\d]/g, "");
        setFormData(prev => ({ ...prev, phone: onlyDigits }));
    };

    return (
        <div className='clientprofile'>
            <div className='div'>
                <h2>Редактировать врача</h2>
            </div>

            <div className='img'>
                <img />
                <div className='i'>
                    <p>Изменить фото*</p>
                    <h6>Удалить фото</h6>
                </div>
            </div>
            <form className="client-form" >
                <div className='inputs'>
                    <div>
                        <label>ФИО*</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Телефон*</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            inputMode="numeric"
                            required
                        />
                    </div>
                </div>

                <div className='inputs'>
                    <div>
                        <label>Дата рождения*</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='gender'>
                        <label>Пол*</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="female">Женский</option>
                            <option value="male">Мужской</option>
                        </select>
                    </div>
                </div>

                <div className='inputs'>
                    <div>
                        <label>Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Адрес*</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className='buttons'>
                    <button type="reset" className='cancel'>
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

export default ClientProfile;
