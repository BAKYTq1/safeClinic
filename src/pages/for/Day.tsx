import React from 'react';
import "./Day.scss";
import img24 from "../../assets/svg/24.svg";
import img25 from "../../assets/svg/25.svg";
import img26 from "../../assets/svg/26.svg";
import img27 from "../../assets/svg/27.svg";
import img28 from "../../assets/svg/28.svg";

const Day: React.FC = () => {

    const generateTimePairs = (): string[][] => {
        const pairs: string[][] = [];
        for (let hour = 9; hour <= 19; hour++) {
            pairs.push([`${hour}:00`, `${hour}:30`]);
        }
        return pairs;
    };

    const renderAppointment = () => (
        <div className='for-time'>
            <div className='card'>
                <img src={img28} alt="" />
                <div className='text'>
                    <p>12:00-13:00</p>
                    <h3>Кудуретов Асан</h3>
                </div>
            </div>
            <img className='img' src={img27} alt="" />

        </div>
    );

    return (
        <div className='for'>
           
            <div className='number'>
                <img src={img25} alt="left" />
                <p>11-Январь 2024</p>
                <img src={img26} alt="right" />
            </div>

            <div className='for-main'>
                <div className='time-list'>
                    {generateTimePairs().map(([t1, t2]) => (
                        <div className='time-row' key={t1}>
                            <p>{t1}</p>
                            <p>{t2}</p>
                        </div>
                    ))}
                </div>

                <div className='for-content'>
                    {Array.from({ length: 11 }).map((_, index) => (
                        <div key={index}>
                            {index === 3 ? renderAppointment() : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Day;
