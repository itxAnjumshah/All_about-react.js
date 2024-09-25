import React from "react";
import "./Program.css";
import program1 from "../../../assets/program-1-DA_EvTPy.png";
import program2 from "../../../assets/program-2-DRqwF0EM.png";
import program3 from "../../../assets/program-3-C0g4YULi.png";
import program_icon_1 from"../../../assets/download (4).png";
import program_icon_2 from"../../../assets/download (1).png";
import program_icon_3 from"../../../assets/download (2).png";


export default function Program() {
  return (
    <div className="Programs">
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
}
