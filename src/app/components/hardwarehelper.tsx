import Image from "next/image";
import styles from "../styles/hardwares.module.css";
const Hardwares = () => {
  return (
    <section className={styles.sec}>
      <section className={styles.imgcontainer1}>
        <div className={styles.imgdiv1}>
          <div className={styles.imgs}>
            <Image
              src="/door.jpg"
              alt="sand for sale in maypen"
              width={300}
              height={300}
              className={styles.imgzdoor}
            ></Image>
          </div>

          <h2>Doors</h2>
        </div>
        <div className={styles.imgdiv1}>
          <div className={styles.imgs}>
            <Image
              src="/windows.jpg"
              alt="windows for sale in maypen"
              width={300}
              height={300}
              className={styles.imgz}
            ></Image>
          </div>

          <h2>Windows</h2>
        </div>
        <div className={styles.imgdiv1}>
          <div className={styles.imgs}>
            <Image
              src="/wheelbarrow.jpg"
              alt="wheelbarrow for sale in maypen"
              width={300}
              height={300}
              className={styles.imgz}
            ></Image>
          </div>

          <h2>wheel barrow</h2>
        </div>
        <div className={styles.imgdiv1}>
          <div className={styles.imgs}>
            <Image
              src="/shovel.jpg"
              alt="shovel for sale in maypen"
              width={300}
              height={300}
              className={styles.imgz}
            ></Image>
          </div>

          <h2>Shovels</h2>
        </div>
      </section>
      <section className={styles.imgcontainer}>
        <div className={styles.imgdiv}>
          <Image
            src="/construction3.jpg"
            alt="sand for sale in maypen"
            width={300}
            height={300}
            className={styles.img}
          ></Image>
          <h2>Sand</h2>
        </div>
        <div className={styles.imgdiv}>
          <Image
            src="/construction4.jpg"
            alt="sand for sale in maypen"
            width={300}
            height={300}
            className={styles.img}
          ></Image>
          <h2>Grit</h2>
        </div>
        <div className={styles.imgdiv}>
          <Image
            src="/contruction10.jpg"
            alt="sand for sale in maypen"
            width={300}
            height={300}
            className={styles.img}
          ></Image>
          <h2>Blocks</h2>
        </div>
        <div className={styles.imgdiv}>
          <Image
            src="/steel.jpg"
            alt="sand for sale in maypen"
            width={300}
            height={300}
            className={styles.img}
          ></Image>
          <h2>Steel</h2>
        </div>
      </section>
    </section>
  );
};

export default Hardwares;
