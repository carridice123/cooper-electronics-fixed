"use client";
import styles from "../styles/mobilesecnav.module.css";

import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import React from "react";

const Mobilesecnav = () => {
  return (
    <section className={styles.mobilesecnav}>
      <section className={styles.secnavcontent}>
        <ul className={styles.div1}>
          <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
            <li className={styles.clockicon}>
              <AiIcons.AiOutlineClockCircle />
            </li>
          </IconContext.Provider>
          <span className={styles.spanhours}>Sun to Sun-7:00AM to 10:00PM</span>
        </ul>
        <ul className={styles.div2}>
          <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
            <Link href="https://www.instagram.com/copperelectronics">
              <li>
                <AiIcons.AiFillInstagram />
              </li>
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
            <li>
              <Link href="https://www.tiktok.com/@copper.electronic">
                <FaIcons.FaTiktok />
              </Link>
            </li>
          </IconContext.Provider>
        </ul>
      </section>
    </section>
  );
};

export default Mobilesecnav;
