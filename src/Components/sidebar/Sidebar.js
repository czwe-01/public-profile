import React from "react";
import "../../styles/Sidebar.css";
import Contacts from "./Contacts";
import SideBarHeader from "./SideBarHeader";
import Socials from "../socials/Socials";

export default function Sidebar() {
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
