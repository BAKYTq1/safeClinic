import './ClientBookings.scss';

type Booking = {
  date: string;
  time: string;
  service: string;
  doctor: string;
  comment: string;
};

const bookings: Booking[] = [
  {
    date: '08.02.2024',
    time: '16:00',
    service: 'Чистка зубов',
    doctor: 'Азамат Замиров',
    comment:
      'Повреждения зуба, воспаление десен, заболевания корневых каналов, а также проблемы с визгом или стиснанием зубов.',
  },
  {
    date: '08.02.2024',
    time: '16:00',
    service: 'Чистка зубов',
    doctor: 'Азамат Замиров',
    comment:
      'Повреждения зуба, воспаление десен, заболевания корневых каналов, а также проблемы с визгом или стиснанием зубов.',
  },
  {
    date: '08.02.2024',
    time: '16:00',
    service: 'Чистка зубов',
    doctor: 'Азамат Замиров',
    comment:
      'Повреждения зуба, воспаление десен, заболевания корневых каналов, а также проблемы с визгом или стиснанием зубов.',
  },
];

export function ClientBookings() {
  return (
    <div className="client-bookings">
      <h2 className="title">Мои записи</h2>
      {bookings.map((booking, index) => (
        <div key={index}>
          <div className="date">{booking.date}</div>
          <div className="booking-card">
            <p><strong>Услуга:</strong> {booking.service}</p>
            <p><strong>Доктор:</strong> {booking.doctor}</p>
            <p><strong>Комментарии:</strong> {booking.comment}</p>
            <div className="time">{booking.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
