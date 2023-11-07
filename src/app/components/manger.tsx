import Image from "next/image";
import styles from "../styles/manager.module.css";
const Manager = () => {
  return (
    <section className={styles.sec1}>
      <div className={styles.div1}>
        <Image
          src="/coppermanager.jpg"
          alt="manger for copper electronics and hardwares"
          width={300}
          height={300}
          className={styles.managerimg}
        ></Image>
        <div className={styles.owner}>
          <h1 className={styles.ceo}>Operating CEO and Owner</h1>
          <h1 className={styles.ownername}>Hughroy Willamson</h1>
        </div>
      </div>
      <div className={styles.borderright}></div>
      <div className={styles.divp}>
        <p>
          Copper Electronics and Hardwares is a diverse business entity
          established in Maypen,Clarendon. Where we continue to provide
          excellent services to our customers and clients. Our services include
          electrical fixtures, Alarm systems installment, car trackers, cars for
          rental, contruction materials etc. Copper Electronics and Hardwares is
          managed by the business owner Hughroy Williamson which incorporate
          these services into one entity.
        </p>

        <p>
          It is our pride and pledge to meet your goals and expectation. With
          over 20 years of experience in the industry, our employees are equiped
          with the tools and skills to prevent customers coming back with the
          same problems. With this, we save our customers time and earn their
          trust and confidence in us to get the job done next time.
        </p>
      </div>
    </section>
  );
};

export default Manager;
