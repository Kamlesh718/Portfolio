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
// import viewlytics from "../../assets/viewlytics.png";

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
          githubLink="https://github.com/Kamlesh718/Virtueverses"
          liveSiteLink="https://virtueverses.vercel.app/"
          title="VirtueVerses"
          project="Blog Web App"
        />
        <ProjectCard
          src={fastReactPizza}
          githubLink="https://github.com/Kamlesh718/Pizza_Restaurant"
          liveSiteLink="https://pizza-restaurant-teal.vercel.app/"
          title="Fast React Pizza"
          project="Pizza Booking Web App"
        />

        <ProjectCard
          src={theWildOasis}
          githubLink="https://github.com/Kamlesh718/the-wild-oasis-website"
          liveSiteLink="https://the-wild-oasis-website-three.vercel.app/"
          title="The Wild Oasis"
          project="Cabin Booking Web App"
        />

        <ProjectCard
          src={chitraMitra}
          githubLink="https://github.com/Kamlesh718/chitramitra-social-web-app"
          liveSiteLink="https://chitramitra.vercel.app/"
          title="ChitraMitra"
          project="Social Media Web App"
        />
        <ProjectCard
          src={codeEditor}
          githubLink="https://github.com/Kamlesh718/react_code_editor"
          liveSiteLink="https://react-code-editor-rust.vercel.app/"
          title="Code Editor"
          project="Simple React Code Editor"
        />
        <ProjectCard
          src={solarSystem}
          githubLink="https://github.com/Kamlesh718/solar-system"
          liveSiteLink="https://solor-syystem.netlify.app/"
          title="Solar System"
          project="3D Solar System with THREEJS"
        />
        <ProjectCard
          src={spaceExplorer}
          githubLink="https://github.com/Kamlesh718/space-explorer"
          liveSiteLink="https://space-explorer-lilac.vercel.app/"
          title="Space Explorer"
          project="A 3D space-themed web game"
        />
        <ProjectCard
          src={devDesk}
          githubLink="https://github.com/Kamlesh718/devdesk"
          liveSiteLink="https://devdesk-chi.vercel.app/"
          title="DevDesk"
          project="A mini OS in the browser"
        />

        <ProjectCard
          src={restate}
          githubLink="https://github.com/Kamlesh718/Re-estate"
          liveSiteLink="https://github.com/Kamlesh718/Re-estate"
          title="ReState"
          project="Real Estate App"
        />
        {/* <ProjectCard
          src={viewlytics}
          link="https://github.com/Kamlesh718/viewlytics"
          title="Viewlytics"
          project="AI Small (learning) Project"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
