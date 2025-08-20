// import React from 'react'
import React, { useState } from "react";
import "./Header.scss"
import svg31 from "../../assets/svg/31.svg"
import svg32 from "../../assets/svg/32.svg"
import headerImg from "../../assets/svg/header.svg"
import ProfileModal from "../../widgets/ProfileModal/ProfileModal"
import header1 from "../../assets/svg/header1.svg"
import header2 from "../../assets/svg/header2.svg"
import header3 from "../../assets/svg/header3.svg"
import header4 from "../../assets/svg/header4.svg"
import header5 from "../../assets/svg/header5.svg"



// import { useNavigate } from 'react-router-dom'

function Header() {
  // const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

        <div className="header-i" onClick={() => setIsModalOpen(true)}>
          <img src={headerImg} alt="Профиль" />
        </div>
        {isModalOpen && <ProfileModal onClose={() => setIsModalOpen(false)} />}
        <div className="header-img" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={svg32} alt="burger" />
        </div>

        {menuOpen && (
          <div className={`header-menu ${menuOpen ? "active" : ""}`}>
            <div className="header-menu-i">
              <div className="menu-item">
                <img className="header1" src={header1} alt="header 1" />
                <p>О нас</p>
              </div>
              <div className="menu-item">
                <img className="header1"  src={header2} alt="header 2" />
                <p>Услуги</p>
              </div>
              <div className="menu-item">
                <img className="header1"  src={header3} alt="header 3" />
                <p>Врачи</p>
              </div>
              <div className="menu-item">
                <img className="header1"  src={header4} alt="header 4" />
                <p>Наша клиника</p>
              </div>
              <div className="menu-item">
                <img className="header1"  src={header5} alt="header 5" />
                <p>Контакт</p>
              </div>
            </div>
          </div>

        )}


      </div>
    </div>
  );
};
export default Header
