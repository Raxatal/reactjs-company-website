import React, { useState, useEffect } from 'react';
import logo from './Assets/logov2.png';
import './Header.css';
import musicIcon from "./Assets/musicIcon.png";
import stopIcon from "./Assets/stopIcon.png";
import playIcon from "./Assets/playIcon.png";
import pageMusic from "./Assets/TimeToLove.mp3";

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState(null);

  useEffect(() => {
    const audio = document.getElementById('background-music');
    setAudioElement(audio);
  }, []);

  const toggleMusic = () => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.volume = 0.1; // Adjust the volume as needed (0.5 for 50% volume)
        audioElement.play().catch(error => {
          // Handle play error, e.g., autoplay policy
          console.error('Error playing audio:', error.message);
        });
      }
  
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="header-content">
          <div className="logo-search-container">
            <img src={logo} className="App-logo" alt="logo" />
            {/* Move the search bar here */}
          </div>
          <form className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
          </form>
          <nav>
            <ul className="nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#bestsellers">Best Sellers</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#aboutus">About Us</a></li>
            </ul>
          </nav>
          {/* Music Section */}
          <div className="music-section">
        <img src={musicIcon} alt="Music Icon" className="music-icon" />
        <button onClick={toggleMusic} className="music-button">
          <img src={isPlaying ? stopIcon : playIcon} alt={isPlaying ? "Stop" : "Play"} />
        </button>
        <p>Ichiban Music</p>
        <audio id="background-music" loop>
          {/* Provide the source URL of your music file */}
          <source src={pageMusic} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  )
}

export default Header