import React, { useState } from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './Dashboard.css';
import AboutImg from '../assets/dashboard-pic2.jpeg';
import DashboardBox from './DashboardBox';
import QuizPage from './QuizPage'; // QuizPage component
import ContactForm from './ContactForm';

const Dashboard = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  // Function to handle the quiz start
  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  // Display the quiz page if showQuiz is true
  if (showQuiz) {
    return <QuizPage />;
  }

  const boxes = [
    {
      imgSrc: '/assets/box-image/image1.jpg', // Replace with your actual image paths
      title: 'Free 24 X 7 X 365 Mental Health Support',
      description: 'Free mental health support service is available 24X7X365 days. Don’t hesitate to reach out to us. A single conversation may help you feel much better.',
    },
    {
      imgSrc: '/assets/box-image/image2.jpg',
      title: 'Find a Therapist Near You',
      description: 'Connect with licensed therapists in your area who can provide personalized support tailored to your needs.',
    },
    {
      imgSrc: '/assets/box-image/image3.jpg',
      title: 'Mental Health Awareness Programs',
      description: 'Participate in our mental health awareness programs to learn more about mental health and well-being.',
    },
    {
      imgSrc: '/assets/box-image/image4.jpg',
      title: 'Helpline for Immediate Assistance',
      description: 'Our helpline is always open for immediate assistance. Don’t wait to get the help you need.',
    },
  ];

  return (
    <>
      {/* Dashboard Welcome Section */}
      <div className="dashboard-container1">
        <h3>Discover your Depression Level and Wellness Performance Score</h3>
        <p>
          If you care about your overall mental health and wellness and want a better understanding of your
          strengths and weaknesses, then this is a great place to know about your mental health.
        </p>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          style={{ backgroundColor: '#004d40', color: '#fff', position: 'relative', zIndex: '2' }}
        >
          View Scorecard
        </Button>
      </div>

      {/* About Us Section */}
      <div className="dashboard-container2">
        <div className="content">
          <h2>About Us</h2>
          <p>
            This scorecard has been developed to quickly and painlessly produce a health
            and wellness score based on your answers. In under 3 minutes, you will generate
            a result with some actionable tips on how to improve.
          </p>
          <p>
            If you care about your overall health and wellness and want a better
            understanding of your strengths and weaknesses, then this is a great place to
            start your journey.
          </p>
          <ul>
            <li>✅ It takes just 3 minutes</li>
            <li>✅ It’s completely free</li>
            <li>✅ Receive customized results instantly</li>
          </ul>
        </div>
        <div className="image-section">
          <img src={AboutImg} alt="About-Image" />
        </div>
      </div>

      {/* Health and Wellness Quote Section */}
      <div className="dashboard-container3">
        <h1>"Health is a state of body. Wellness is a state of being"</h1>
        <p>- J Stanford.</p>
        <Button
          variant="contained"
          style={{ backgroundColor: '#7ed321', color: 'white', fontWeight: 'bold', position: 'relative', zIndex: '2' }}
          onClick={handleStartQuiz} // Handle quiz start
        >
          Start the Quiz
        </Button>
      </div>

      {/* How We Can Help Section */}
      <div className="dashboard-container4">
        <h1>How We Can Help</h1>
        <p>
          We provide free mental health support and psychological counseling to all those
          who need it. You can call or WhatsApp from anywhere in India at any hour of the day or night.
        </p>
        <div className="help-content">
          {boxes.map((box, index) => (
            <DashboardBox
              key={index}
              imgSrc={box.imgSrc}
              title={box.title}
              description={box.description}
            />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <ContactForm />
      </div>
    </>
  );
};

export default Dashboard;
