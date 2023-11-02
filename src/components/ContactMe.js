import React from 'react';
import './ContactMe.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>&nbsp;</p>
      
      <p>If you'd like to get in touch with me, you can reach out through the following channels:</p>
      <p>&nbsp;</p>
      
      <ul>
        <li>Linkedin: <a href="https://www.linkedin.com/in/shubh-richhariya-64b130245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li>Github: <a href="https://github.com/S-Richhariya" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li>Email: <a href="mailto:shubhrichhariya21@gmail.com">shubhrichhariya21@gmail.com</a></li>
      </ul>
    </section>
  );
};

export default Contact;
