import React from 'react';
import Navbar from '../component/Navbar';
import HeroSection from '../component/HeroSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
       <section className="home-welcome">
        <h2>Welcome to ReclaimIt</h2>
        <p>Helping students and citizens reconnect with their lost belongings efficiently and securely.</p>
      </section>

      <section className="home-actions">
        <div className="home-card">
          <h3>Lost Something?</h3>
          <p>Post your lost item with details and we’ll help track it down!</p>
          <a href="/lost" className="action-btn">Report Lost Item</a>
        </div>
        <div className="home-card">
          <h3>Found Something?</h3>
          <p>Submit details of found items to return them to their rightful owners.</p>
          <a href="/found" className="action-btn">Post Found Item</a>
        </div>
        <div className="home-card">
          <h3>Browse Listings</h3>
          <p>Explore all lost & found items posted by our community.</p>
          <a href="/claimed" className="action-btn">View Lost & Found</a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
