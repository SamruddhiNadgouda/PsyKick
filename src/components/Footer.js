import React from 'react';
// import './Footer.css';

const Footer = ({ onNext, onPrevious, isLast }) => {
  return (
    <div className="footer">
      <button onClick={onPrevious} disabled={!onPrevious}>
        Previous
      </button>
      <button onClick={onNext}>{isLast ? 'Submit' : 'Next'}</button>
    </div>
  );
};

export default Footer;
