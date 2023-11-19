import "./faq.css";
import { IconArrowDown } from "../Icons/Icons";
import { useState } from "react";

export default function FAQ({}) {
  return (
    <>
      {" "}
      <div className="faq-container">
        <div className="faq-title">FAQ</div>
        <Accordian
          title={"Is QTify free to use?"}
          text={"Can I download and listen to songs offline?"}
        />
        <Accordian
          title={"Can I download and listen to songs offline?"}
          text={
            "Sorry, unfortunately we don't provide the service to download any songs."
          }
        />
      </div>
    </>
  );
}

function Accordian({ title, text }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="accordian-container">
      <div className="accordian">
        <div
          className="accordian-title"
          onClick={() => {
            setExpand((val) => !val);
          }}
        >
          {title}
          <div
            className={`icon-arrow-down ${expand === true ? "rotate180" : ""}`}
          >
            <IconArrowDown />
          </div>
        </div>
        <div
          className={`accordian-text ${
            expand === true ? "accordian-text-expand" : ""
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
