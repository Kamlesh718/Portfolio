import { motion } from "framer-motion";
import styles from "../projects/ProjectsStyles.module.css";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Experience() {
  return (
    <motion.section
      id="projects"
      className={styles.container}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h1 className="sectionTitle" variants={item}>
        Experience
      </motion.h1>

      <motion.h2 variants={item}>
        Software Developer Intern (FrontEnd)
      </motion.h2>

      <motion.h3 variants={item}>Nablasol - Remote</motion.h3>

      <motion.p variants={item}>Oct 2024 – Apr 2025</motion.p>
    </motion.section>
  );
}

export default Experience;
