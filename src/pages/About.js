import React from 'react';
import { FaCoffee, FaLeaf, FaGlobeAmericas, FaAward, FaHeart, FaShippingFast, FaHeadset } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-about">
        <div className="hero-content">
          <h1>Crafted by Brewchei</h1>
          <p>Passionately sourced. Expertly roasted. Brewed to inspire.</p>
        </div>
      </section>

      <div className="about-content">
        <section className="our-story">
          <div className="section-content">
            <h2>Our Story</h2>
            <p>
              Since 2023, Brewchei Coffee Roasters has been on a mission to bring the world’s finest coffees
              directly to your cup. We partner with growers we know by name, roast in small batches for peak
              flavor, and craft every blend with care so your daily ritual feels special.
            </p>
            <div className="story-highlights">
              <div className="highlight">
                <FaCoffee className="icon" />
                <h4>Single-Origin & Seasonal</h4>
                <p>Sourced from traceable farms and refreshed seasonally for peak character</p>
              </div>
              <div className="highlight">
                <FaLeaf className="icon" />
                <h4>Eco-Friendly</h4>
                <p>Committed to sustainable, ethical sourcing and reduced packaging waste</p>
              </div>
              <div className="highlight">
                <FaAward className="icon" />
                <h4>Expertly Roasted</h4>
                <p>Small-batch roasted for clarity, balance, and sweetness</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sustainability">
          <div className="section-content">
            <h2>Sustainability Commitment</h2>
            <div className="sustainability-grid">
              <div className="sustainability-item">
                <div className="sustainability-icon">
                  <FaLeaf />
                </div>
                <h3>Eco-Friendly Packaging</h3>
                <p>Compostable bags and recyclable labels keep our footprint light</p>
              </div>
              <div className="sustainability-item">
                <div className="sustainability-icon">
                  <FaGlobeAmericas />
                </div>
                <h3>Direct Trade</h3>
                <p>Long-term relationships, fair pay, and resilient farming practices</p>
              </div>
              <div className="sustainability-item">
                <div className="sustainability-icon">
                  <FaHeart />
                </div>
                <h3>Community Support</h3>
                <p>Investing in education and resources for coffee-growing communities</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="section-content">
            <h2>Get In Touch</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Visit Us</h3>
                <p>210 Roast Street<br />
                Santa Clara, CA 95050<br />
                United States</p>
                
                <h3>Contact Info</h3>
                <p>Email: surya@brewchei.com<br />
                Phone: 9063902001<br />
                Customer Service: 8AM - 6PM PT</p>
              </div>
              
              <div className="contact-features">
                <div className="feature">
                  <FaShippingFast className="feature-icon" />
                  <div>
                    <h4>Fast & Free Shipping</h4>
                    <p>On all orders over ₹4,000</p>
                  </div>
                </div>
                <div className="feature">
                  <FaHeadset className="feature-icon" />
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Dedicated customer service</p>
                  </div>
                </div>
                <div className="feature">
                  <FaAward className="feature-icon" />
                  <div>
                    <h4>Quality Guarantee</h4>
                    <p>100% satisfaction or your money back</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="newsletter">
          <div className="section-content">
            <h3>Join Our Coffee Club</h3>
            <p>Subscribe to our newsletter for exclusive offers, new arrivals, and brewing tips</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="email-input"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </section>
      </div>
      
      <style jsx>{`
        .hero-about {
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                    url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') 
                    no-repeat center center/cover;
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          margin-bottom: 3rem;
        }
        
        .hero-about h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        
        .hero-about p {
          font-size: 1.5rem;
          opacity: 0.9;
        }
        
        .section-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        section {
          padding: 5rem 0;
        }
        
        h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--primary-dark);
          font-size: 2.5rem;
          position: relative;
          padding-bottom: 1rem;
        }
        
        h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: var(--accent-color);
        }
        
        .story-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        
        .highlight {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .highlight:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .highlight .icon {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }
        
        .sustainability {
          background-color: #f9f5f0;
        }
        
        .sustainability-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .sustainability-item {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          transition: transform 0.3s ease;
        }
        
        .sustainability-item:hover {
          transform: translateY(-5px);
        }
        
        .sustainability-icon {
          width: 70px;
          height: 70px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.8rem;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }
        
        .contact-info h3, .contact-features h4 {
          color: var(--primary-dark);
          margin-bottom: 1rem;
        }
        
        .contact-info p {
          margin-bottom: 2rem;
          line-height: 1.8;
        }
        
        .feature {
          display: flex;
          align-items: flex-start;
          margin-bottom: 2rem;
        }
        
        .feature-icon {
          font-size: 1.5rem;
          color: var(--primary-color);
          margin-right: 1rem;
          margin-top: 0.3rem;
        }
        
        .newsletter {
          background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
          color: white;
          text-align: center;
          padding: 5rem 2rem;
        }
        
        .newsletter h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .newsletter p {
          max-width: 600px;
          margin: 0 auto 2rem;
          opacity: 0.9;
        }
        
        .newsletter-form {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .email-input {
          flex: 1;
          padding: 1rem;
          border: none;
          border-radius: var(--border-radius) 0 0 var(--border-radius);
          font-size: 1rem;
        }
        
        .newsletter .btn-primary {
          border-radius: 0 var(--border-radius) var(--border-radius) 0;
          padding: 0 2rem;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .hero-about h1 {
            font-size: 2.5rem;
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
          
          .email-input, .newsletter .btn-primary {
            border-radius: var(--border-radius);
            width: 100%;
          }
          
          .newsletter .btn-primary {
            margin-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
