"use client";
import Link from "next/link";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import styles from "../styles/callnow.module.css";

import React from "react";
const Call = () => {
  return (
    <ul className={styles.call}>
      <IconContext.Provider value={{ color: "#fff", size: "1.77rem" }}>
        <li className={styles.li}>
          <Link href="tel:8764549844" className={styles.calllink}>
            <button className={styles.callnow}>
              <IoIcons.IoIosCall />
              Call Now
            </button>
          </Link>
        </li>
      </IconContext.Provider>
    </ul>
  );
};

export default Call;
