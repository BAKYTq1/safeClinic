import React, { useState } from 'react'
import styles from './Consultation.module.scss'
import Consul from '../../assets/image/consul.png'

const Consultation: React.FC = () => {

    const [phone, setPhone] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    return (
        <div className={styles.background}>


            <div className="container">
                <div className={styles.consultation}>
                    <img src={Consul} alt="" />

                    <div className={styles.text}>
                        <h2>Запишись на бесплатную консультацию</h2>
                    </div>

                    <div className={styles.button}>
                        <h2>Введите ваш телефон</h2>
                        <input
                            type="tel"
                            placeholder="+996 ( ) "
                            value={phone}
                            onChange={handleChange}
                        />
                        <button>Записаться на приём</button>

                        <div className={styles.line}>
                            <h3>Или звоните по телефону</h3>
                            <p>+996 (915) 90 43 43</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consultation