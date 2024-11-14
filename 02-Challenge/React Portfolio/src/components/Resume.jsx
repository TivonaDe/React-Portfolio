import React from 'react';
import './styles/Resume.css'; // Optional: Import a CSS file for styling

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        Download my <a href="your-resume.pdf" target="_blank" rel="noopener noreferrer">resume</a> to view my experience and skills.
      </p>

      <div className="resume-content">
        <h3>Proficiencies</h3>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>HTML/CSS</li>
          <li>Database Management (SQL, MongoDB)</li>
          <li>Version Control (Git)</li>
        </ul>

        <h3>Experience</h3>
        <div className="experience-item">
          <h4>HelpDesk</h4>
          <p>ADB Safegate | 6 months</p>
          <ul>
            <li>I configure and program and deploy devices on company  network.</li>
            <li>Collaborate with users to get resources needed for production to continue.</li>
            <li>Troubleshoot devices and schedule maitenance for devices.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h4>Field Technichain</h4>
          <p>Field Nation | 2yrs</p>
          <ul>
            <li>Provide a smart hands service for businesses in the Ohio area.</li>
            <li>Install servers, desktops, voip phones, pos systems, and other devices.</li>
            <li>Test devices and provide documentation for the client.</li>
          </ul>
        </div>

        <h3>Education</h3>
        <p>
          <strong>Ohio State University</strong> — In Progress <br />
          Relevant Coursework: Web Development, Data Structures, Algorithms
        </p>
      </div>
    </section>
  );
};

export default Resume;
