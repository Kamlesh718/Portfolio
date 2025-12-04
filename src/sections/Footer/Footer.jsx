import { motion } from "framer-motion";
import styles from "./FooterStyles.module.css";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <motion.section
      id="footer"
      className={styles.container}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.p variants={container}>
        &copy; {year} Kamlesh Vishwakarma <br />
        All rights reserved
      </motion.p>
    </motion.section>
  );
}

export default Footer;
