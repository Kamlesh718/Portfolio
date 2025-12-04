import { motion } from "framer-motion";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Logo.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  // smooth animation presets
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="hero" className={styles.container}>
      <motion.div
        className={styles.colorModeContainer}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Kamlesh Vishwakarma"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        />

        <motion.img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      {/* Smooth animated info section */}
      <motion.div
        className={styles.info}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={item}>
          Kamlesh
          <br />
          Vishwakarma
        </motion.h1>

        <motion.h2 variants={item}>Frontend Developer</motion.h2>

        <motion.span variants={item}>
          <a href="https://github.com/Kamlesh718" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>

          <a href="https://www.linkedin.com/in/718kamlesh/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </motion.span>

        <motion.div variants={item} className={styles.desc_box}>
          <p className={styles.description}>
            With a passion for developing modern React web apps.
          </p>
        </motion.div>

        <motion.a variants={item} href={CV} download>
          <button className="hover">Resume</button>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
