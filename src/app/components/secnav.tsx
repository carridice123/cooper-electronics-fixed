import styles from "../styles/secondnav.module.css";
import Link from "next/link";

const Secondnav = () => {
  return (
    <section className={styles.sec}>
      <section className={styles.sec2}>
        <nav className={styles.nav}>
          <ul className={styles.navul}>
            <li className={styles.navli}>
              <Link href="/electronics">Electronics</Link>
            </li>
            <li className={styles.navli}>
              <Link href="/rental">Car rental</Link>
            </li>
            <li className={styles.navli}>
              <Link href="/contruction">Construction</Link>
            </li>
            <li className={styles.navli}>
              <Link href="/entertainment">Entertainment</Link>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
};

export default Secondnav;
