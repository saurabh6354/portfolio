import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerCopyrightContainer}>
        <div>
          <p className={styles.footerCopyrightText}>
            Copyright &copy; 2024 Saurabh Kumar
          </p>
        </div>

        <div>
          <a className={styles.footerBackToTopIcon} href="#">
            <i className="bx bxs-up-arrow-square"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
