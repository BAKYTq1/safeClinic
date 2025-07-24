import React, { useState } from 'react';
import "./Calendar.scss";
import img24 from "../../assets/svg/24.svg";
import img25 from "../../assets/svg/25.svg";
import img26 from "../../assets/svg/26.svg";
import Day from '../for/Day';
import Month from '../calendar/Month';
import img27 from "../../assets/svg/27.svg";
import img28 from "../../assets/svg/28.svg";
import img29 from "../../assets/svg/29.svg";
import img30 from "../../assets/svg/30.svg";

const Calendar: React.FC = () => {
    const options = ["На месяц", "На неделя", "На день"];
    const [selected, setSelected] = useState("На неделя");
    const [open, setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<string | null>(null);

    const generateTimePairs = (): string[][] => {
        const pairs: string[][] = [];
        for (let hour = 9; hour <= 19; hour++) {
            pairs.push([`${hour}:00`, `${hour}:30`]);
        }
        return pairs;
    };

    const appointmentTimes = [
        "09:00-10:00", "10:00-11:00", "11:00-12:00", "12:30-13:30",
        "13:00-14:00", "13:30-14:30", "14:00-15:00", "15:00-16:00",
        "16:00-17:00", "17:00-18:00", "18:00-19:00",
    ];

    return (
        <div className='calendar'>
            <div className='calendar-header'>
                <h2>Календарь</h2>
                <div className="calendar-options">
                    <p>{selected}</p>
                    <div className="menu-icon" onClick={() => setOpen(!open)}>
                        <img src={img24} alt="menu icon" width={20} height={20} />
                    </div>
                    {open && (
                        <div className="dropdown-menu">
                            {options.map((opt) => (
                                <div key={opt} onClick={() => {
                                    setSelected(opt);
                                    setOpen(false);
                                }}>
                                    {opt}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {selected === "На неделя" && (
                <>
                    <div className='number'>
                        <img src={img25} alt="left" />
                        <p>11-16-Январь 2024</p>
                        <img src={img26} alt="right" />
                    </div>

                    <div className='week'>
                        <p>ПН</p><p>ВТ</p><p>СР</p><p>ЧТ</p><p>ПТ</p><p>СБ</p>
                    </div>

                    <div className='calendar-main'>
                        <div className='time-list'>
                            {generateTimePairs().map(([t1, t2]) => (
                                <div className='time-row' key={t1}>
                                    <p>{t1}</p>
                                    <p>{t2}</p>
                                </div>
                            ))}
                        </div>

                        <div className='patient-time'>
                            {appointmentTimes.map((time, index) => (
                                <div key={index}>
                                    {[0, 1, 2].map((cardIdx) => {
                                        const uniqueId = `${index}-${cardIdx}`;
                                        return (
                                            <React.Fragment key={uniqueId}>
                                                {index % 2 === 0 ? (
                                                    <>
                                                        <div className='patient-cards'>
                                                            <img className='img' src={img27} alt=""
                                                                onClick={() => setSelectedCard(uniqueId)}
                                                            />
                                                            <div className='content'>
                                                                <img src={img28} alt="" />
                                                                <div className='text'>
                                                                    <h3>{time}</h3>
                                                                    <p>Кудуретов Асан</p>
                                                                </div>
                                                            </div>
                                                            {selectedCard === uniqueId && (
                                                                <div className='popup'>
                                                                    <button onClick={() => alert("Смотреть clicked")}>
                                                                        <img src={img29} alt="" /> Смотреть
                                                                    </button>
                                                                    <button onClick={() => setSelectedCard(null)}>
                                                                        <img src={img30} alt="" /> Отменить
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className='empty'></div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className='empty'></div>
                                                        <div className='patient-cards'>
                                                            <img className='img' src={img27} alt=""
                                                                onClick={() => setSelectedCard(uniqueId)}
                                                            />
                                                            <div className='content'>
                                                                <img src={img28} alt="" />
                                                                <div className='text'>
                                                                    <h3>{time}</h3>
                                                                    <p>Кудуретов Асан</p>
                                                                </div>
                                                            </div>
                                                            {selectedCard === uniqueId && (
                                                                <div className='popup'>
                                                                    <button onClick={() => alert("Смотреть clicked")}>
                                                                        <img src={img29} alt="" /> Смотреть
                                                                    </button>
                                                                    <button onClick={() => setSelectedCard(null)}>
                                                                        <img src={img30} alt="" /> Отменить
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </>
                                                )}
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {selected === "На день" && <Day />}
            {selected === "На месяц" && <Month />}
        </div>
    );
};

export default Calendar;
