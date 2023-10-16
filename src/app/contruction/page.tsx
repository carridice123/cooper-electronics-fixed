import Image from "next/image";
import styles from "./style/contruction.module.css";
import Contacts from "../components/contact";
import About from "../components/about";
const Construction = () => {
  return (
    <section className={styles.sec1}>
      <section className={styles.sec2}>
        <section className={styles.sectcontent}>
          <div className={styles.contructionmaterial}>
            <h1>Contruction Materials</h1>
          </div>
          <div className={styles.contructioncontent}>
            <div className={styles.contruction}>
              <h2>Our contruction team is always prepaired for your order</h2>
            </div>
            <div className={styles.callus}>
              <p>
                We supply thousands of customers with materials to start homes
                and projects big or small we understand and willing to help you
                start somewhere.
              </p>
              <p>Call us today (876)454-9844</p>
            </div>
            <p>
              We supply thousands of customers with materials to start homes and
              projects big or small we understand and willing to help you start
              somewhere.
            </p>
            <p>Call us today (876)454-9844</p>
          </div>
        </section>
        <section className={styles.sec4}>
          <Image src="/img7.jpg" alt="image" width={440} height={410}></Image>
          <Image src="/img8.jpg" alt="image" width={440} height={410}></Image>
          <Image src="/img1.jpg" alt="image" width={440} height={410}></Image>
        </section>
      </section>

      <About />
      <Contacts />
    </section>
  );
};

export default Construction;
