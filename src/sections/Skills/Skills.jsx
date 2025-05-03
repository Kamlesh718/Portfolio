import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Shadcn CSS" />
        <SkillList src={checkMarkIcon} skill="Next.js(Beginner)" />
        <SkillList src={checkMarkIcon} skill="Node.js(Learning)" />
        <SkillList src={checkMarkIcon} skill="React Flow" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux Toolkit" />
        <SkillList src={checkMarkIcon} skill="React Query" />
        <SkillList src={checkMarkIcon} skill="Supabase" />
        <SkillList src={checkMarkIcon} skill="Wix" />
      </div>
    </section>
  );
}

export default Skills;
