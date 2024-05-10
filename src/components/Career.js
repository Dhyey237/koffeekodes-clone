import React from "react";
import tea from "../assets/tea.svg";
import "./Career.css";

function Career() {
  return (
    <div className="career-container">
      <img className="chai-cup" src={tea} alt="" />
      <div className="career-title">
        <div>Interested in working </div>
        <div>with us ?</div>
      </div>
      <button type="button" className="launch-btn">
        LAUNCH IT
      </button>
    </div>
  );
}
export default Career;
