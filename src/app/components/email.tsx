"use client";
import Link from "next/link";
import styles from "../styles/email.module.css";
import * as HiIcons from "react-icons/hi";
import { IconContext } from "react-icons";
import React from "react";

const Email = () => {
  return (
    <ul>
      <IconContext.Provider value={{ color: "#fff", size: "1.94rem" }}>
        <li className={styles.mail}>
          <HiIcons.HiOutlineMail />
          <Link
            href="mailto:copperelectronicsandhardwares@gmail.com"
            className={styles.email}
          >
            copperelectronicsandhardwares@gmail.com
          </Link>
        </li>
      </IconContext.Provider>
    </ul>
  );
};

export default Email;
