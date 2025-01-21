import React from 'react';
// import './ProgressBar.css';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-filled"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
