import React from 'react'
import './style.scss'
import img11 from '../../assets/svg/11.svg';
interface ButtonProps {
    children: React.ReactNode
  onClick?: () => void
}

function Button({children, onClick}:ButtonProps ) {
  return (
    <div>
      <button className='item-head-btn' onClick={onClick}>
                    <img src={img11} alt="" />
                    <p>{children}</p>
                </button>
    </div>
  )
}

export default Button
