import Image from "next/image";
import styles from "./style/events.module.css";
import Contacts from "../components/contact";
// import { Caveat } from '@next/font/google'
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
      <section className={styles.eventscontainer}>
        <section className={styles.hosting}>
          <div className={styles.imgradius}>
            <Image
              src="/eventshosting.png"
              alt="place in maypen to host an event"
              width={300}
              height={300}
              className={styles.constructimg}
            ></Image>
          </div>
          <div className={styles.hostingdiv}>
            <h1>We Host formal and informal events</h1>
          </div>
        </section>
        <section className={styles.hosting2}>
          <div className={styles.imgradius}>
            <Image
              src="/img9.jpg"
              alt="place in maypen to host an event"
              width={300}
              height={300}
              className={styles.constructimg}
            ></Image>
          </div>
          <div className={styles.hostingdiv}>
            <h1>Our bar is filled with refreshments</h1>
          </div>
        </section>
        <section className={styles.hosting3}>
          <div className={styles.imgradius}>
            <Image
              src="/img15.jpg"
              alt="rent a sound in maypen clarendon"
              width={300}
              height={300}
              className={styles.constructimg}
            ></Image>
          </div>
          <div className={styles.hostingdiv}>
            <h1>Book your event at (876)837-8766</h1>
          </div>
        </section>
        <section className={styles.entertainmentcontent}>
          <div className={styles.divevents}>
            <h1>Gallery</h1>
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
      </section>

      <About />
      <Contacts />
    </section>
  );
};

export default Events;
