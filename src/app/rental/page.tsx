import Image from "next/image";
import styles from "./style/rental.module.css";
import Contacts from "../components/contact";
import About from "../components/about";
const Rental = () => {
  return (
    <section className={styles.mainsec}>
      <section className={styles.headimg}>
        <Image
          src="/rental3.png"
          alt="rental cars in maypen clarendon"
          width={2300}
          height={2300}
          className={styles.rentalheadimg}
        ></Image>
      </section>
      <div className={styles.divchoos}>
        <p className={styles.price}>Give us a call or prices are reasonable</p>
      </div>
      <section className={styles.imgcontainer}>
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
