import styles from "../sections/projects/ProjectsStyles.module.css";

function ProjectCard({ src, githubLink, liveSiteLink, title, project }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <>
        <img className="hover" src={src} alt={`${title} logo`} />
        <h3>{title}</h3>
        <p>{project}</p>
      </>
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          GitHub
        </a>

        <a
          href={liveSiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Live Site
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
