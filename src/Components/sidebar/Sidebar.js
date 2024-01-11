import React from "react";

import "./Sidebar.css";
import Contacts from "../contact-info/Contacts";
import Socials from "../socials/Socials";
import Separator from "../separator/Separator";
import SidebarHeader from "../sidebar-header/SidebarHeader";

export default function Sidebar({ toggle, data }) {
  return (
    <aside className="active sidebar" data-sidebar>
      <SidebarHeader toggle={toggle} personalInfo={data.personalInfo} />

      <div className="sidebar-info_more">
        <Separator />
        <Contacts contacts={data.contactInfo} />
        <Separator />
        <Socials socials={data.socials} />
      </div>
    </aside>
  );
}
