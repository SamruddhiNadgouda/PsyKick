import React from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './Dashboard.css';
import AboutImg from '../assets/dashboard-pic2.jpeg';
import DashboardBox from './DashboardBox'; 
import ContactForm from './ContactForm';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container1">
        <h3>Discover your Depression Level and Wellness Performance Score</h3>
        <p>
          If you care about your overall mental health and wellness and want a better understanding of your
          strengths and weaknesses, then this is a great place to know about your mental health.
        </p>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          style={{ backgroundColor: '#004d40', color: '#ffff', position: 'relative', zIndex: '2' }}
        >
          View Scorecard
        </Button>
      </div>

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

      <div className="dashboard-container3">
        <h1>"Health is a state of body. Wellness is a state of being"</h1>
        <p>- J Stanford.</p>
        <Button
          variant="contained"
          style={{ backgroundColor: '#7ed321', color: 'white', fontWeight: 'bold', position: 'relative', zIndex: '2' }}
        >
          Start the Quiz
        </Button>
      </div>

      <div className="dashboard-container4">
        <h1>How We Can Help</h1>
        <p>
          We provide free mental health support and psychological counseling to all those
          who need it. You can call or WhatsApp from anywhere in India at any hour of the day or night.
        </p>
        <div className='help-content'>
          <div>
            <DashboardBox />
            <DashboardBox />
          </div>
          <div>
            <DashboardBox />
            <DashboardBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
