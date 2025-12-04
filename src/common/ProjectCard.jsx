import { motion } from "framer-motion";
import styles from "../sections/projects/ProjectsStyles.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProjectCard({ src, githubLink, liveSiteLink, title, project }) {
  return (
    <motion.div
      className={styles.cardWrapper}
      variants={cardVariants}
      // whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <img className="hover" src={src} alt={`${title} logo`} />
      <h3>{title}</h3>
      <p>{project}</p>

      <div className={styles.buttonRow}>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Github
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
    </motion.div>
  );
}

export default ProjectCard;
