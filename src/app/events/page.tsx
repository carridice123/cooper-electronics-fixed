import Image from "next/image";
import styles from "./style/events.module.css";
import Contacts from "../components/contact";
import About from "../components/about";
const Events = () => {
  return (
    <section className={styles.firstsec}>
      <div className={styles.headimg}>
        <Image
          src="/eventshosting.png"
          alt="entertainment spot in maypen clarendon"
          width={399}
          height={399}
          className={styles.entertainmenthead}
        ></Image>
        <div className={styles.entertainment}>
          <h1>Events hosting</h1>
        </div>
      </div>
      <section className={styles.entertainmentcontent}>
        <div className={styles.divevents}>
          <h2>
            If you want a spot to keep a event,we also have a bar not only for
            our customers, we aslo host events.
          </h2>
          <h2>Book your event here (876)8378766</h2>
        </div>
        <section className={styles.imgcontainer}>
          <section className={styles.secondsec}>
            <Image
              src="/img9.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
            <Image
              src="/img15.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
            <Image
              src="/img11.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
          </section>
          <section className={styles.thirdsec}>
            <Image
              src="/img25.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
            <Image
              src="/img26.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
            <Image
              src="/img24.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
          </section>
        </section>
      </section>

      <About />
      <Contacts />
    </section>
  );
};

export default Events;
