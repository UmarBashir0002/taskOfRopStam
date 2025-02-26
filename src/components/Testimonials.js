import React from 'react';
import './Testimonials.css';
import img from '../assets/client.svg'

function Testimonials() {
  // Reusable data for testimonials
  const testimonialsData = [
    {
      rating: 5,
      text: "Recovery Delivered is great! I received my script the same day. The process was so easy and quick.",
      name: "Nicholas C.",
    },
    {
      rating: 5,
      text: "My daughter started her online opioid treatment here and the support has been amazing. Very affordable, too.",
      name: "Christine M.",
    },
    {
      rating: 5,
      text: "If you need help often, Get Online. Sign up. Pay the fees and never look back. It saved me so much time.",
      name: "Heather B.",
    },
  ];

  // Reusable Testimonial Card component
  const TestimonialCard = ({ rating, text, name }) => {
    return (
      <div className="testimonial-card">
        <div className="testimonial-stars">
          {Array(rating).fill(0).map((_, i) => (
            <span key={i}>&#9733;</span> 
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="testimonial-text">{text}</p>

        <div className="testimonial-author">
          <img src={img} alt={name} className="testimonial-avatar" />
          <span>{name}</span>
        </div>
      </div>
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h4 className="testimonials-subtitle">OUR CLIENT'S</h4>
        <h2 className="testimonials-title">Testimonials</h2>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
