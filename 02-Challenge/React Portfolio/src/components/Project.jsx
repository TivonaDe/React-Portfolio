const Project = ({ title, image, deployedLink, repoLink }) => {
    return (
      <div>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>
          <a href={deployedLink} target="_blank">Live App</a> | 
          <a href={repoLink} target="_blank">GitHub Repo</a>
        </p>
      </div>
    );
  };
  
  export default Project;
  