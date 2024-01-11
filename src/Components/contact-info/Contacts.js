import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

import IconBox from "../IconBox/IconBox";
import "./Contacts.css";

const icons = [
  <FaEnvelope />,
  <FaPhoneAlt />,
  <FaRegCalendarAlt />,
  <FaMapMarkedAlt />,
];

function Contacts({ contacts }) {
  const contactInfo = contacts.map((contact, i) => {
    return { ...contact, icon: icons[i] };
  });

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
