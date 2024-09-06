/* eslint-disable react/no-unescaped-entities */
import { getImageURL } from "../../utils";
import TypeWriter from "../TypeWriter/TypeWriter.jsx";
import styles from "./Hero.module.css";
import Modal from "./Modal.jsx";
import { useState } from "react";
import ContactForm from "./ContactForm.jsx";

const Hero = () => {
  // useState for the Modal
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saurabh Kumar</h1>
        <TypeWriter />
        <p className={styles.description}>
          I have experience in Flutter Based Cross platform application Development. 
          Apart from this I am also comfortable in coding in Python and C++ .
        </p>
        <div>
          {/* <button onClick={() => setIsOpen(true)} className={styles.contactBtn}>
            Contact Me
          </button> */}
          {/* Using React Portal, we've forced this child component to render outside of its parent by creating a portal to the 'portal' div in index.html*/}
          <Modal open={isOpen} isOpen={isOpen} setIsOpen={setIsOpen}>
            <ContactForm onClose={() => setIsOpen(false)} />
          </Modal>
        </div>
        <div className={styles.socialContainer}>
          <div className={styles.socialTitle}>
            <h3>Social Media</h3>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/saurabhcic/"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/saurabh6354" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
        <div className={styles.portfolioTechStack}>
          {/* <p className={styles.portfolioDetails}>
            This portfolio is powered by React{" "}
            <a href="https://react.dev/" title="React Logo">
              <img
                className={styles.portfolioReactIcon}
                src={getImageURL("hero/react.png")}
                alt="React Logo"
              />
            </a>{" "}
            & Vercel{" "}
            <a href="https://vercel.com/" title="Vercel Logo">
              <img
                className={styles.portfolioVercelIcon}
                src={getImageURL("hero/vercel.png")}
                alt="Vercel Logo"
              />
            </a>
          </p> */}
        </div>
      </div>
      <div
        className={
          !isOpen ? styles.heroImgContainer : styles.heroImgContainerModal
        }
      >
        <img
          src={getImageURL("hero/DSC_0775.JPG")}
          alt="Mine Image"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
