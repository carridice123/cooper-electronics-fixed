import styles from "../styles/mobilesecnav.module.css";
import Image from "next/image";

const Mobilesecnav = () => {
  return (
    <section className={styles.mobilesecnav}>
      <section className={styles.secnavcontent}>
        <div className={styles.div1}>
          <Image
            src="/openhours.png"
            alt="clock image"
            width={20}
            height={20}
            className={styles.clock}
          ></Image>
          <span>Sun to sun-7:00AM to 10:00PM</span>
        </div>
        <div className={styles.div2}>
          <Image
            src="/tiktok.png"
            alt="tiktok image"
            width={14}
            height={14}
            className={styles.clock}
          ></Image>
          <Image
            src="/instagram.png"
            alt="instagram image"
            width={14}
            height={14}
            className={styles.clock}
          ></Image>
        </div>
      </section>
    </section>
  );
};

export default Mobilesecnav;
