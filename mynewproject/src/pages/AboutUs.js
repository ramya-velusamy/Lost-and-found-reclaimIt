import React from 'react';
import '../component/Style.css'; // Ensure this handles about-us styling

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About ReclaimIt</h1>
      <p>
        <strong>ReclaimIt</strong> is a smart lost-and-found platform designed specifically for students and citizens to securely report and reclaim lost or found items. Whether it's a misplaced ID card or a found mobile phone, ReclaimIt bridges the gap between finder and owner.
      </p>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To build a digital ecosystem that reduces the stress of losing important belongings and boosts the chances of getting them back safely.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>✅ Easy-to-use forms to report lost and found items</li>
          <li>🔍 Smart matching system to suggest matches between found and lost items</li>
          <li>📍 Location-based tracking using city and region inputs</li>
          <li>💬 User feedback system for continuous improvement</li>
          <li>🛒 Community e-commerce area to list and buy goods</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Vision</h2>
        <p>
          To extend this solution to campuses, cities, and public transportation hubs where thousands of items are lost daily.
        </p>
      </section>

      <section className="about-section">
        <h2>Meet the Creator</h2>
        <p>
          <strong>Ramya V</strong> – A passionate developer and student at Dr. N.G.P. Institute of Technology, working to build practical solutions to everyday problems through software innovation.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
