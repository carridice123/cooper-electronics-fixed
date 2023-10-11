import Image from "next/image";
import Link from "next/link";
import styles from "../styles/logo.module.css";
const Logo = () => {
  return (
    <section className={styles.logo}>
      <Link href="/">
        <Image
          src="/copperlogo2.png"
          alt="business logo"
          width={180}
          height={180}
        ></Image>
      </Link>
    </section>
  );
};

export default Logo;
