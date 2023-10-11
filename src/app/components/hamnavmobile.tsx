"use client";
// import styles from "../styles/hamnavmobile.module.css";
import { use, useState } from "react";
import Mobilenavcontent from "./mobilenavcontent";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Flamenco } from "next/font/google";
const Mobilenav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <section className="sec1">
      <div className="navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
        <div className="sham" onClick={toggleHamburger}>
          <Mobilenavcontent />
        </div>
      </div>
      <style jsx>
        {`
          .navigation {
            width: 100%;
            height: 50px;
            background-color: blue;
          }
          .navigation ul {
            display: flex;
            flex-wrap: wrap;
            float: right;
            margin: 20 0px;
          }
          .navigation ul li {
            list-style-type: none;
            padding-right: 10px;
          }
          .ham {
            display: none;
          }

          @media (max-width: 600px) {
            .ham {
              display: fixed;
              padding-top: 10px;
              margin-left: 10px;
              z-index: 10;
              display: none;
            }
            .navigation ul {
              display: ${hamburgerOpen ? "inline" : "none"};
              background-color: blue;
              height: 100vh;
              width: 50vw;
              margin-top: 50px;
              position: absolute;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Mobilenav;
