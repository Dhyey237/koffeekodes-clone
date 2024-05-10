import React from "react";
import "./Sec1.css";
import planeTea from "../assets/plane-tea.svg";

function Sec1() {
  return (
    <section className="container">
      <div className="sec1">
        <div className="title">
          <h1>Tech Beyond Limits</h1>
          <img className="plane-tea" src={planeTea} alt="" />
        </div>

        <div className="text-container">
          <div className="text">
            We are dedicated to pushing boundaries and exploring the boundless
            possibilities of technology. Join us on a journey where innovation
            knows no limits. With us, you'll enter a realm of endless
            innovation, where your imagination is the only constraint. Embrace a
            future without boundaries – that's our promise.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec1;
