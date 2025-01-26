import React from 'react';
import './Box.css';

const DashboardBox = ({ imgSrc, title, description }) => {
  return (
    <div className="box">
      <img src={imgSrc} alt="box" className="box-image" />
      <div className="box-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DashboardBox;
