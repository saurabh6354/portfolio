import { getImageURL } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer>
      <div id="contact" className={styles.anchor} />
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img
              src={getImageURL("contact/home.png")}
              alt="Location icon"
              width="50px"
            />
            <a>Darbhanga , Bihar</a>
          </li>
          <li className={styles.link}>
            <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:saurabh.emwa@gmail.com">saurabh.emwa@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageURL("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/in/saurabhcic/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageURL("contact/githubIcon.png")}
              alt="GitHub icon"
            />
            <a href="https://github.com/saurabh6354" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
