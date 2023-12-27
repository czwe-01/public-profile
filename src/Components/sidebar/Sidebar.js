import React from "react";
import "../../styles/Sidebar.css";
import Contacts from "./Contacts";
import SideBarHeader from "./SideBarHeader";
import Socials from "../socials/Socials";
import Separator from "../separator/Separator";

export default function Sidebar() {
  return (
    <aside className="active sidebar" data-sidebar>
      <SideBarHeader />

      <div className="sidebar-info_more">
        <Separator />
        <Contacts />
        <Separator />
        <Socials />
      </div>
    </aside>
  );
}
