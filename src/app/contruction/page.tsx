import Image from "next/image";
import styles from "./style/contruction.module.css";
import Contacts from "../components/contact";
import About from "../components/about";
const Construction = () => {
  return (
    <section className={styles.sec1}>
      <section className={styles.constructionhead}>
        <Image
          src="/contruction7.jpg"
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
                  src="/construction2.jpg"
                  alt="construction materials in maypen clarendon"
                  width={300}
                  height={300}
                  className={styles.image}
                ></Image>
              </div>

              <div className={styles.reality}>
                <h1 className={styles.realityh2}>Make your dreams a reality</h1>
              </div>
            </div>
            <div className={styles.constructiondiv2}>
              <div className={styles.imgradius}>
                <Image
                  src="/construction1.jpg"
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
                  src="/construction4.jpg"
                  alt="construction image delivering sand"
                  width={300}
                  height={300}
                  className={styles.image}
                ></Image>
              </div>

              <div className={styles.divteam}>
                <h1 className={styles.divteamh1}>Trade trust for Quality</h1>
                {/* <h2 className={styles.team}>
                  Our contruction team is always prepared for your order
                </h2>
                <p className={styles.supplyp1}>
                  We have supply many business and home owners today with the
                  materials they needed
                </p>
                <p className={styles.supplyp2}>
                  From the ground all the way up we have what you need.
                </p> */}
              </div>
            </div>
            <div className={styles.constructiondiv4}>
              <div className={styles.imgradius}>
                <Image
                  src="/plumbing1.jpg"
                  alt="plumbing services in maypen clarendon"
                  width={300}
                  height={300}
                  className={styles.image}
                ></Image>
              </div>
              <div className={styles.plumbingdiv}>
                <h1 className={styles.plumbingdivh1}>We also do plumbing</h1>
              </div>
            </div>

            <div className={styles.constructiondiv5}>
              <div className={styles.imgradius}>
                <Image
                  src="/plumbing2.jpg"
                  alt="plumbing services in maypen clarendon"
                  width={300}
                  height={300}
                  className={styles.image}
                ></Image>
              </div>
              <div className={styles.plumbingdiv}>
                <h1 className={styles.plumbingdivh1}>Get that leakage fixed</h1>
              </div>
            </div>
          </section>
        </section>
        <section className={styles.sec4container}>
          <div className={styles.gallery}>
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
