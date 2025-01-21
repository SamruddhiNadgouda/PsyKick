import React, { useState } from 'react';
import Header from './components/Header';
import Questionnare from './components/Questionnare';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';
import './App.css';
import Dashboard from './components/Dashboard';
import ContactForm from './components/ContactForm';

const App = () => {
  const questions = [
    { question: 'How often do you exercise?', options: ['Daily', 'Weekly', 'Rarely', 'Never'] },
    { question: 'Do you follow a balanced diet?', options: ['Yes', 'No'] },
    { question: 'How much water do you drink daily?', options: ['<1L', '1-2L', '2-3L', '>3L'] },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionSelect = (option) => {
    console.log('Selected:', option);
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="app">
      <Header />
      <Dashboard />
      <ContactForm />
      {/* <ProgressBar current={currentQuestion + 1} total={questions.length} />
      <Questionnare
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onOptionSelect={handleOptionSelect}
      />
      <Footer
        onNext={handleNext}
        onPrevious={handlePrevious}
        isLast={currentQuestion === questions.length - 1}
      /> */}
    </div>
  );
};

export default App;
