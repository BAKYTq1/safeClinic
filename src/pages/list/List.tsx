import React, { useState } from 'react';
import "./List.scss";
import img from "../../assets/svg/clinic.svg";
import img9 from "../../assets/svg/8.svg";
import { Link } from 'react-router-dom';

interface MenuItem {
  title: string;
  icon: string;
  link: string
}

const List: React.FC = ({title}: MenuItem) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className='list'>
      <div className='container'>
        <div className='listContainer'>
          <img src={img} alt="" />
          <p>Все условия для вашей безопасности</p>
        </div>

        <div className='card-container'>
          {title.map((item, index) => (
           <Link to={`${item.link}`}  key={index}> <button
              key={index}
              className={activeIndex === index ? "active-btn" : ""}
              onClick={() => setActiveIndex(index)}>
              <img src={item.icon} alt={item.title} />
              <p>{item.title}</p>
            </button></Link>
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
