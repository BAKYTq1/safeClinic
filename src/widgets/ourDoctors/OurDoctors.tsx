import { useRef, useState } from 'react';
import styles from './OurDoctors.module.scss';
import Doctor2 from '../../assets/svg/Doctor2.svg';
import Doctor3 from '../../assets/svg/Doctor3.svg';
import Doctor4 from '../../assets/svg/Doctor4.svg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaMale, FaFemale } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type Review = {
  user: string;
  gender: 'male' | 'female';
  text: string;
};

type Doctor = {
  id: number;
  name: string;
  position: string;
  experience: string;
  description: string;
  education: string;
  image: string;
  reviews: Review[];
};

const doctors: Doctor[] = [
  {
    id: 0,
    name: 'Самакаева Алина Викторовна',
    position: 'Врач стоматолог-терапевт',
    experience: 'Опыт работы 10 лет',
    description:
      'Постоянно повышаю свои знания. Использую в работе новейшие технологии и материалы. Главное качественное лечение и довольные клиенты.',
    education:
      'Чувашский государственный университет им. И.Н. Ульянова (стоматология) (2001 г.)',
    image: Doctor3,
    reviews: [
      {
        user: 'Неизвестный пациент',
        gender: 'female',
        text:
          'Была на приеме 12 декабря. Очень боюсь боли и стоматологий. Алина Викторовна ко мне отнеслась очень внимательно, успокоила и даже рассмешила. Работу выполнила очень качественно. Теперь буду ходить только к ней.',
      },
      {
        user: 'Галина',
        gender: 'female',
        text:
          'Прекрасный специалист. Все объяснила, лечение прошло без боли. Очень довольна результатом. Спасибо большое!',
      },
      {
        user: 'Светлана',
        gender: 'female',
        text:
          'Я раньше избегала стоматологов, но после визита к Алине Викторовне мое мнение изменилось. Очень профессионально, спокойно, все на высоком уровне. Огромная благодарность!',
      },
    ],
  },
  {
    id: 1,
    name: 'Дмитрий Иванов',
    position: 'Ортодонт',
    experience: 'Опыт: 8 лет',
    description: 'Занимается выравниванием зубов с использованием брекет-систем и капп. Индивидуальный подход к каждому пациенту.',
    education: 'МГМСУ им. А.И. Евдокимова',
    image: Doctor4,
    reviews: [
      { user: 'Анна', gender: 'female', text: 'Дмитрий профессионал своего дела. Брекеты установил безболезненно, и теперь результат радует меня каждый день!' },
      { user: 'Сергей', gender: 'male', text: 'Очень внимательный врач. Подобрал наиболее удобную схему лечения. Удивительно, как быстро пошел прогресс.' },
      { user: 'Алина', gender: 'female', text: 'Не ожидала такого уровня сервиса! Всё объяснил, показал. Поддерживал на каждом этапе лечения. Результат впечатляет.' },
    ],
  }, 
  {
    id: 2,
    name: 'Екатерина Смирнова',
    position: 'Терапевт',
    experience: 'Опыт: 5 лет',
    description: 'Специализируется на терапевтическом лечении зубов, включая кариес, пульпит и эстетическую реставрацию.',
    education: 'Первый МГМУ им. И.М. Сеченова',
    image: Doctor2,
    reviews: [
      { user: 'Мария', gender: 'female', text: 'Екатерина – замечательный специалист. Лечение прошло абсолютно безболезненно. Очень боялась, но врач развеяла все страхи.' },
      { user: 'Игорь', gender: 'male', text: 'Очень вежливая и заботливая. Починила мне сложный зуб, с которым другие врачи не справлялись. Спасибо!' },
      { user: 'Татьяна', gender: 'female', text: 'После лечения у Екатерины я перестала бояться стоматологов. Профессиональный и добрый врач.' },
    ],
  },
  {
    id: 3,
    name: 'Алексей Кузнецов',
    position: 'Хирург',
    experience: 'Опыт: 10 лет',
    description: 'Проводит удаление зубов любой сложности, а также установку имплантов. Использует современные методы обезболивания.',
    education: 'СПбГМУ им. акад. И.П. Павлова',
    image: Doctor3,
    reviews: [
      { user: 'Ольга', gender: 'female', text: 'Удаление прошло легко и безболезненно. Алексей очень уверенный и спокойный врач. Чувствовала себя в надёжных руках.' },
      { user: 'Роман', gender: 'male', text: 'Профессионал с большой буквы. Всё объяснил перед процедурой, удаление прошло быстро. Теперь не боюсь хирургов!' },
      { user: 'Жанна', gender: 'female', text: 'У меня был очень сложный случай. Алексей справился просто идеально. После операции — ни боли, ни отеков. Благодарю!' },
    ],
  },
  {
    id: 4,
    name: 'Марина Алексеева',
    position: 'Ортопед',
    experience: 'Опыт: 7 лет',
    description: 'Специализируется на восстановлении зубов, установке коронок и протезировании. Индивидуальный подход к каждому пациенту.',
    education: 'УралГМУ',
    image: Doctor4,
    reviews: [
      { user: 'Владимир', gender: 'male', text: 'Марина помогла мне вернуть красивую улыбку. Очень чуткий врач. Протезы идеально подошли. Рекомендую всем.' },
      { user: 'Елена', gender: 'female', text: 'Потрясающий специалист. Всё сделала качественно, без спешки. Я довольна результатом на 100%!' },
      { user: 'Ирина', gender: 'female', text: 'Очень боялась протезирования, но Марина всё объяснила и провела лечение максимально деликатно. Большое спасибо!' },
    ],
  },
];

export function OurDoctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(doctors[0]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const reviewPrevRef = useRef(null);
  const reviewNextRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Наши врачи</h2>
          <h3>Квалифицированные стоматологи</h3>
          <p>Помогут сохранить и вернуть здоровье вашим зубам</p>
        </div>

        <div className={styles.doctorCarouselBlock}>
          <button ref={prevRef} className={styles.arrow}>
            <FaChevronLeft />
          </button>

          <Swiper
            spaceBetween={16}
            slidesPerView={4}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Navigation]}
            className={styles.swiper}
          >
            {doctors.map((doc) => (
              <SwiperSlide key={doc.id}>
                <div
                  className={`${styles.card} ${
                    doc.id === selectedDoctor.id ? styles.selected : ''
                  }`}
                  onClick={() => setSelectedDoctor(doc)}
                >
                  <img src={doc.image} alt={doc.name} />
                  <p className={styles.role}>{doc.position}</p>
                  <p className={styles.name}>{doc.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button ref={nextRef} className={styles.arrow}>
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.details}>
          <img src={selectedDoctor.image} alt={selectedDoctor.name} className={styles.largeImg} />
          <div className={styles.info}>
            <h4>{selectedDoctor.name}</h4>
            <p className={styles.position}>{selectedDoctor.position}</p>
            <p className={styles.experience}>{selectedDoctor.experience}</p>
            <button>Записаться к врачу</button>
            <p className={styles.description}>{selectedDoctor.description}</p>
            <p className={styles.education}>{selectedDoctor.education}</p>
          </div>
        </div>

        <div className={styles.reviews}>
          <h5>Отзывы</h5>

          <div className={styles.reviewNav}>
            <button ref={reviewPrevRef} className={styles.arrow}><FaChevronLeft /></button>

            <Swiper
              navigation={{
                prevEl: reviewPrevRef.current,
                nextEl: reviewNextRef.current,
              }}
              onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = reviewPrevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = reviewNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              modules={[Navigation]}
              slidesPerView={1}
            >
              {selectedDoctor.reviews.map((review, idx) => (
                <SwiperSlide key={idx}>
                  <div className={styles.reviewCard}>
                    <div className={styles.reviewHeader}>
                      {review.gender === 'female' ? <FaFemale className={styles.reviewIcon} /> : <FaMale className={styles.reviewIcon} />}
                      <p className={styles.reviewer}>{review.user}</p>
                    </div>
                    <p>{review.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button ref={reviewNextRef} className={styles.arrow}><FaChevronRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
}