import Image from "next/image";
import styles from "./style/contruction.module.css";
import Contacts from "../components/contact";
import About from "../components/about";
const Construction = () => {
  return (
    <section className={styles.sec1}>
      <section className={styles.constructionhead}>
        <Image
          src="/contruction7.png"
          alt="construction image"
          width={1700}
          height={1700}
          className={styles.constuctionimg}
        ></Image>
        <div className={styles.contructionmaterial}>
          <h1>Construction Materials</h1>
        </div>
      </section>
      <section className={styles.sec2}>
        <section className={styles.sectcontent}>
          <section className={styles.layoutcontainer}>
            <div className={styles.constructiondiv1}>
              <div className={styles.imgradius}>
                <Image
                  src="/construction2.png"
                  alt="construction materials in maypen clarendon"
                  width={300}
                  height={300}
                  className={styles.image}
                ></Image>
              </div>

              <div className={styles.reality}>
                <h1>Make your dreams a reality</h1>
              </div>
            </div>
            <div className={styles.constructiondiv2}>
              <div className={styles.imgradius}>
                <Image
                  src="/construction1.png"
                  alt="construction materials in maypen clarendon"
                  width={300}
                  height={300}
                  className={styles.image}
                ></Image>
              </div>

              <div className={styles.contruction}>
                <h2 className={styles.orderh2}>Your order is our priority</h2>
                <p className={styles.delivery}>on time delivery gauranteed</p>
              </div>
            </div>
            <div className={styles.constructiondiv3}>
              <div className={styles.imgradius}>
                <Image
                  src="/construction4.png"
                  alt="construction image delivering sand"
                  width={300}
                  height={300}
                  className={styles.image}
                ></Image>
              </div>

              <div className={styles.divteam}>
                <h2 className={styles.team}>
                  Our contruction team is always prepared for your order
                </h2>
                <p className={styles.supplyp1}>
                  We have supply many business and home owners today with the
                  materials they needed
                </p>
                <p className={styles.supplyp2}>
                  From the ground all the way up we have what you need.
                </p>
              </div>
            </div>
          </section>

          {/* <div className={styles.contructioncontent}>
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
          </div> */}
        </section>
        <section className={styles.sec4container}>
          <div>
            <h1>Gallery</h1>
          </div>
          <section className={styles.sec4}>
            <Image
              src="/img7.jpg"
              alt="image"
              width={440}
              height={410}
              className={styles.img}
            ></Image>
            <Image
              src="/img8.jpg"
              alt="image"
              width={440}
              height={410}
              className={styles.img}
            ></Image>
            <Image
              src="/img1.jpg"
              alt="image"
              width={440}
              height={410}
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

export default Construction;
