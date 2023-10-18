import Image from "next/image";
import styles from "./style/rental.module.css";
import Contacts from "../components/contact";
import About from "../components/about";
const Rental = () => {
  return (
    <section className={styles.mainsec}>
      <div className={styles.divchoos}>
        <h1 className={styles.divchoose}>Cars For Rental</h1>
        <p className={styles.price}>Give us a call or prices are reasonable</p>
      </div>
      <section className={styles.imgcontainer}>
        {/* <div className={styles.cardiscrip}>
          <ul>
            <li>2014 axio</li>
            <li>15,000JMD for 5day</li>
            <li>24,000JMD for 2weeks</li>
            <li>35,000JMD for 1month</li>
          </ul>
        </div> */}
        <section className={styles.sec1}>
          <h1 className={styles.caryear}>2014 Axio</h1>
          <div className={styles.rentalimgs}>
            <Image
              src="/img21.jpg"
              alt="Axio rental car image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
            <Image
              src="/img31.jpg"
              alt="Axio rental car image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>

            <Image
              src="/img19.jpg"
              alt="Axio rental car image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
          </div>
        </section>
        {/* <div className={styles.chevdiscrip}>
          <ul>
            <li>2014 chevolete we converted into(hearse)</li>
            <li>15,000JMD for 1day</li>
            <li>
              45,000JMD and we convert your vehicle to hearse(conditions apply)
            </li>
          </ul>
        </div> */}
        <section className={styles.sec2}>
          <h1>2015 Chevolete(Hearse)</h1>
          <div className={styles.rentalimgs}>
            <Image
              src="/img34.jpg"
              alt="Chevolete rental car image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
            <Image
              src="/img28.jpg"
              alt="Chevolete rental car image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
            <Image
              src="/img17.jpg"
              alt="Chevolete rental car image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
          </div>
        </section>
        {/* <div className={styles.suzukidetails}>
          <ul>
            <li>2009 suzuki Swift</li>
            <li>9,000JMD for 1week</li>
            <li>18,000JMD for 2weeks</li>
            <li>30,000JMD</li>
          </ul>
        </div> */}
        <section className={styles.sec3}>
          <h1>2009 Suzuki Swift</h1>
          <div className={styles.rentalimgs}>
            <Image
              src="/img16.jpg"
              alt="Suzuki rental car image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
            <Image
              src="/img20.jpg"
              alt="Suzuki rental car image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
            <Image
              src="/img18.jpg"
              alt="Suzuki rental car image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
          </div>
        </section>
      </section>

      <About />
      <Contacts />
    </section>
  );
};

export default Rental;
