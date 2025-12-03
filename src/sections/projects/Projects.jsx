import styles from "./ProjectsStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import ProjectCard from "../../common/ProjectCard";
import virtueversesLight from "../../assets/virtuversesLight.png";
import virtueversesDark from "../../assets/virtueversesDark.png";
import fastReactPizza from "../../assets/fast_react_pizza.png";
import theWildOasis from "../../assets/the-wild-oasis.png";
import chitraMitra from "../../assets/ChitraMitra.png";
import codeEditor from "../../assets/code.png";
import solarSystem from "../../assets/solarSystem.png";
import spaceExplorer from "../../assets/space-explorer.ico";
// import samvada from "../../assets/samvada.png";
import devDesk from "../../assets/devdesk-logo.png";
import restate from "../../assets/homelogo.jpg";
import viewlytics from "../../assets/viewlytics.png";

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
        <ProjectCard
          src={codeEditor}
          link="https://github.com/Kamlesh718/react_code_editor"
          title="Code Editor"
          project="Simple React Code Editor"
        />
        <ProjectCard
          src={solarSystem}
          link="https://github.com/Kamlesh718/solar-system"
          title="Solar System"
          project="3D Solar System with THREEJS"
        />
        <ProjectCard
          src={spaceExplorer}
          link="https://github.com/Kamlesh718/space-explorer"
          title="Space Explorer"
          project="A 3D space-themed web game"
        />
        <ProjectCard
          src={devDesk}
          link="https://github.com/Kamlesh718/devdesk"
          title="DevDesk"
          project="A mini OS in the browser"
        />

        <ProjectCard
          src={restate}
          link="https://github.com/Kamlesh718/Re-estate"
          title="ReState"
          project="Real Estate App"
        />
        <ProjectCard
          src={viewlytics}
          link="https://github.com/Kamlesh718/viewlytics"
          title="Viewlytics"
          project="AI Small (learning) Project"
        />
      </div>
    </section>
  );
}

export default Projects;
