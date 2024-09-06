/* eslint-disable react/prop-types */
import { getImageURL } from "../../utils";
import styles from "./ProjectCard.module.css";

// ES6 introduced destructuring which extracts the value of variables inside an object directly
// const ProjectCard = ({ project }) is equal to saying const project = props.project
export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <a href={getImageURL(imageSrc)} target="_blank">
          <img
            src={getImageURL(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
        </a>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link} target="_blank">
          GitHub Repository
          <div className={styles.icon}>
            <i className="bx bx-link-external"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
