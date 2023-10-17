import styles from "../styles/firstsec.module.css";
import Logo from "./logo";
import React from "react";
import Image from "next/image";
import Secondnav from "./secnav";
import Link from "next/link";
import Socials from "./socials";
const Firstsec = () => {
  return (
    <section className={styles.sec}>
      <section className={styles.sec2}>
        <div className={styles.logo}>
          <Logo />
          <div className={styles.socials}>
            <Socials />
          </div>
        </div>
        <section className={styles.desksecnav}>
          <Secondnav />
        </section>
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
    </section>
  );
};

export default Firstsec;
