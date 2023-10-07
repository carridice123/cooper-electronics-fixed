import styles from "../styles/about.module.css";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <section className={styles.sec1}>
      <div className={styles.divheading}>
        <h1 className={styles.heading}>About us</h1>
        <Image
          src="/coppermap.jpg"
          alt="map image"
          width={780}
          height={780}
          className={styles.headingmap}
        ></Image>
      </div>
      <section className={styles.sec2}>
        <div className={styles.div1}>
          <div className={styles.services}>
            <h1 className={styles.servicesh1}>Services</h1>
          </div>
          <ul className={styles.servicesul}>
            <li className={styles.lis}>Electrical & Mechanical Tools</li>
            <li className={styles.lis}>Plumbing Fixtures & Fittings</li>
            <li className={styles.lis}>Electrical Fixtures & Fittings</li>
            <li className={styles.lis}>Doors,Toilets,Face Basins etc</li>
          </ul>
          <div className={styles.servicesnaddress}>
            <h3>
              We are a Electronics and Hardware store in Maypen, Clarendon.
            </h3>
            <span>28A WEST PARK ave, Maypen Clarendon</span>
          </div>
        </div>
      </section>
      <div className={styles.div2}>
        <div className={styles.hardware}>
          <h1 className={styles.hardwareh1}>Hardwares</h1>
        </div>
        <ul className={styles.div2ul}>
          <li className={styles.lis}>Sand</li>
          <li className={styles.lis}>Grit</li>
          <li className={styles.lis}>Blocks</li>
          <li className={styles.lis}>Steel</li>
          <li className={styles.lis}>Cement etc</li>
        </ul>

        <div className={styles.div3content}>
          <div className={styles.div3}>
            <div>
              <Image
                src="/clock.png"
                alt="phone image"
                width={200}
                height={200}
                className={styles.divimg}
              ></Image>
            </div>

            <p>
              Your time is money and we value it as much as your order therefore
              we want you to recieve your order as soon as possible.
            </p>
          </div>
          <div className={styles.div4}>
            <div>
              <Image
                src="/phone.png"
                alt="clock image"
                width={100}
                height={100}
                className={styles.divimg}
              ></Image>
            </div>

            <p>We have excellent customer support call us open hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
