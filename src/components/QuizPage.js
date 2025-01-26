import React, { useState, useEffect } from "react";
import { questions } from './quiz-questions';
import { optionScores } from './option-score';
import Dashboard from "./Dashboard";
import './QuizPage.css';
import './Result.css';


const QuizPage = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);

  const goToDashboard = () => {
    setShowDashboard(true);
  };

  useEffect(() => {
    // Shuffle questions when the component loads
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []); // Only run on mount, hence empty dependency array

  const calculateResult = (answers) => {
    const totalScore = answers.reduce((acc, answer) => acc + optionScores[answer], 0);
    if (totalScore <= 3) return "Minimal or no depression";
    if (totalScore <= 6) return "Mild depression";
    if (totalScore <= 9) return "Moderate depression";
    if (totalScore <= 12) return "Moderately severe depression";
    return "Severe depression";
  };

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setProgress(((nextIndex + 1) / shuffledQuestions.length) * 100); // Calculate progress based on question index
    } else {
      setProgress(100);
      const result = calculateResult(updatedAnswers); // Ensure you use the updated answers for calculation
      setResult(result);
    }
  };

  // Avoid early return that might cause hooks to be conditionally called
  if (showDashboard) {
    return <Dashboard />;
  }

  if (result) {
    return (
      <div className="result-container">
        <h2>Quiz Completed!</h2>
        <p className="deprssion-level-score">
          Your Depression Level: <strong>{result}</strong>
        </p>
        <p className="result-messsage">
          Thank you for taking the quiz. Please consult a healthcare professional for personalized advice.
        </p>
        <button
          onClick={goToDashboard}
          className="render-bottom"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="question-count">
          Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
        </h2>
        <p className="question-container">
          {shuffledQuestions[currentQuestionIndex]?.question}
        </p>
        <div className="option-container">
          {shuffledQuestions[currentQuestionIndex]?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="options"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="progress-box">
        <div
          className="progress-inside"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizPage;
