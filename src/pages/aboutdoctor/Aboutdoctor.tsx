// AboutDoctor.tsx
import React from 'react';
import styles from './AboutDoctor.module.scss';

interface AboutDoctorProps {
    onClose: () => void;
}

const AboutDoctor: React.FC<AboutDoctorProps> = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>Информация о враче</div>

                    <div className={styles.modalInfo}>

                        <img
                            src="https://via.placeholder.com/80"
                            alt="Доктор"
                            className={styles.avatar}
                        />
                        <p><strong>Алиса Керимова</strong></p>
                    </div>
                <div className={styles.modalBody}>

                    <div className={styles.infoGrid}>
                        <p><span className={styles.label}>Дата рождения:</span> 20.09.1996</p>
                        <p><span className={styles.label}>Пол:</span> Женский</p>
                        <p><span className={styles.label}>Теги:</span> Хирург-ортопед</p>
                        <p><span className={styles.label}>Адрес:</span> Бишкек Токтогул 76</p>
                        <p><span className={styles.label}>Email:</span> jordansteve@gmail.com</p>
                        <p><span className={styles.label}>Телефон:</span> +996 501 393 173</p>
                    </div>
                </div>

                <div className={styles.footer}>
                    <button onClick={onClose} className={styles.cancelButton}>
                        ✖ Отмена
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutDoctor;
