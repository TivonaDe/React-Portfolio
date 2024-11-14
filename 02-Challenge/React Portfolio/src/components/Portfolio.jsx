import Project from './Project';

const Portfolio = () => {
  const projects = [
    { title: 'Node Challenge', video: 'https://youtu.be/GCD9XlhzwOE', deployedLink: 'https://effective-capybara-wrrxrxp6pjq4hv4x6.github.dev/', repoLink: 'https://github.com/TivonaDe/Node-Challenege.git' },
    { title: 'Project 2', video: 'https://drive.google.com/file/d/1EJkXI56SKqm2vNRFIgjRVd1HTDalDLE-/view', deployedLink: 'https://redesigned-palm-tree-4jj6j654564wf79w7.github.dev/', repoLink: 'https://github.com/TivonaDe/vehicle-builder.git' },
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
