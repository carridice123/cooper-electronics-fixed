import Navbar from "./navbar";
import styles from "../styles/firstsec.module.css";
import Logo from "./logo";
import Image from "next/image";
import Link from "next/link";
import Socials from "./socials";
const Firstsec = () => {
  return (
    <section className={styles.sec}>
      <Navbar />
      <section className={styles.sec2}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.socials}>
          <Socials />
        </div>
      </section>
      <div>
        <Link href="/" className={styles.goback}>
          <Image
            src="/arrowleft.png"
            alt="go back img"
            width={20}
            height={20}
          ></Image>
          Go back
        </Link>
      </div>
    </section>
  );
};

export default Firstsec;
