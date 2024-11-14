import React from 'react';
import './AboutMe.css'; // Optional: Import a CSS file for styling

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <img 
          src="your-photo.jpg" 
          alt="Your Name" 
          className="about-me-photo" 
        />
        <p>
          Hi, I'm De vona, a passionate web developer with experience in building modern, responsive websites and applications. I specialize in HTML, React, JavaScript, CSS. 
        </p>
        <p>
          I love solving problems and creating efficient, scalable solutions. My journey in web development started with my interest in working with AI applications. When I'm not coding, you can find me watching movies, gardening, or playing video games.
        </p>
        <p>
          Feel free to explore my portfolio and reach out if you'd like to collaborate!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
