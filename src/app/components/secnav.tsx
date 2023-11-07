"use client";
import styles from "../styles/secondnav.module.css";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

const Secondnav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navLinks = [
    // { title: "Home", link: "/" },
    { title: "Electronics", link: "/electronics" },
    { title: "Construction", link: "/contruction" },
    { title: "Cars on Rental", link: "/rental" },
    { title: "Events", link: "/events" },
  ];

  return (
    <section className={styles.navul}>
      <div className={styles.gobackdiv}>
        <Link href="/" className={styles.goback}>
          <Image
            src="/arrowleft.jpg"
            alt="go back img"
            width={20}
            height={20}
          ></Image>
          Go back
        </Link>
      </div>
      <div className={styles.divlis}>
        {navLinks.map(({ link, title }) => (
          <Link
            key={title}
            href={link}
            className={`${
              pathname === link
                ? `border-solid border-b-4 text-slate-500  font-black text-base border-color: rgb(0 0 0);`
                : ``
            } border-black hover:text-blue-900 border-solid`}
          >
            {title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Secondnav;
