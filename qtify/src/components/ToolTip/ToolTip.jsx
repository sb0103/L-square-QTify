import { useState } from "react";
import "./toolTip.css";

export default function ToolTip({ text, children, center = false }) {
  let [cName, setCName] = useState("");

  return (
    <div
      className="tool-tip-parent"
      onMouseEnter={() => {
        setCName("show-tool-tip");
      }}
      onMouseLeave={() => {
        setCName("");
      }}
    >
      {children}
      <div className={`tool-tip ${cName} ${center ? "tool-tip-center" : ""}`}>
        {text}
      </div>
    </div>
  );
}
