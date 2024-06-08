function ProjectCard({ src, link, title, project }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${title} logo`} />
      <h3>{title}</h3>
      <p>{project}</p>
    </a>
  );
}

export default ProjectCard;
