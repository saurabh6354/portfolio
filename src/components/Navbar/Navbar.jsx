import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { getImageURL } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // We need a reference to know where the navbar is
  let menuRef = useRef();

  // This useEffect is used to have the navbar close automatically if the user clicks outside of it
  useEffect(() => {
    // We need a reference to our handler
    let handler = (event) => {
      // If the event target is not in the menuRef, we can set menuOpen to false.
      if (!menuRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    // Let's have our effect clean up the event listener
    // This function will run when the component renders and this effect updates
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav ref={menuRef} className={styles.navbar}>
      <a className={styles.title} href="#">
        Saurabh.
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageURL("nav/closeIcon.png")
              : getImageURL("nav/menuIcon.png")
          }
          alt="Menu button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {/* ${menuOpen && styles.menuOpen} This means the menu must be open for the style after && to be applied */}
        {/* String interpolation allows us to add multiple class names */}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
