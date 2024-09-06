/* eslint-disable react/no-unescaped-entities */
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <div id="about" className={styles.anchor} />
      <h2 className={styles.title}>About Me</h2>
      {/* About Section */}
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <div className={styles.aboutIcon}>
            <i className="bx bxs-user bx-tada"></i>
          </div>
          <div className={styles.aboutItemText}>
            <h3>My Background</h3>
            <p>
              {" "}
              I'm an Masters student at IIIT Hyderabad , pursuing my degree in 
              Computer Science and Information Security. 
              <br />
              <br />
              I completed my BTech from Cluster Innovation Center , University of Delhi in IT & Maths . 
               I have also been an MITACS Globalink Research scholar.
              Apart from that I have also worked as a sofware Enginner Intern at 
              few companies. 
              <br />
              <br />
               I have a solid foundation in Data Structures and Algorithms, as well as 
              Mathematics.
            </p>
          </div>
        </li>
        
        {/* Education Section */}
        <li className={styles.aboutItem}>
          <div className={styles.aboutIcon}>
            <i className="bx bxs-graduation bx-tada"></i>
          </div>
          <div className={styles.aboutItemText}>
            <h3 className={styles.educationTitle}>Education</h3>
            <div className={styles.educationList}>
              <ul>
                <li className={styles.educationListItem}>
                  <div className={styles.educationListItemContent}>
                    <div className={styles.educationListItemIcon}>
                      <i className="bx bxs-school"></i>
                    </div>
                    <div className={styles.educationListItemDetails}>
                      International Institute of Information Technology , Hyderabad 
                    </div>
                  </div>
                </li>
                <li className={styles.educationListItem}>
                  
                  <div className={styles.educationListItemContent}>
                    <div className={styles.educationListItemIcon}>
                      <i className="bx bxl-java"></i>
                    </div>
                    <div className={styles.educationListItemDetails}>
                      MTech Computer Science and Information Security
                    </div>
                  </div>
                </li>
                <li className={styles.educationListItem}>
                  <div className={styles.educationListItemContent}>
                    <div className={styles.educationListItemIcon}>
                      <i className="bx bxs-calendar"></i>
                    </div>
                    <div className={styles.educationListItemDetails}>
                      June 2026
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
          {/* Education Section */}
          <li className={styles.aboutItem}>
          <div className={styles.aboutIcon}>
            <i className="bx bxs-graduation bx-tada"></i>
          </div>
          <div className={styles.aboutItemText}>
            <h3 className={styles.educationTitle}>Education</h3>
            <div className={styles.educationList}>
              <ul>
                <li className={styles.educationListItem}>
                  <div className={styles.educationListItemContent}>
                    <div className={styles.educationListItemIcon}>
                      <i className="bx bxs-school"></i>
                    </div>
                    <div className={styles.educationListItemDetails}>
                      Cluster Innovation Center, University of Delhi
                    </div>
                  </div>
                </li>
                <li className={styles.educationListItem}>
                  
                  <div className={styles.educationListItemContent}>
                    <div className={styles.educationListItemIcon}>
                      <i className="bx bxl-java"></i>
                    </div>
                    <div className={styles.educationListItemDetails}>
                      BTech Information Technology and Maths 
                    </div>
                  </div>
                </li>
                <li className={styles.educationListItem}>
                  <div className={styles.educationListItemContent}>
                    <div className={styles.educationListItemIcon}>
                      <i className="bx bxs-calendar"></i>
                    </div>
                    <div className={styles.educationListItemDetails}>
                      June 2024
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* Hobbies Section */}
<li className={styles.aboutItem}>
  <div className={styles.aboutIcon}>
    <i className="bx bxs-heart bx-tada"></i>
  </div>
  <div className={styles.aboutItemText}>
    <h3 className={styles.hobbiesTitle}>My Hobbies</h3>
    <p>
      I enjoy a variety of activities in my free time:
    </p>
    <ul className={styles.hobbiesList}>
      <li className={styles.hobbyItem}>
        <div className={styles.hobbyItemContent}>
          <i className={`bx bxs-cricket-ball ${styles.hobbyIcon}`}></i>
          <div className={styles.hobbyItemDetails}>Playing Cricket</div>
        </div>
      </li>
      <li className={styles.hobbyItem}>
        <div className={styles.hobbyItemContent}>
          <i className={`bx bxs-leaf ${styles.hobbyIcon}`}></i>
          <div className={styles.hobbyItemDetails}>Gardening</div>
        </div>
      </li>
      <li className={styles.hobbyItem}>
        <div className={styles.hobbyItemContent}>
          <i className={`bx bxs-plane-take-off ${styles.hobbyIcon}`}></i>
          <div className={styles.hobbyItemDetails}>Travelling</div>
        </div>
      </li>
    </ul>
  </div>
</li>
        {/* Resume Section */}
        <li className={styles.aboutItem}>
          <div className={styles.aboutIcon}>
            <i className="bx bxs-file bx-tada"></i>
          </div>
          <div className={styles.aboutItemText}>
            <h3>Resume</h3>
            <div className={styles.resumeLink}>
              <a href="https://drive.google.com/file/d/1wICAnlsWsqBen1trMYV8moJBrpb1rH_o/view?usp=sharing"target="_blank">
                Saurabh_Kumar.pdf
              </a>
            </div>
          </div>
        </li>
      </ul>
      
    </section>
    
  );
};

export default About;
