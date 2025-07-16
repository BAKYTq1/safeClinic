import React, { useState } from 'react';
import "./List.scss";
import img from "../../assets/svg/clinic.svg";
import img2 from "../../assets/svg/1.svg";
import img3 from "../../assets/svg/2.svg";
import img4 from "../../assets/svg/3.svg";
import img5 from "../../assets/svg/4.svg";
import img6 from "../../assets/svg/5.svg";
import img7 from "../../assets/svg/6.svg";
import img8 from "../../assets/svg/7.svg";
import img9 from "../../assets/svg/8.svg";

interface MenuItem {
  title: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { title: "Аналитика", icon: img2 },
  { title: "Услуги", icon: img3 },
  { title: "Список врачей", icon: img4 },
  { title: "Список пациентов", icon: img5 },
  { title: "Филиалы", icon: img6 },
  { title: "Уведомление", icon: img7 },
  { title: "Настройка", icon: img8 },
];

const List: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className='list'>
      <div className='container'>
        <div className='listContainer'>
          <img src={img} alt="" />
          <p>Все условия для вашей безопасности</p>
        </div>

        <div className='card-container'>
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={activeIndex === index ? "active-btn" : ""}
              onClick={() => setActiveIndex(index)}>
              <img src={item.icon} alt={item.title} />
              <p>{item.title}</p>
            </button>
          ))}
        </div>

        <div className='btn'>
            <img src={img9} alt="" />
            <p>Выход</p>
        </div>
      </div>
    </div>
  );
};

export default List;
