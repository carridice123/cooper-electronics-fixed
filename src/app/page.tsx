import Image from "next/image";
import styles from "./styles/page.module.css";
import Secondnav from "./components/secnav";
import Slider from "./components/slide";
import About from "./components/about";

import Contacts from "./components/contact";
import Mobilenav from "./components/hamnavmobile";
export default function Home() {
  return (
    <main className={styles.mains}>
      <Slider />
      <section className={styles.secnavcontrol}>
        <Secondnav />
      </section>
      <About />

      <Contacts />
    </main>
  );
}
