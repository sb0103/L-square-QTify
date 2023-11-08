import React from "react";
import Card from "../Card/Card";
import "./grid.css";

function Grid({ title, cards }) {
  return (
    <div className="grid-cointainer">
      <div className="title-bar">
        <span className="title">{title}</span>
        <span className="show-all-btn">Show all</span>
      </div>
      <div className="grid">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              stats={card.stats}
              imgSrc={card.imgSrc}
              label={card.label}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
