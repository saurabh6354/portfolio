/* eslint-disable react/no-unescaped-entities */
import { ReactTyped } from "react-typed";
import styles from "./TypeWriter.module.css";

const TypeWriter = () => {
  return (
    <div>
      <h1 className={styles.firstText}>
        I'm a{" "}
        <span className={styles.secondText}>
          <ReactTyped
            strings={[
              "Flutter Developer",
              "Master's Student",
              "Keen Learner",
            ]}
            typeSpeed={100}
            loop
            backSpeed={30}
            cursorChar="|"
            showCursor={true}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
