"use client";
import Link from "next/link";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import styles from "../styles/callnow.module.css";

import React from "react";
const Call = () => {
  return (
    <ul className={styles.call}>
      <IconContext.Provider value={{ color: "#fff", size: "2.33rem" }}>
        <li className={styles.li}>
          <Link href="tel:8764549844" className={styles.calllink}>
            <IoIcons.IoIosCall />
            Call Now
          </Link>
        </li>
      </IconContext.Provider>
    </ul>
  );
};

export default Call;
