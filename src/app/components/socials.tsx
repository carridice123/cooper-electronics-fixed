import Image from "next/image";
import styles from "../styles/socials.module.css";
const Socials = () => {
  return (
    <section className={styles.sec}>
      <ul className={styles.navul}>
        <li>
          <Image
            src="/facebook.png"
            alt="facebook image"
            width={40}
            height={40}
            className={styles.navulimg}
          ></Image>
        </li>
        <li>
          <Image
            src="/twitter.png"
            alt="twitter"
            width={40}
            height={40}
            className={styles.navulimg}
          ></Image>
        </li>
        <li>
          <Image
            src="/tiktok.png"
            alt="tiktok"
            width={40}
            height={40}
            className={styles.navulimg}
          ></Image>
        </li>
        <li>
          <Image
            src="/instagram.png"
            alt="instagram"
            width={40}
            height={40}
            className={styles.navulimg}
          ></Image>
        </li>
      </ul>
    </section>
  );
};

export default Socials;
