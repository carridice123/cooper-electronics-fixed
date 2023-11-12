"use client";

import React, { useState } from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Email2 from "./email2";
import Call from "./callnow";
import Mobilesocials from "./mobilesocial";
import { SidebarData } from "./sidebarData";
import { IconContext } from "react-icons";
import "../styles/sidebarmobile.css";

const Sidebarmobile = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <div className="navbar">
          <div className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
          <div className="companyname">
            <h1>Copper-Electronics-Hardwares</h1>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link href="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path} className="linkk">
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className="contacts">
              <Call />
              <Email2 />
              <Mobilesocials />
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebarmobile;
function k(gzipped: any, arg1: number, k: any) {
  throw new Error("Function not implemented.");
}
