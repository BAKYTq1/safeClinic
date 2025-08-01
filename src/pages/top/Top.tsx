import React from 'react';
import './Top.scss';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';

const Top: React.FC = () => {
  return (
    <div className="top"> 
      <div className="search-box">
        <FaFilter className="icon filter" />
        <input type="text" placeholder="Поиск" />
        <FaSearch className="icon search" />
      </div>
      <div className="actions">
        <div className="notification">
          <IoIosNotifications />
          <span className="dot" />
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Top;
