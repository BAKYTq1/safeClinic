import './ClientPayments.scss'

export function ClientPayments() { 
  type Payment = {
  date: string;
  time: string;
  service: string;
  price: string;
  paid: boolean;
};

const payments: Payment[] = [
  {
    date: '08.02.2024',
    time: '16:00',
    service: 'Чистка зубов',
    price: '2948 сом',
    paid: false,
  },
  {
    date: '08.02.2024',
    time: '16:00',
    service: 'Чистка зубов',
    price: '2948 сом',
    paid: true,
  },
  {
    date: '08.02.2024',
    time: '16:00',
    service: 'Чистка зубов',
    price: '2948 сом',
    paid: true,
  },
  {
    date: '08.02.2024',
    time: '16:00',
    service: 'Чистка зубов',
    price: '2948 сом',
    paid: true,
  },
  {
    date: '08.02.2024',
    time: '16:00',
    service: 'Чистка зубов',
    price: '2948 сом',
    paid: true,
  },
]; 

  return (
    <div className="client-payments">
      <h2 className="title">Мои оплаты</h2>
      <div className="scroll-area">
        {payments.map((payment, index) => (
          <div key={index}>
            <div className="date">{payment.date}</div>
            <div className="payment-card">
              <p className="status">
                {payment.paid ? 'Вы оплатили !' : 'Вы не оплатили !'}
              </p>
              <hr />
              <p><strong>Услуга:</strong> {payment.service}</p>
              <p><strong>Цена:</strong> {payment.price}</p>
              <div className="time">{payment.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
