import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/aboutme">About Me</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      
    </nav>
  );
};

export default Navigation;
