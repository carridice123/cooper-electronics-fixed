import Socials from "./socials";
import Link from "next/link";
import Email from "./email";
import Logo from "./logo";
import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.foot}>
      <section className={styles.footcontent}>
        <section className={styles.firstsec}>
          <section className={styles.firstseclogo}>
            <Logo />
          </section>
          <section className={styles.secondsec}>
            <h1 className={styles.secondsech1}>About Us</h1>

            <ul className={styles.footerul}>
              <li>
                <Email />
              </li>
              <li>Tel: (876)454-9844</li>
            </ul>
          </section>
          <section className={styles.service}>
            <h1>Our Services</h1>
            <ul className={styles.servicesul}>
              <li>
                <Link href="/electronics">Electronics</Link>
              </li>
              <li>
                <Link href="/contruction">Contstruction Materials</Link>
              </li>
              <li>
                <Link href="/rental">Rental Cars</Link>
              </li>
              <li>
                <Link href="/events">We also host events</Link>
              </li>
            </ul>
          </section>

          <section className={styles.sectionsecsocial}>
            <Socials />
          </section>
        </section>
        <section className={styles.secopening}>
          <div className={styles.openhrs}>
            <h2>Opening hours</h2>
          </div>
          <div className={styles.openings}>
            <div className={styles.openingdays}>
              <ul>
                <li>Sundays</li>
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
                <li>7:00am-10:pm</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <span className={styles.copyrights}>
        &copy; copy-rights Copper-Electronics-Hardware
      </span>
    </footer>
  );
};

export default Footer;
