import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer'>
      <div className='grid-container'>
        <div className='footer-item'>
          <h3>Category </h3>
          <p>Explore a wide range of exciting games in our collection. From action-packed adventures to brain-teasing puzzles, we have something for every gamer.</p>
        </div>

        <div className='footer-item'>
          <h3>About</h3>
          <p>Welcome to Game City, your ultimate destination for gaming entertainment. Our mission is to provide gamers of all ages with a platform to explore, enjoy, and connect through the world of games.</p>
        </div>

        <div className='footer-item'>
        
          <div>
      <h3>Contact Us</h3>
      
      <div className="contact-details">
        <p><strong>Email:</strong> info@gamecity.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
      </div>

      <p>You can also connect with us on our social media channels for updates, announcements, and more:</p>

      <div className="social-media">
        <a href="https://twitter.com/GameCity" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://facebook.com/GameCity" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://instagram.com/GameCity" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
      </div>

      
    </div>



        </div>
      </div>
    </div>
  );
}

export default Footer;
