// import React from 'react'
import React, { useState } from "react";
import "./Header.scss"
import svg31 from "../../assets/svg/31.svg"
import svg32 from "../../assets/svg/32.svg"
import headerImg from "../../assets/svg/header.svg"
import ProfileModal from "../../widgets/ProfileModal/ProfileModal"


  
  // import { useNavigate } from 'react-router-dom'
  
  function Header() {
    // const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-logos'>
          <img src={svg31} alt="" />
          <h3>safe.clinic</h3>
        </div>

        <div className='header-navs'>
          <ul>
            <a href='#about'>О нас</a>
            <a href='#services'>Услуги</a>
            <a href='#doctors'>Врачи</a>
            <a href='#clinics'>Наша клиника</a>
            <a href='#contacts'>Контакт</a>
          </ul>
          <button>Запись онлайн</button>
        </div>

        <div className='header-img'>
          <img src={svg32} alt="" />
        </div>

        <div className="header-i" onClick={() => setIsModalOpen(true)}>
          <img src={headerImg} alt="Профиль" />
        </div>
        {isModalOpen && <ProfileModal onClose={() => setIsModalOpen(false)} />}

      </div>
    </div>
  );
};
export default Header
