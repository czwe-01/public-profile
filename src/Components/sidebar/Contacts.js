import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

import portfolioData from "../../data/portfolioData.json";
import IconBox from "../IconBox/IconBox";

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
          <a href={detail.href} className="contact-link" key={index}>
            <li className="contact-item">
              <IconBox detail={detail} />

              <div className="contact-info">
                <p className="contact-title">{detail.label}</p>

                {detail.value}
              </div>
            </li>
          </a>
        );
      })}
    </ul>
  );
}

export default Contacts;
