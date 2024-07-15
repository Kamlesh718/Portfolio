import styles from "./ProjectsStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import ProjectCard from "../../common/ProjectCard";
import virtueversesLight from "../../assets/virtuversesLight.png";
import virtueversesDark from "../../assets/virtueversesDark.png";
import fastReactPizza from "../../assets/fast_react_pizza.png";
import theWildOasis from "../../assets/the-wild-oasis.png";
import chitraMitra from "../../assets/ChitraMitra.png";

function Projects() {
  const { theme } = useTheme();
  const virtueversesIcon =
    theme === "light" ? virtueversesLight : virtueversesDark;
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={virtueversesIcon}
          link="https://github.com/Kamlesh718/Virtueverses"
          title="VirtueVerses"
          project="Blog Web App"
        />
        <ProjectCard
          src={fastReactPizza}
          link="https://github.com/Kamlesh718/Pizza_Restaurant"
          title="Fast React Pizza"
          project="Pizza Booking Web App"
        />

        <ProjectCard
          src={theWildOasis}
          link="https://github.com/Kamlesh718/the-wild-oasis-website"
          title="The Wild Oasis"
          project="Cabin Booking Web App"
        />

        <ProjectCard
          src={chitraMitra}
          link="https://github.com/Kamlesh718/chitramitra-social-web-app"
          title="ChitraMitra"
          project="Social Media Web App"
        />
      </div>
    </section>
  );
}

export default Projects;
