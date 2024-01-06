import React from "react";

import "./Sidebar.css";
import Contacts from "../contact-info/Contacts";
import Socials from "../socials/Socials";
import Separator from "../separator/Separator";
import SidebarHeader from "../sidebar-header/SidebarHeader";

export default function Sidebar({ toggle }) {
  return (
    <aside className="active sidebar" data-sidebar>
      <SidebarHeader toggle={toggle} />

      <div className="sidebar-info_more">
        <Separator />
        <Contacts />
        <Separator />
        <Socials />
      </div>
    </aside>
  );
}
