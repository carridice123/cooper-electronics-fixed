import Image from "next/image";
import styles from "./style/rental.module.css";
import Contacts from "../components/contact";
import About from "../components/about";
const Rental = () => {
  return (
    <section className={styles.mainsec}>
      <div className={styles.divchoose}>
        <h1>Choose from our cars collection</h1>
      </div>
      <section className={styles.imgcontainer}>
        <div>
          <ul>
            <li>2014 axio</li>
            <li>15,000JMD for 5day</li>
            <li>24,000JMD for 2weeks</li>
            <li>35,000JMD for 1month</li>
          </ul>
        </div>
        <section className={styles.sec1}>
          <Image
            src="/img21.jpg"
            alt="rent car image"
            width={600}
            height={600}
          ></Image>
          <Image
            src="/img31.jpg"
            alt="rent car image"
            width={600}
            height={600}
          ></Image>

          <Image
            src="/img19.jpg"
            alt="rent car image"
            width={600}
            height={600}
          ></Image>
        </section>

        <div>
          <ul>
            <li>2014 chevolete we converted into(hearse)</li>
            <li>15,000JMD for 1day</li>
            <li>
              45,000JMD and we convert your vehicle to hearse(conditions apply)
            </li>
          </ul>
        </div>

        <section className={styles.sec2}>
          <Image
            src="/img34.jpg"
            alt="rent car image"
            width={600}
            height={600}
          ></Image>
          <Image
            src="/img27.jpg"
            alt="rent car image"
            width={600}
            height={600}
          ></Image>
          <Image
            src="/img17.jpg"
            alt="rent car image"
            width={600}
            height={600}
          ></Image>
        </section>

        <div>
          <ul>
            <li>2009 suzuki Swift</li>
            <li>9,000JMD for 1week</li>
            <li>18,000JMD for 2weeks</li>
            <li>30,000JMD</li>
          </ul>
        </div>

        <section className={styles.sec3}>
          <Image
            src="/img16.jpg"
            alt="rent car image"
            width={600}
            height={600}
          ></Image>
          <Image
            src="/img20.jpg"
            alt="rent car image"
            width={600}
            height={600}
          ></Image>
          <Image
            src="/img18.jpg"
            alt="rent car image"
            width={600}
            height={600}
          ></Image>
        </section>
      </section>

      <About />
      <Contacts />
    </section>
  );
};

export default Rental;
