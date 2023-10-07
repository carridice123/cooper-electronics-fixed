import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <section>
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
