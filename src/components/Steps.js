import React from 'react';
import './Steps.css';
import orbImage from '../assets/orb.png';

const StepCard = ({ title, description, className }) => (
  <div className={`step-box ${className}`}>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

function Steps() {
  return (
    <section className="steps-section" id="steps">
      <div className="steps-top-row">
        <div className="steps-headings">
          <h3>GET SAME DAY ONLINE</h3>
          <h2>Suboxone Treatment In 10 Minutes</h2>
        </div>
        <button className="steps-download-cta">Download The App Today</button>
      </div>

      <div className="steps-grid">
        <StepCard
          className="step1"
          title="Step 1 - Download The App"
          description="Click on the link to download our app and sign up."
        />
        <StepCard
          className="step2"
          title="Step 2 - Complete Onboarding Process & Documents"
          description="Provide medical history and sign treatment forms."
        />
        <div className="orb">
          <img src={orbImage} alt="Orb" />
        </div>
        <StepCard
          className="step3"
          title="Step 3 - Schedule Your First Visit"
          description="Our onboarding team will assist you to book your first meeting. Many times same day."
        />
        <StepCard
          className="step4"
          title="Step 4 - Meet With Licensed Provider"
          description="At the time of your appointment, open the app to talk to your provider."
        />
        <StepCard
          className="step5"
          title="Step 5 - Pick Up Medication"
          description="Your script will be sent to your pharmacy of choice for pick up the same day."
        />
      </div>
    </section>
  );
}

export default Steps;
