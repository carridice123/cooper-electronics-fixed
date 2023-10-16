import styles from "../styles/firstsec.module.css";
import Logo from "./logo";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./socials";
const Firstsec = () => {
  return (
    <section className={styles.sec}>
      <section className={styles.sec2}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <section className={styles.logomotto}>
          <div className={styles.logomobile}>
            <Logo />
          </div>
          <Image
            src="/coppermotto.png"
            alt="motto"
            width={200}
            height={200}
            className={styles.logoimg}
          ></Image>
        </section>
        {/* <div className={styles.socials}>
          <Socials />
        </div> */}

        <section className={styles.contacts}>
          <div className={styles.emailimg}>
            <Image src="/email.png" alt="email" width={50} height={50}></Image>
          </div>
          <div className={styles.email}>
            <h2>Email Us</h2>
            <span className={styles.emailh2}>copperelectronics@gmail.com</span>
          </div>
        </section>
      </section>

      <div className={styles.gobackdiv}>
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
