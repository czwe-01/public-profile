import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

import portfolioData from "../../data/portfolioData.json";
import IconBox from "../IconBox/IconBox";
import "./Contacts.css";

const icons = [
  <FaEnvelope />,
  <FaPhoneAlt />,
  <FaRegCalendarAlt />,
  <FaMapMarkedAlt />,
];

const contactInfo = portfolioData.contactInfo.map((contact, i) => {
  return { ...contact, icon: icons[i] };
});

function Contacts() {
  return (
    <ul className="contacts-list">
      {contactInfo.map((detail, index) => {
        return (
          <li className="contact-item" key={detail.value + index}>
            <IconBox icon={detail.icon} />
            {detail.href ? (
              <a href={detail.href} key={index}>
                <div className="contact-info">
                  <p className="contact-title">{detail.label}</p>

                  {detail.value}
                </div>
              </a>
            ) : (
              <div className="contact-info">
                <p className="contact-title">{detail.label}</p>

                {detail.value}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
