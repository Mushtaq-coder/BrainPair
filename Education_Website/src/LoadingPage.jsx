import React from 'react';
import { Link } from 'react-router-dom';
import person from './assets/person.png';
import Pic1 from './assets/Pic1.jpeg'; 
import Profile from './assets/Profile.jpg'
import match from './assets/match.png'
import friends from './assets/friends.png'
import study from './assets/study.jpg'
import AI from './assets/AI.jpg'
import chat from './assets/chat.png'
import rate from './assets/rate.jpg'
import help from './assets/help.jpg'
function LoadingPage() {
  return (
    <div className="loading-page">
      <div className="top-section">
      <nav className="navbar">
        <div className="logo">BrainPair</div>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/Help">Help</Link>
          <Link to="/login">Login</Link>
          <Link to="/register" className="LoadingRegister-btn">Register</Link>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-text">
          <h1>Find the Perfect<br /> study Partner!</h1>
          <p>Match with students based on <br />your interests & goal.</p>
          <Link to="/register">
            <button className="get-started">Get Started</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src={Pic1} alt = "Students Studying" />
        </div>
      </section>
      </div>
      <section className="info-section">
        <h2>How It Works</h2>
        <div className = "info-grid">
          <div>
            <img src={Profile} alt ="profile"/>
            <h3>Create a Profile</h3>
          </div>
          <div>
            <img src={match} alt ="Match"/>
            <h3>Get Matched</h3>
          </div>
          <div>
            <img src={friends} alt ="Freinds"/>
            <h3>Make Friends</h3>
          </div>
          <div>
            <img src={study} alt ="study"/>
            <h3>Start Studying</h3>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h2>Why Choose BrainPair</h2>
        <div className="info-grid">
          <div>
            <img src={AI} alt="AI Matching"/>
            <h3>AI MAtching</h3>
            <p>Smart algorithms that connect students.</p>
          </div>
          <div>
            <img src={chat} alt="chat"/>
            <h3>Chat Instantly</h3>
            <p>Connect with your mathc in real-time.</p>
          </div>
          <div>
            <img src={rate} alt="rate"/>
            <h3>Rate Your Connection</h3>
            <p>Leave reviews to find reliable partner.</p>
          </div>
          <div>
            <img src={help} alt="help"/>
            <h3>Help & Support</h3>
            <p>Seamless experince, hassle-free support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoadingPage;
