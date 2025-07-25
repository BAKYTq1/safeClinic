import React from 'react';
import "./Month.scss";
import img24 from "../../assets/svg/24.svg";
import img25 from "../../assets/svg/25.svg";
import img26 from "../../assets/svg/26.svg";

const Month: React.FC = () => {

    const totalRows = 5;
    const totalCols = 6;
    let number = 1;

    const renderComplexCell = (num: number) => (
        <div >
            <p>{num}</p>
            <div className='times'>
                <div>
                    <h2>15:30 чистка зубов</h2>
                    <h2>15:30 чистка зубов</h2>
                </div>
                <div>
                    <h2>15:30 чистка зубов</h2>
                    <h2>15:30 чистка зубов</h2>
                </div>
            </div>
        </div>
    );

    return (
        <div className='month'>
        
            <div className='number'>
                <img src={img25} alt="left" />
                <p>Январь 2024</p>
                <img src={img26} alt="right" />
            </div>

            <div className='week'>
                <p>ПН</p>
                <p>ВТ</p>
                <p>СР</p>
                <p>ЧТ</p>
                <p>ПТ</p>
                <p>СБ</p>
            </div>

            <div className='time'>
                {[...Array(totalRows)].map((_, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {[...Array(totalCols)].map((_, colIndex) => {
                            if (number > 30) return <div className="cell" key={colIndex}></div>;

                            const currentNumber = number++;

                            if (rowIndex === 0 && colIndex === 0) {
                                return (
                                    <div className="cell" key={colIndex}>
                                        {renderComplexCell(currentNumber)}
                                    </div>
                                );
                            }

                            if (rowIndex === 1 && colIndex === 1) {
                                return (
                                    <div className="cell" key={colIndex}>
                                        {renderComplexCell(currentNumber)}
                                    </div>
                                );
                            }

                            return (
                                <div className="cell" key={colIndex}>
                                    <p>{currentNumber}</p>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Month;