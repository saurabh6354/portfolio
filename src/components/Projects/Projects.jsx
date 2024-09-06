import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  return (
    <section className={styles.container}>
      <div id="projects" className={styles.anchor} />
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
