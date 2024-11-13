import Project from './Project';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: 'project1.jpg', deployedLink: '#', repoLink: '#' },
    { title: 'Project 2', image: 'project2.jpg', deployedLink: '#', repoLink: '#' },
    // Add more projects here
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;
