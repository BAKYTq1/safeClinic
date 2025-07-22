import React, { useState, useEffect, ChangeEvent } from 'react';
import "./DoctorEditing.scss";
import img10 from "../../assets/svg/10.svg";
import img11 from "../../assets/svg/11.svg";

type Doctor = {
    id: number;
    name: string;
    username: string;
    email: string;
    tag: string;
    clients: number;
    avatar: string;
    gender?: string;
    phone?: string;
    dob?: string;
    address?: string;
};

type Props = {
    doctor: Doctor;
    onClose: () => void;
};

const DoctorEditing: React.FC<Props> = ({ doctor, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tag: '',
        phone: '',
        dob: '',
        address: '',
        gender: 'female',
        avatar: '',
    });

    useEffect(() => {
        setFormData({
            name: doctor.name || '',
            email: doctor.email || '',
            tag: doctor.tag || '',
            phone: doctor.phone || '',
            dob: doctor.dob || '',
            address: doctor.address || '',
            gender: doctor.gender || 'female',
            avatar: doctor.avatar || '',
        });
    }, [doctor]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const onlyNumbers = e.target.value.replace(/[^\d+]/g, "");
        setFormData(prev => ({ ...prev, phone: onlyNumbers }));
    };

    const handleOverlayClick = () => {
        onClose();
    };

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className='doctorEditing-overlay' onClick={handleOverlayClick}>
            <div className='doctorEditing' onClick={handleModalClick}>
                <div className='title'>
                    <h2>Редактировать врача</h2>
                </div>

                <div className='img'>
                    <img src={formData.avatar} alt={formData.name} />
                    <div className='i'>
                        <p>Изменить фото*</p>
                        <h6>Удалить фото</h6>
                    </div>
                </div>

                <form className="doctor-form" onSubmit={e => e.preventDefault()}>
                    <div className='inputs'>
                        <div>
                            <label>ФИО*</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Фамилия Имя Отчество"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label>Email*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@mail.com"
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label>Адрес*</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="г. Бишкек, ул. ... "
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='inputs'>
                        <div className='tags'>
                            <label>Теги*</label>
                            <select name="tag" value={formData.tag} onChange={handleChange} required>
                                <option value="Хирург-имплантолог">Хирург-имплантолог</option>
                                <option value="Стоматолог">Стоматолог</option>
                                <option value="Рентгенолог">Рентгенолог</option>
                                <option value="Педиатр">Педиатр</option>
                                <option value="Терапевт">Терапевт</option>
                                <option value="Хирург-ортопед">Хирург-ортопед</option>
                                <option value="Хирург">Хирург</option>
                            </select>
                        </div>

                        <div>
                            <label>Телефон*</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+996 501 393 173"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                inputMode="numeric"
                                required
                            />
                        </div>
                    </div>

                    <div className='gender'>
                        <label>Пол*</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="female">Женский</option>
                            <option value="male">Мужской</option>
                        </select>
                    </div>

                    <div className='buttons'>
                        <button type="button" className='cancel' onClick={onClose}>
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
        </div>
    );
};

export default DoctorEditing;
