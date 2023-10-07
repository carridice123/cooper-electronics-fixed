import Socials from "./socials";
import Logo from "./logo";
import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.foot}>
      <section className={styles.footcontent}>
        <section className={styles.firstsec}>
          <Logo />
          <section className={styles.secondsec}>
            <ul className={styles.footerul}>
              <li>Contacts</li>
              <li>About</li>
              <li>Email: copperelectronicshardware@gmail.com</li>
              <li>tel: (876)454-9844</li>
            </ul>
          </section>
          <Socials />
        </section>
        <section className={styles.secopening}>
          <div className={styles.openhrs}>
            <h2>Opening hours</h2>
          </div>
          <div className={styles.openings}>
            <div className={styles.openingdays}>
              <ul>
                <li>Mondays</li>
                <li>Tuesdays</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
              </ul>
            </div>
            <div className={styles.openinghrs}>
              <ul>
                <li>7:00am-10:pm</li>
                <li>7:00am-10:pm</li>
                <li>7:00am-10:pm</li>
                <li>7:00am-10:pm</li>
                <li>7:00am-10:pm</li>
                <li>7:00am-10:pm</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <span className={styles.copyrights}>
        &copy; copy-rights Cooper-Electronics-Hardware
      </span>
    </footer>
  );
};

export default Footer;
