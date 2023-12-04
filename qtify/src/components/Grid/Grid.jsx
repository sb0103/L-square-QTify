import React from "react";
import Card from "../Card/Card";
import "./grid.css";
import ToolTip from "../ToolTip/ToolTip";

function Grid({ title, cards, toggleView }) {
  return (
    <div className="grid-cointainer">
      <div className="title-bar">
        <span className="title">{title}</span>
        <span
          className="show-all-btn"
          onClick={() => {
            toggleView();
          }}
        >
          Show Less
        </span>
      </div>
      <div className="grid">
        {cards.map((card) => {
          return (
            <ToolTip text={`${card.songsCount} songs`} key={card.id}>
              <Card
                stats={card.stats}
                imgSrc={card.imgSrc}
                label={card.label}
              />
            </ToolTip>
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
