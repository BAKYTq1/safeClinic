import React from 'react'
import "./Header.scss"
import svg31 from "../../assets/svg/31.svg"
import svg32 from "../../assets/svg/32.svg"
import { useNavigate } from 'react-router-dom'

function Header() {
  // const navigate = useNavigate()
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

      </div>
    </div>
  )
}

export default Header
