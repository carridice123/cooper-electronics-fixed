import Image from "next/image";
import styles from "../styles/hardwares.module.css";
const Hardwares = () => {
  return (
    <section className={styles.sec}>
      <section className={styles.secheader}>
        <h1>Order everything one place</h1>
      </section>
      <section className={styles.secondparent}>
        <section className={styles.container}>
          <div className={styles.imgradius}>
            <Image
              src="/door.jpg"
              alt="house doors for sale in maypen"
              width={300}
              height={300}
              className={styles.img}
            ></Image>
          </div>
          <div>
            <h2>Doors</h2>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.imgradius}>
            <Image
              src="/windows.jpg"
              alt="house Windows for sale in maypen"
              width={300}
              height={300}
              className={styles.img}
            ></Image>
          </div>
          <div>
            <h2>Widows</h2>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.imgradius}>
            <Image
              src="/tiles.jpg"
              alt="house tiles for sale in maypen"
              width={300}
              height={300}
              className={styles.img}
            ></Image>
          </div>
          <div>
            <h2>Tiles</h2>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.imgradius}>
            <Image
              src="/pvcpipe2.jpg"
              alt="Pvc pipes for sale in maypen"
              width={300}
              height={300}
              className={styles.img}
            ></Image>
          </div>
          <div>
            <h2>PVC Pipes</h2>
          </div>
        </section>
      </section>
      <section className={styles.secheader}>
        <h1>What you need to get started</h1>
      </section>
      <section className={styles.secondparent}>
        <section className={styles.container}>
          <Image
            src="/construction3.jpg"
            alt="order sand in maypen claredon"
            width={300}
            height={300}
            className={styles.imgradius1}
          ></Image>
          <div>
            <h2>sand</h2>
          </div>
        </section>
        <section className={styles.container}>
          <Image
            src="/construction4.jpg"
            alt="house Windows for sale in maypen"
            width={300}
            height={300}
            className={styles.imgradius1}
          ></Image>
          <div>
            <h2>Grit</h2>
          </div>
        </section>
        <section className={styles.container}>
          <Image
            src="/contruction10.jpg"
            alt="Order blocks for sale in maypen clarendon"
            width={300}
            height={300}
            className={styles.imgradius1}
          ></Image>
          <div>
            <h2>Blocks</h2>
          </div>
        </section>
        <section className={styles.container}>
          <Image
            src="/contruction9.jpg"
            alt=" order steel for sale in maypen"
            width={300}
            height={300}
            className={styles.imgradius1}
          ></Image>
          <div>
            <h2>Steel</h2>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hardwares;
