import Image from "next/image";
import styles from "./styles/electronics.module.css";
import Contacts from "../components/contact";
import About from "../components/about";
const Electronics = () => {
  return (
    <section className={styles.sec1}>
      <div className={styles.headerimg}>
        <Image
          src="/electronicspage.jpg"
          alt="electronics header"
          width={530}
          height={530}
          className={styles.image}
        ></Image>
        <div className={styles.divrentalh1}>
          <h1>Electronics Installation</h1>
        </div>
      </div>
      <section>
        <section className={styles.imgcontain}>
          <section className={styles.secondsec}>
            <Image
              src="/img13.jpg"
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
              src="/img25.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
          </section>
          <section className={styles.thirdsec}>
            <Image
              src="/img23.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
            <Image
              src="/img32.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
            <Image
              src="/img33.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.img}
            ></Image>
          </section>
        </section>
      </section>
      {/* desktop sec */}
      <section className={styles.divscontainer}>
        <div className={styles.cameradiv}>
          <div className={styles.imgradius}>
            <Image
              src="/camera.jpg"
              alt="we provide Camera installment"
              width={600}
              height={600}
              className={styles.imgelec}
            ></Image>
          </div>

          <div className={styles.cameradivp}>
            <p className={styles.cameradivp1}>
              Get more security for your home and business
            </p>
            <p className={styles.cameradivp2}>
              We install and repair camera systems
            </p>
          </div>
        </div>
        <div className={styles.powersaw}>
          <div className={styles.imgradius}>
            <Image
              src="/powersaw.jpg"
              alt="Power saw for sale in maypen clarendon"
              width={300}
              height={300}
              className={styles.imgelec}
            ></Image>
          </div>

          <div className={styles.powersawchild}>
            <h1 className={styles.powersawh1}>
              {" "}
              Power Saw and more electrical tools
            </h1>
          </div>
        </div>
        <div className={styles.electricaldrill}>
          <div className={styles.imgradius}>
            <Image
              src="/electricaldrill.jpg"
              alt="cheap electrical for sale in maypen clarendow Jamaica"
              width={300}
              height={300}
              className={styles.imgelec}
            ></Image>
          </div>
          <div className={styles.electricalldrillchild}>
            <h1 className={styles.electricalldrillchildh1}>
              Electrical drills for reasonable price
            </h1>
          </div>
        </div>
        <div className={styles.div1}>
          <div className={styles.imgradius}>
            <Image
              src="/img26.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.imgelec}
            ></Image>
          </div>

          <div className={styles.div1content}>
            <h1 className={styles.h1keys}>Upgrade to keyless ignition</h1>

            <p className={styles.replacekeys}>
              Never worry where you put your car keys again
            </p>
          </div>
        </div>

        <div className={styles.div2}>
          <div className={styles.imgradius}>
            <Image
              src="/img24.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.imgelec}
            ></Image>
          </div>

          <div className={styles.div2p}>
            <p className={styles.soundbases}>We build custom sound basses</p>
            <p className={styles.setup}>
              Come with your Vehicle and we handle the set up 100% hassle free.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.imgcontainer}>
        <div className={styles.gallery}>
          <h2>Gallery</h2>
        </div>
        <section className={styles.imagecontainer2}>
          <section className={styles.secondsec}>
            <Image
              src="/img13.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.image}
            ></Image>
            <Image
              src="/img26.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.image}
            ></Image>
            <Image
              src="/img25.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.image}
            ></Image>
          </section>
          <section className={styles.thirdsec}>
            <Image
              src="/img23.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.image}
            ></Image>
            <Image
              src="/img32.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.image}
            ></Image>
            <Image
              src="/img33.jpg"
              alt="image"
              width={600}
              height={600}
              className={styles.image}
            ></Image>
          </section>
        </section>
      </section>

      <About />
      <Contacts />
    </section>
  );
};

export default Electronics;
