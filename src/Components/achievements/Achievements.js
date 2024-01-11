import React from "react";
import TimeLine from "../timeline/TimeLine";
import { FaCertificate } from "react-icons/fa";

export default function Achievements({ active, data }) {
  return (
    <>
      <article
        className={active ? "resume active" : "resume"}
        data-page="resume"
      >
        <header>
          <h1 className="article-title">
            <span></span>My achievements
          </h1>
        </header>
        <TimeLine
          data={data}
          category="certificates"
          title="Certificates"
          icon={<FaCertificate />}
        />
      </article>
    </>
  );
}
