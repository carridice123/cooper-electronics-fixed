import Image from "next/image";
import styles from "./styles/electronics.module.css";
import Contacts from "../components/contact";
import About from "../components/about";
const Electronics = () => {
  return (
    <section className={styles.sec1}>
      <section>
        <div className={styles.divrentalh1}>
          <h1>Electronics Installation</h1>
        </div>

        <section className={styles.sectcontent}>
          <section className={styles.sectcontent2}>
            <div className={styles.divinstall}>
              <h2 className={styles.installh2}>We install:</h2>
            </div>
            <div className={styles.divul}></div>
            <ul className={styles.ultrackers}>
              <li>Tracking Devices,</li>
              <li>Car & House Alarm Systems,</li>
              <li>Sound Systems & Camera Systems</li>
              <li>
                You name it, we install it{" "}
                <h3>give us an call our prices are affordable.</h3>
              </li>
            </ul>
          </section>

          <section className={styles.cardiscription}>
            <div className={styles.discriptiondiv}>
              <p>
                This Honda (name) year 2006 was modified into a button push to
                start vehicle
              </p>
              <p>
                We also installed a high based music stereo systems for you and
                design it to also work with your phone wirelessly.
              </p>
            </div>

            <div className={styles.detailsdiv}></div>

            <span className={styles.detailspan}>Further details:</span>
            <p>
              If you want to host an event or a birthday party and dont want to
              over kill
            </p>
            <p>
              This might just be what you need, its flexible and the price is
              affordable.
            </p>
          </section>
          <div className={styles.divprice}>
            <h3 className={styles.carprice}>Price</h3>
            <ul>
              <li>1day- 10,000JMD</li>
              <li>5days-35,000JMD</li>
              <li>2weeks-65,000JMD</li>
            </ul>
          </div>

          <div className={styles.dividentification}>
            <h3>What Identification you need</h3>
            <ul className={styles.ulidentification}>
              <li>id/valid identification</li>
              <li>trn</li>
              <li>cash in hand</li>
            </ul>
          </div>
        </section>
      </section>
      <section className={styles.imgcontainer}>
        <section className={styles.secondsec}>
          <Image src="/img13.jpg" alt="image" width={600} height={600}></Image>
          <Image src="/img26.jpg" alt="image" width={600} height={600}></Image>
          <Image src="/img25.jpg" alt="image" width={600} height={600}></Image>
        </section>
        <section className={styles.thirdsec}>
          <Image src="/img23.jpg" alt="image" width={600} height={600}></Image>
          <Image src="/img32.jpg" alt="image" width={600} height={600}></Image>
          <Image src="/img33.jpg" alt="image" width={600} height={600}></Image>
        </section>
      </section>

      <About />
      <Contacts />
    </section>
  );
};

export default Electronics;
