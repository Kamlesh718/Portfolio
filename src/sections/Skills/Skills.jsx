import { motion } from "framer-motion";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function Skills() {
  return (
    <motion.section
      id="skills"
      className={styles.container}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h1 className="sectionTitle" variants={item}>
        Skills
      </motion.h1>

      <motion.div variants={container} className={styles.skillList}>
        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="HTML" />
        </motion.div>

        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="CSS" />
        </motion.div>

        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="JavaScript" />
        </motion.div>
      </motion.div>

      <hr />

      <motion.div variants={container} className={styles.skillList}>
        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="React" />
        </motion.div>

        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        </motion.div>

        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="Shadcn CSS" />
        </motion.div>

        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="Next.js(Beginner)" />
        </motion.div>

        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="Node.js(Learning)" />
        </motion.div>

        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="React Flow" />
        </motion.div>
      </motion.div>

      <hr />

      <motion.div variants={container} className={styles.skillList}>
        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="Redux Toolkit" />
        </motion.div>

        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="React Query" />
        </motion.div>

        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="Supabase" />
        </motion.div>

        <motion.div variants={item}>
          <SkillList src={checkMarkIcon} skill="Wix" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Skills;
