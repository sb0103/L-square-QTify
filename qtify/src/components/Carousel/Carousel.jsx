import { useRef, useState, useEffect } from "react";
import Card from "../Card/Card";
import { IconCarouselLeft, IconCarouselRight } from "../Icons/Icons";
import ToolTip from "../ToolTip/ToolTip";

import "./carousel.css";

export default function Carousel({ title, cards, toggleView }) {
  const carousel = useRef(null);
  const [pages, setPages] = useState({ current: 1, max: 1 });

  useEffect(() => {
    let p = Math.ceil(cards / 7);
    setPages({ current: 1, max: p });
  }, [cards]);

  return (
    <>
      <div className="carousel-container">
        <div className="title-bar">
          <span className="title">{title}</span>
          <span
            className="show-all-btn"
            onClick={() => {
              toggleView();
            }}
          >
            Show all
          </span>
        </div>
        <div className="carousel" ref={carousel}>
          {" "}
          {cards.map((card) => {
            return (
              <ToolTip text={`${card.songsCount} songs`} key={card.id} center>
                <Card
                  imgSrc={card.imgSrc}
                  stats={card.stats}
                  label={card.label}
                />
              </ToolTip>
            );
          })}
        </div>
        <div
          className="carousel-btn-left"
          onClick={() => {
            carousel.current.scrollTo({
              left: (pages.current - 2) * (159 * 7 + 20 * 6),
              behavior: "smooth",
            });
            setPages((p) => {
              return { ...p, current: p.current - 1 };
            });
          }}
        >
          <IconCarouselLeft />
        </div>
        <div
          className="carousel-btn-right"
          onClick={() => {
            carousel.current.scrollTo({
              left: pages.current * (159 * 7 + 20 * 6),
              behavior: "smooth",
            });
            setPages((p) => {
              return { ...p, current: p.current + 1 };
            });
          }}
        >
          <IconCarouselRight />
        </div>
      </div>
    </>
  );
}
