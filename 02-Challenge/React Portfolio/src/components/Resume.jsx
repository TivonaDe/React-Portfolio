import React from 'react';
import './Resume.css'; // Optional: Import a CSS file for styling

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
          <h4>Web Developer</h4>
          <p>Company Name | Duration</p>
          <ul>
            <li>Developed responsive web applications using React and Node.js.</li>
            <li>Collaborated with cross-functional teams to design and implement new features.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h4>Software Engineer Intern</h4>
          <p>Company Name | Duration</p>
          <ul>
            <li>Assisted in building API endpoints for a scalable web application.</li>
            <li>Wrote unit tests to ensure code quality and reliability.</li>
          </ul>
        </div>

        <h3>Education</h3>
        <p>
          <strong>University Name</strong> — Degree Earned <br />
          Relevant Coursework: Web Development, Data Structures, Algorithms
        </p>
      </div>
    </section>
  );
};

export default Resume;
