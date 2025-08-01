import styles from './OurNews.module.scss'
import OurNews1 from '../../assets/svg/OurNews1.svg'
import OurNews2 from '../../assets/svg/OurNews2.svg'

export function OurNews() {
  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши новости</h2>
        <div className={styles.newsRow}>
          <div className={styles.newsItemSmall}>
            <div className={styles.imageWrapper}>
              <img src={OurNews1} alt="Работа в праздники" />
              <div className={styles.overlayText}>
                <p className={styles.heading}>Работа в праздники</p>
                <p className={styles.date}>10.12.2021</p>
                <p className={styles.desc}>
                  Мы работаем по 31 декабря. С 1 января по 2 у нас выходные дни.
                  С 3 января у нас возобновляется работа в обычном режиме.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.newsItemMain}>
            <div className={styles.imageWrapper}>
              <img src={OurNews2} alt="Новая акция" />
              <div className={styles.overlayText}>
                <p className={styles.heading}>Новая акция</p>
                <p className={styles.date}>15.12.2021</p>
                <p className={styles.desc}>
                  С 3 по 27 января действуют скидки на коронки из металло-керамики.
                  На каждую вторую скидка 10 %.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.newsItemSmall} ${styles.hideOnMobile}`}>
            <div className={styles.imageWrapper}>
              <img src={OurNews1} alt="Награда за помощь" />
              <div className={styles.overlayText}>
                <p className={styles.heading}>Награда за помощь</p>
                <p className={styles.date}>15.12.2021</p>
                <p className={styles.desc}>
                  Мэрия города Нижнего Новгорода отметила наш вклад в помощь людям
                  с ограниченными возможностями дипломом и медалью “Забота 2021”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
