import { motion } from "framer-motion";
import styles from "./ContactStyles.module.css";

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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Contact() {
  return (
    <motion.section
      id="contact"
      className={styles.container}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h1 className="sectionTitle" variants={item}>
        Contact
      </motion.h1>

      <motion.form
        action="https://formspree.io/f/mdoqrqjd"
        method="POST"
        variants={container}
      >
        <motion.div variants={item} className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </motion.div>

        <motion.div variants={item} className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </motion.div>

        <motion.div variants={item} className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          />
        </motion.div>

        <motion.input
          variants={item}
          className="hover btn"
          type="submit"
          value="Submit"
        />
      </motion.form>
    </motion.section>
  );
}

export default Contact;
