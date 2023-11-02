import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-box">
        <h3>Hard Skills</h3>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>Java</li>
          <li>Python</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Photoshop</li>
          <li>Designing</li>
        </ul>
      </div>

      <div className="skill-box">
        <h3>Soft Skills</h3>
        <ul>
          <li>Observation</li>
          <li>Leadership</li>
          <li>Communication</li>
          <li>Creative Thinking</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

