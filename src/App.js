import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import Header from './components/Header';
import './App.css';
import Dashboard from './components/Dashboard';
import QuizPage from './components/QuizPage';  // If you want to add the QuizPage component

const App = () => {
  return (
    <Router>  {/* Wrap your app inside BrowserRouter */}
      <div className="app">
        <Header />
        <Dashboard />
        {/* Add routes for your components if needed */}
      </div>
    </Router>
  );
};

export default App;
