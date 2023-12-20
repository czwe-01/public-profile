import React from "react";
import "../../styles/Sidebar.css";
import { useState } from "react";
import Contacts from "./Contacts";
import SideBarHeader from "./SideBarHeader";
import Socials from "../socials/Socials";

export default function Sidebar() {
  const [isActive, setActive] = useState(false);
  const [show, setShow] = useState("Show");
  const toggleclassName = () => {
    setActive(!isActive);
    if (isActive) {
      setShow("show");
    }
    if (!isActive) {
      setShow("hide");
    }
  };

  return (
    <aside className="active sidebar" data-sidebar>
      <SideBarHeader />

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <Contacts />

        <div className="separator"></div>
        <Socials />
      </div>
    </aside>
  );
}
