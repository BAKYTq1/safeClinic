import React from 'react'
import "./Header.scss"
import svg31 from "../../assets/svg/31.svg"
import svg32 from "../../assets/svg/32.svg"

function Header() {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-logos'>
          <img src={svg31} alt="" />
          <h3>safe.clinic</h3>
        </div>

        <div className='header-navs'>
          <ul>
            <li>О нас</li>
            <li>Услуги</li>
            <li>Врачи</li>
            <li>Наша клиника</li>
            <li>Контакт</li>
          </ul>

          <button>Запись онлайн</button>
        </div>

        <div className='header-img'>
          <img src={svg32} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Header
