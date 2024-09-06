import skills from "../../data/skills.json";
import { getImageURL } from "../../utils";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.container}>
      <div id="skills" className={styles.anchor} />
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {/* The id is created by the map() function */}
          {skills.map((skill, id) => {
            // Whenever you're iterating through an array, and programatically creating elements in React, you need to give each element an id.
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer} title={skill.title}>
                  {/* Each image has an src field, so we'll use that instead of hard coding the image URLs */}
                  <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
