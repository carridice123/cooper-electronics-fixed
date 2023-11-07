"use client";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import Link from "next/link";
import styles from "../styles/socials.module.css";
import React from "react";
const Socials = () => {
  return (
    <section className={styles.sec}>
      <ul className={styles.navul}>
        <IconContext.Provider value={{ size: "40px" }}>
          <Link href="https://www.instagram.com/copperelectronics">
            <li>
              <AiIcons.AiFillInstagram />
            </li>
          </Link>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "40px" }}>
          <li>
            <Link href="https://www.tiktok.com/@copper.electronic">
              <FaIcons.FaTiktok />
            </Link>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "40px" }}>
          <li className={styles.facebook}>
            <Link href="#">
              <BsIcons.BsFacebook />
            </Link>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "40px" }}>
          <li>
            <Link href="#">
              <BsIcons.BsTwitter />
            </Link>
          </li>
        </IconContext.Provider>
      </ul>
    </section>
  );
};

export default Socials;
