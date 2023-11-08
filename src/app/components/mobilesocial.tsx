"use client";
import styles from "../styles/mobilesocial.module.css";

import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import React from "react";

const Mobilesocials = () => {
  return (
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
  );
};

export default Mobilesocials;
