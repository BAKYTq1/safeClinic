import React from 'react'
import "./Client.scss"
import img1 from "../../assets/image/image1.png"
import img31 from "../../assets/svg/31.svg"

function Client() {
    return (
        <div className='client'>
            <div className='client-content'>
                <h2>Профиль</h2>
                <div className='bishkek'>
                    <img src={img1} alt="" />
                    <div>
                        <h3>Айбек Жумакадыров</h3>
                        <p>Бишкек</p>
                    </div>
                </div>
                <button>
                    <img src={img31} alt="" />
                    <p>Редактировать</p>
                </button>
            </div>

            <div style={{ border: "1px dashed rgb(0, 0, 0)", marginTop: "2px", height: "0" }}></div>

            <div className='information'>
                <h4>Личная информация</h4>

                <div className='personal'>
                    <div className='information-card'>
                        <h3>ФИО: <p>Айбек Жумакадыров</p></h3>
                        <h3>Дата рождения: <p>20.09.1996</p></h3>
                        <h3>Email: <p>jordansteve@gmail.com </p></h3>
                    </div>

                    <div className='information-content'>
                        <h3>Телефон: <p>+996 500 391 234</p></h3>
                        <h3>Пол: <p>Мужской</p></h3>
                        <h3>Адрес: <p>Бишкек Токтогул 76</p></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client
