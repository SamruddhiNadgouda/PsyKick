import React from 'react';
// import './QuestionCard.css';

const Questionnare = ({ question, options, onOptionSelect }) => {
  return (
    <div className="question-card">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className="option"
            onClick={() => onOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questionnare;
