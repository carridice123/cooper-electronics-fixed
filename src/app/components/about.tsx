import styles from "../styles/about.module.css";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <section className={styles.sec1}>
      <div className={styles.divheading}>
        <h1 className={styles.heading}>
          About Us
          <span className={styles.headingspann}>
            28A WEST PARK ave, Maypen Clarendon
          </span>
        </h1>

        <div className={styles.googlemaps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.0785150066254!2d-77.25689062916071!3d17.975083748097045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb9f2cb1ada675%3A0xdeba2b46ddad10b!2sCopper%20Electronics!5e0!3m2!1sen!2sjm!4v1697241319173!5m2!1sen!2sjm"
            width="600"
            height="450"
          ></iframe>
        </div>
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
        </div>
      </section>
      <div className={styles.div2}>
        <div className={styles.hardwarediv}>
          <div className={styles.hardware}>
            <h1 className={styles.hardwareh1}>Hardwares</h1>
          </div>
          <div className={styles.hardwareuls}>
            <ul className={styles.div2ul}>
              <li className={styles.lis}>Sand</li>
              <li className={styles.lis}>Grit</li>
              <li className={styles.lis}>Blocks</li>
              <li className={styles.lis}>Steel</li>
              <li className={styles.lis}>Cement etc</li>
            </ul>
            <ul className={styles.div2ul}>
              <li className={styles.lis}>Doors</li>
              <li className={styles.lis}>Windows</li>
              <li className={styles.lis}>Tiles</li>
              <li className={styles.lis}>Toilets</li>
              <li className={styles.lis}>Face Basins etc</li>
            </ul>
          </div>
        </div>

        <div className={styles.servicesnaddress}>
          <p>
            Copper Electronics and Hardwares has turned many bad days into good
            days with quick solutions. Where we strive to provide hassle free
            services to our customers. Our employees are competent and
            hardworking which gets the job done in the quickest and most
            efficient way.
          </p>
        </div>
        <div className={styles.div3content}>
          <div className={styles.div3}>
            <div>
              <Image
                src="/clock.jpg"
                alt="clock image"
                width={200}
                height={200}
                className={styles.divimg}
              ></Image>
            </div>

            <p className={styles.timedesk}>
              Your time is money and we value it as much as your order therefore
              we want you to recieve your order as soon as possible.
            </p>
            <p className={styles.time}>
              Your time is money and we value it as much as your order.
            </p>
          </div>
          <div className={styles.div4}>
            <div>
              <Image
                src="/phone.jpg"
                alt="phone image"
                width={100}
                height={100}
                className={styles.divimg}
              ></Image>
            </div>

            <p className={styles.timesdesk}>
              We have excellent customer support call us open hours
            </p>
            <p className={styles.times}>
              We have excellent customer support call us open hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
