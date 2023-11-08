import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import "../styles/sidebarmobile.css";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Electronics",
    path: "/electronics",
    icon: <GiIcons.GiPocketRadio />,
    cName: "nav-text",
  },
  {
    title: "Construction",
    path: "/contruction",
    icon: <GiIcons.GiHammerNails />,
    cName: "nav-text",
  },
  {
    title: "Events",
    path: "/events",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Rental cars",
    path: "/rental",
    icon: <FaIcons.FaCarSide />,
    cName: "nav-text",
  },
];
