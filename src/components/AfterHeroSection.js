import React from 'react';
import './AfterHeroSection.css';
import video from '../assets/video.jpg'; 

function AfterHeroSection() {
  const StatBox = ({ value, label }) => {
    return (
      <div className="stat-box">
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    );
  };

  return (
    <section className="after-hero-section">
      {/* ========== TOP SECTION ==========  */}
      <div className="after-hero-top">
        <div className="after-hero-container">
          <div className="after-hero-row top-row">
            <div className="left-col">
              <h2 className="heading-large">Breaking Barriers to Recovery</h2>
              <p className="paragraph">
                Our mission is to make Medication Assisted Treatment accessible
                to people in both major cities and rural communities. We’re deeply
                committed to removing obstacles to recovery, ensuring our clients
                get the support they need.
              </p>
            </div>

            <div className="right-col">
              <p className="paragraph">
                We’re not just offering a service; we’re creating a lifeline. Our 
                platform is designed to eliminate the challenges that often stand 
                in the way of recovery—whether it’s stigma, inconvenience, or lack 
                of access to quality care.
              </p>

              <div className="stats-row">
                <StatBox value="500+" label="Patients Treated" />
                <StatBox value="300+" label="Centers Nationwide" />
                <StatBox value="4.9/5" label="Patients Satisfaction" />
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* BOTTOM SECTION  */}
      <div className="after-hero-bottom">
        <div className="after-hero-container">
          <div className="after-hero-row bottom-row">
            <div className="text-col">
              <h4 className="heading-small">WELCOME TO RECOVERY DELIVERED</h4>
              <h2 className="heading-medium">
                Your Fully Online Suboxone Treatment Platform
              </h2>
              <p className="paragraph">
                100% online opioid treatment with licensed Buprenorphine providers
                starts at just $59/month. With monthly and weekly meetings based on
                where you are in your recovery. Get a same day appointment and script.
              </p>
            </div>

            <div className="video-col">
              <div className="video-wrapper">
                <img
                  src={video}
                  alt="Recovery Video"
                />
                <button className="play-button">&#9658;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AfterHeroSection;
