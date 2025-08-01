import React, { useState } from 'react';
import styles from './ServiceList.module.scss';
import ServiceList1 from '../../assets/svg/ServiceList1.svg';
import ServiceList2 from '../../assets/svg/ServiceList2.svg';
import ServiceList3 from '../../assets/svg/ServiceList3.svg';
import ServiceList4 from '../../assets/svg/ServiceList4.svg';
import ServiceList5 from '../../assets/svg/ServiceList5.svg';
import { ServiceModal } from '../ServiceModal/ServiseModal';
// import { MdDelete } from 'react-icons/md';
// import { FiEdit3 } from 'react-icons/fi';

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Выравнивание зубов без брекета',
    description: 'Если брекеты вам не подходят, можно выровнять зубы без брекетов с помощью кап-элайнеров....',
    price: '5500 с',
    image: ServiceList1,
  },
  {
    id: 2,
    name: 'Ортодонтия',
    description: 'Корректируем неправильный прикус и расположение зубов с помощью брекетов...',
    price: '5500 с',
    image: ServiceList2,
  },
  {
    id: 3,
    name: 'Реставрация',
    description: 'Устанавливаем импланты и натуральные коронки на пустое место зубного ряда....',
    price: '5500 с',
    image: ServiceList3,
  },
  {
    id: 4,
    name: 'Имплантация протезирование',
    description: 'Восстанавливаем анатомическую форму зубов и придаем ей натуральный цвет...',
    price: '5500 с',
    image: ServiceList4,
  },
  {
    id: 5,
    name: 'Хирургия',
    description: 'Удаляем зубы и инородные образования, занимаемся пластикой уздечек губ и языка при рассечении...',
    price: '5500 с',
    image: ServiceList5,
  },
];

export const ServiceList: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className={styles['service-list']}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className={styles['name-service']}>Название услуги</th>
            <th className={styles['description-service']}>Описание</th>
            <th className={styles['price-service']}>Стоимость</th>
            <th className={styles['action-service']}>Действия</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>
                <img
                  src={service.image}
                  alt={service.name}
                  className={styles['service-image']}
                />
              </td>
              <td
                className={styles['service-name']}
                onClick={() => setSelectedService(service)}
              >
                <span className={styles['link-style']}>{service.name}</span>
              </td>
              <td className={styles['service-description']}>
                {service.description}
              </td>
              <td className={styles['service-price']}>{service.price}</td>
              <td className={styles['service-actions']}>
                {/* <MdDelete className={`${styles.icon} ${styles.delete}`} />
                <FiEdit3 className={`${styles.icon} ${styles.edit}`} /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}; 
